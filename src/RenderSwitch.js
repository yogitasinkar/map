import React, { Component } from "react";
import Switch from "react-switch";

class RenderSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div style={{display:'flex', justifyContent: 'space-evenly', width: '200px'}}>
        <p style={{}}>WATER</p>
        <label>
            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} offColor={'#0000FF'} onColor={'#B22222'}/>
        </label>
        <p>WASTE</p>
      </div>
    );
  }
}

export default RenderSwitch;
