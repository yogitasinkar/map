import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import './App.css';
import RenderBarChart from './RenderBarChart';
import { waterData } from './waterData';
import waterDam from './images/dam.svg';
import factory from './images/factory.svg';
import DamModal from './DamModal';
import FactoryModal from './FactoryModal';

const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};


const geographyStyle = {
  default: {
    outline: 'none',
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};

function App() {
  const [tooltipContent, setTooltipContent] = useState('');
  const [data,] = useState(waterData);
  const [currentState, setCurrentState] = useState('GJ')

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}`);
      setCurrentState(geo.id)
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  const [damModal, setDamModal] = useState(false);

  const damToggle = () => setDamModal(!damModal);

  const [factoryModal, setFactoryModal] = useState(false);

  const factoryToggle = () => setFactoryModal(!factoryModal);

  return (
    <Container >
      <Row>
        <Col>
          <h1 className="no-margin center">Water/Waste Map</h1>
        </Col>
      </Row>
      <hr/>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <Row>
      <Col xs="8">
        <DamModal modal={damModal} toggle={damToggle} currentState={currentState}/>
        <FactoryModal modal={factoryModal} toggle={factoryToggle} currentState={currentState}/>
        <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            width={300}
            height={200}
            data-tip=""
          >
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const current = data.find(s => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill='#ff8a75'
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </Col>
      <Col xs="4">

        <Row style={{marginTop: '80px'}}><RenderBarChart currentState={currentState} /></Row>
        <p className='text-center'>WATER INFO</p>
        <br/>
        <Row >
          <div style={{display:'flex', justifyContent: 'space-around'}}>
            <div onClick={factoryToggle}>
              <img src={factory} style={{width:"60px"}} alt='Factory'/>
              <p>FACTORY INFO</p>
            </div>
            <div onClick={damToggle}>
              <img src={waterDam} style={{width:"60px"}} alt='Dam'/>
              <p>DAM INFO</p>
            </div>
          </div>
        </Row>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
