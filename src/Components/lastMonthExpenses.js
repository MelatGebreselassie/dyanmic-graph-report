import React, { useState } from 'react';
import ChartOption from './chartOption';
import Chart from './charts/Chart';
import DeleteIcons from '../assets/icons/delete.svg'


const LastMonthExpenses = () => {
    const [formData, setFormData] = useState([
        {
            expense: {
                label: "Last Month Expense 1",
                value: "",
                name: "expense"
            },
            cost: {
                label: "Cost",
                value: 0,
                name: "cost"
            },
        }
    ]);
    const [chartType, setChartType] = useState("")
    console.log("charttype", chartType)
    const handleValChange = (e, key) => {
        var copyFormData = [...formData];
        copyFormData[key][e.target.name].value = e.target.value;
        setFormData(copyFormData)
    }
    const handleAddMore = () => {
        var copyFormData = [...formData];
        copyFormData.push({

            expense: {
                label: "Last Month Expense " + (formData.length + 1),
                value: "",
                name: "expense"
            },
            cost: {
                label: "Cost",
                value: 0,
                name: "cost"
            },

        })
        setFormData(copyFormData)
    }
    var TotalConst = () => {
        var total = 0;
        formData.map(itm => {
            total += +itm.cost.value
        })

        return total;
    }
    const handleChangeChart = (type) => {
        setChartType(type)
    }

    const lineChartData = () => {
        var chartArr = [];
        formData.map(itm => {
            chartArr.push(+itm.cost.value)
        })
        return chartArr;
    }
    return (
        <>
            <h1 className="section-title">Last Month Expenses</h1>
            <div className="card">
                <div className="card-body">
                    {
                        formData.map((itm, key) => (
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label">{itm.expense.label}</label>
                                        <input type="text" onChange={(e) => handleValChange(e, key)} name={itm.expense.name} value={itm.expense.value} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3">
                                        <label className="form-label">{itm.cost.label}</label>
                                        <input type="number" onChange={(e) => handleValChange(e, key)} name={itm.cost.name} value={itm.cost.value} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button className="remove-btn input-remove" onClick={() => {
                                        var newCopyArray = [...formData]
                                        newCopyArray.splice(key, 1)
                                        setFormData(newCopyArray)
                                    }}><img src={DeleteIcons} /> </button>
                                </div>
                            </div>
                        ))
                    }
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <button onClick={handleAddMore} type="button" class="btn btn-primary">Add More</button>
                        </div>
                        <div className="col-4">
                                <div className="mb-3">
                                    <label className="form-label">{"Total Cost"}</label>
                                    <input readOnly value={TotalConst()} className="form-control" />
                                </div>
                        </div>
                    </div>
                    <ChartOption hanldeChange={(currentChart) => handleChangeChart(currentChart)} />

                    {
                        chartType === "line" &&
                        <Chart
                            options={
                                {
                                    title: {
                                        text: 'Line Chart'
                                    },
                                    series: [{ name: "Last Month Expenses", data: lineChartData() }]

                                }
                            }
                        />
                    }
                    {
                        chartType === "bar" &&
                        <Chart
                            options={
                                {
                                    title: {
                                        text: 'Line Chart'
                                    },
                                    chart: {
                                        type: 'column'
                                    },
                                    series: [
                                        {
                                            name: "Last Month Expenses",
                                            colorByPoint: true,
                                            data: formData.map((itm, key) => {
                                                return {
                                                    name: "Expense " + (key + 1),
                                                    y: +itm.cost.value
                                                }
                                            })
                                        }
                                    ]

                                }
                            }
                        />
                    }


                    {
                        chartType === "pie" &&
                        <Chart
                            options={
                                {
                                    title: {
                                        text: 'Line Chart'
                                    },
                                    chart: {
                                        type: 'pie'
                                    },
                                    series: [
                                        {
                                            name: "Last Month Expenses",
                                            colorByPoint: true,
                                            data: formData.map((itm, key) => {
                                                return {
                                                    name: "Expense " + (key + 1),
                                                    y: +itm.cost.value
                                                }
                                            })
                                        }
                                    ]

                                }
                            }
                        />
                    }
                </div>
            </div>
        </>
    )
}

export default LastMonthExpenses