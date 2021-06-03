import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, } from 'recharts';
import { getStateData } from './waterData'

const RenderBarChart = ({currentState}) => {
  return (
      <BarChart
          width={400}
          height={200}
          data={getStateData(currentState)}
          >
          <XAxis type="category" dataKey="state"/>
          <YAxis type="number"/>
          <Tooltip cursor={false}/>
          <Legend />
          <Bar dataKey="used" stroke="#8884d8" fill="#8884d8" background={{ stroke: '#eee' }} isAnimationActive={true} barSize={40}/>
          <Bar dataKey="replenished" stroke="#82ca9d" fill="#82ca9d" background={{ stroke: '#eee' }} isAnimationActive={false} barSize={40}/>
      </BarChart>
  )
}

export default RenderBarChart;