import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const LineCharts = ({options}) => (
    <div className="chart-wrapper">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            
        />
    </div>
)

export default LineCharts