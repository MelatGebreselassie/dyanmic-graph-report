import React, { useState } from 'react';
import Chart from './charts/Chart';
import ChartOption from './chartOption';
import DeleteIcons from '../assets/icons/delete.svg'

const Accomplishment = () => {
    const [formData, setFormData] = useState([
        {
            input1: {
                label: "Accomplishment 1",
                value: "",
                name: "input1"
            },
            input2: {
                value: "",
                name: "input2"
            },
            isShowChart: false,
            chartType: "",
            lineChart: [
                {
                    name: "",
                    values: ""
                }
            ],
            barChart: [
                {
                    name: "",
                    data: [
                        {
                            name: "",
                            y: ""
                        }
                    ]
                }
            ]

        }
    ])
    const handleChangeInput1 = (e, key) => {
        const copyFormData = [...formData];
        copyFormData[key][e.target.name].value = e.target.value;
        setFormData(copyFormData)
    }
    const handleChangeInput2 = (e, key) => {
        const copyFormData = [...formData];
        copyFormData[key][e.target.name].value = e.target.value;
        setFormData(copyFormData)
    }
    const handleAddMore = () => {
        const copyFormData = [...formData];
        copyFormData.push({
            input1: {
                label: "Accomplishment " + (formData.length + 1),
                value: "",
                name: "input1"
            },
            input2: {
                value: "",
                name: "input2"
            },
            isShowChart: false,
            chartType: "",
            lineChart: [
                {
                    name: "",
                    values: ""
                }
            ],
            barChart: [
                {
                    name: "",
                    data: [
                        {
                            name: "",
                            y: ""
                        }
                    ]
                }
            ]
        })
        setFormData(copyFormData)
    }
    const handleShowChart = (type, key) => {
        const copyFormData = [...formData];
        copyFormData[key].isShowChart = true;
        copyFormData[key].chartType = type;
        setFormData(copyFormData)
    }

    const handleChangeLineChartName = (e, key, chartIndex) => {
        const copyFormData = [...formData];
        copyFormData[key].lineChart[chartIndex].name = e.target.value
        setFormData(copyFormData)
    }
    const handleChangeLineChartValues = (e, key, chartIndex) => {
        var currentInput = e.target.value;
        var isTrue = currentInput.replace(/[^\d,]+/g, '');
        if (isTrue || currentInput == "") {
            const copyFormData = [...formData];
            copyFormData[key].lineChart[chartIndex].values = currentInput
            setFormData(copyFormData)
        }
    }
    const handleAddMoreChartValues = (index) => {
        const copyFormData = [...formData];
        copyFormData[index].lineChart.push(
            {
                name: "",
                values: ""
            }
        )
        setFormData(copyFormData)
    }

    const handleAddMoreBarChartValues = (key, seriesIndex) => {
        const copyFormData = [...formData];
        copyFormData[key].barChart[seriesIndex].data.push(
            {
                name: "",
                y: ""
            }
        )
        setFormData(copyFormData)
    }
    const handleChangeBarSeries = (e, key, chartIndex) => {
        var currentInput = e.target.value;
        const copyFormData = [...formData];
        copyFormData[key].barChart[chartIndex].name = currentInput
        setFormData(copyFormData)

    }
    const handleChangeBarChartName = (e, key, chartIndex, dataIndex) => {
        const copyFormData = [...formData];
        copyFormData[key].barChart[chartIndex].data[dataIndex].name = e.target.value
        setFormData(copyFormData)
    }
    const handleChangeBarChartValues = (e, key, chartIndex, dataIndex) => {
        const copyFormData = [...formData];
        copyFormData[key].barChart[chartIndex].data[dataIndex].y = e.target.value
        setFormData(copyFormData)
    }

    console.log("barchart", formData)
    return (
        <div>
            <h1 className="section-title">Accomplishment</h1>
            {
                formData.map((itm, key) => (
                    <div key={key} className="card">
                        <div className="card-body">
                            <button className="remove-btn card-remove" onClick={() => {
                                var newCopyArray = [...formData]
                                newCopyArray.splice(key, 1)
                                setFormData(newCopyArray)
                            }}> <img src={DeleteIcons} /> </button>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label className="form-label">{itm.input1.label}</label>
                                        <textarea  onChange={(e) => handleChangeInput1(e, key)} name={itm.input1.name} value={itm.input1.value} className="form-control"></textarea>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">How it was Achieved</label>
                                        <textarea  onChange={(e) => handleChangeInput2(e, key)} name={itm.input2.name} value={itm.input2.value} className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>

                            <ChartOption hanldeChange={(currentChart) => handleShowChart(currentChart, key)} />

                            {
                                itm.isShowChart && itm.chartType === "line" && <>
                                    {
                                        itm.lineChart.map((chartVal, chartIdex) => (
                                            <div key={"chart" + chartIdex} className="row mb-3">
                                                <div className="col-4">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" onChange={(e) => handleChangeLineChartName(e, key, chartIdex)} value={chartVal.name} className="form-control" />
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">Values</label>
                                                    <input type="text" onChange={(e) => handleChangeLineChartValues(e, key, chartIdex)} value={chartVal.values} className="form-control" />
                                                    <div className="help">Please enter comma "," sepateted values</div>
                                                </div>
                                                <div className="col-2">
                                                    <button className="remove-btn input-remove" onClick={() => {
                                                        var newCopyArray = [...itm.lineChart]
                                                        var copyFormData = [...formData]
                                                        newCopyArray.splice(chartIdex, 1)
                                                        copyFormData[key].lineChart = newCopyArray
                                                        setFormData(copyFormData)
                                                    }}> <img src={DeleteIcons} /> </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="small-add-more">
                                        <button onClick={() => handleAddMoreChartValues(key)} type="button" class="btn btn-primary">Add More</button>
                                    </div>
                                    <Chart
                                        options={
                                            {
                                                title: {
                                                    text: 'Line Chart'
                                                },
                                                series: itm.lineChart.map(dt => {
                                                    var strVale = dt.values
                                                    var strArr = strVale.split(',');
                                                    var intArr = [];
                                                    for (var i = 0; i < strArr.length; i++)
                                                        intArr.push(parseInt(strArr[i]));
                                                    return { name: dt.name, data: intArr }
                                                })

                                            }
                                        }
                                    />
                                </>
                            }

                            {
                                itm.isShowChart && itm.chartType === "bar" && <>
                                    {
                                        itm.barChart.map((brCrt, chartIdex) => (
                                            <div key={"chart" + chartIdex}>
                                                <div>
                                                    <div className="col-10">
                                                        <label className="form-label">Series Name</label>
                                                        <input type="text" onChange={(e) => handleChangeBarSeries(e, key, chartIdex)} value={brCrt.name} className="form-control" />
                                                    </div>
                                                </div>
                                                {
                                                    brCrt.data.map((barVal, key3) => (
                                                        <div key={"barVal" + key3} className="row mb-3">
                                                            <div className="col-4">
                                                                <label className="form-label">Name</label>
                                                                <input type="text" onChange={(e) => handleChangeBarChartName(e, key, chartIdex, key3)} value={barVal.name} className="form-control" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-label">Values</label>
                                                                <input type="text" onChange={(e) => handleChangeBarChartValues(e, key, chartIdex, key3)} value={barVal.values} className="form-control" />
                                                            </div>
                                                            <div className="col-2">
                                                                <button className="remove-btn input-remove" onClick={() => {
                                                                    var newCopyBarVal = [...brCrt.data]
                                                                    var copyFormData = [...formData]
                                                                    newCopyBarVal.splice(key3, 1)
                                                                    copyFormData[key].barChart[chartIdex].data = newCopyBarVal
                                                                    setFormData(copyFormData)
                                                                }}> <img src={DeleteIcons} /> </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                <div className="small-add-more">
                                                    <button onClick={() => handleAddMoreBarChartValues(key, chartIdex)} type="button" class="btn btn-primary">Add More</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <Chart
                                        options={
                                            {
                                                chart: {
                                                    type: 'column'
                                                },
                                                title: {
                                                    text: 'Bar Chart'
                                                },
                                                series: itm.barChart.map(it => {
                                                    return {
                                                        name: it.name,
                                                        colorByPoint: true,
                                                        data: it.data.map(dt => {

                                                            return { name: dt.name, y: +dt.y }
                                                        })
                                                    }
                                                })




                                            }
                                        }
                                    />
                                </>
                            }


                            {
                                itm.isShowChart && itm.chartType === "pie" && <>
                                    {
                                        itm.barChart.map((brCrt, chartIdex) => (
                                            <div key={"chart" + chartIdex}>
                                                {/* <div>
                                                    <div className="col-12">
                                                        <label className="form-label">Series Name</label>
                                                        <input type="text" onChange={(e) => handleChangeBarSeries(e, key, chartIdex)} value={brCrt.name} className="form-control" />
                                                    </div>
                                                </div> */}
                                                {
                                                    brCrt.data.map((barVal, key3) => (
                                                        <div key={"barVal" + key3} className="row mb-3">
                                                            <div className="col-4">
                                                                <label className="form-label">Name</label>
                                                                <input type="text" onChange={(e) => handleChangeBarChartName(e, key, chartIdex, key3)} value={barVal.name} className="form-control" />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-label">Values</label>
                                                                <input type="text" onChange={(e) => handleChangeBarChartValues(e, key, chartIdex, key3)} value={barVal.values} className="form-control" />
                                                            </div>
                                                            <div className="col-2" >
                                                                <button className="remove-btn input-remove" onClick={() => {
                                                                    var newCopyBarVal = [...brCrt.data]
                                                                    var copyFormData = [...formData]
                                                                    newCopyBarVal.splice(key3, 1)
                                                                    copyFormData[key].barChart[chartIdex].data = newCopyBarVal
                                                                    setFormData(copyFormData)
                                                                }}><img src={DeleteIcons} /> </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                <div className="small-add-more">
                                                    <button onClick={() => handleAddMoreBarChartValues(key, chartIdex)} type="button" class="btn btn-primary">Add More</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <Chart
                                        options={
                                            {
                                                chart: {
                                                    type: 'pie'
                                                },
                                                title: {
                                                    text: 'Bar Chart'
                                                },
                                                series: itm.barChart.map(it => {
                                                    return {
                                                        // name: it.name,
                                                        //  colorByPoint: true,
                                                        data: it.data.map(dt => {

                                                            return { name: dt.name, y: +dt.y }
                                                        })
                                                    }
                                                })




                                            }
                                        }
                                    />
                                </>
                            }

                        </div>
                    </div>
                ))
            }


            <div className="add-more-wrapper">
                <button onClick={handleAddMore} type="button" className="btn btn-primary">Add More</button>
            </div>
        </div >
    )
}

export default Accomplishment;