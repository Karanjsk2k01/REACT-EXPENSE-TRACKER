import React from 'react'
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

  const dataPointsValue = props.dataPoints.map(data => data.value);
  const totalMaxValue = Math.max(...dataPointsValue)


  return (
    <div className='chart'>
      {props.dataPoints.map(data => <ChartBar key={data.label} value={data.value} maxValue={null} label={data.label} />)}

    </div>
  )
}

export default Chart;