import React from 'react';
import LineIcon from '../assets/icons/stats.png';
import PieIcon from '../assets/icons/pie-chart.png';
import BarIcon from '../assets/icons/profits.png';
const ChartOption = ({ hanldeChange }) => {
    return (
        <div className="chart-listing">
            <h4> CHARTS </h4>
            <button onClick={() => hanldeChange("line")}> <img src={LineIcon} /> <span>line</span> </button>
            <button onClick={() => hanldeChange("bar")}>  <img src={BarIcon} /> <span>Bar</span> </button>
            <button onClick={() => hanldeChange("pie")}> <img src={PieIcon} /> <span>Pie</span> </button>
        </div>)
}

export default ChartOption