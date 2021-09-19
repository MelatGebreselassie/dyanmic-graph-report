import React, { useState } from 'react';
import Chart from './charts/Chart';

const FincialEvalution = () => {
    const [formData, setFormData] = useState({
        lastMonthPredicatedRevnue: 0,
        actualRevenue: 0,
        revnueTarget: 0,
        salesTarget: 0,
        otherTarget: 0
    })

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <>
            <h1 className="section-title">Financial Evaluation</h1>
            <div className="card">
                <div className="card-body">
                    <div className="row">

                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label">Last Month Predicated Revenue</label>
                                <input type="number" onChange={handleInputChange} name={"lastMonthPredicatedRevnue"} value={formData.lastMonthPredicatedRevnue} className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label">Actual Revenue</label>
                                <input type="number" onChange={handleInputChange} name={"actualRevenue"} value={formData.actualRevenue} className="form-control" />
                            </div>
                        </div>
                        <div className="col-12">
                            <Chart
                                options={
                                    {
                                        chart: {
                                            type: 'column'
                                        },
                                        title: {
                                            text: 'Bar Chart'
                                        },
                                        series: [
                                            {
                                                name: "Finalcial Evalutions",
                                                colorByPoint: true,
                                                data: [
                                                    { name: "Predicated", y: +formData.lastMonthPredicatedRevnue },
                                                    { name: "Actual", y: +formData.actualRevenue }
                                                ]
                                            }
                                        ]

                                    }
                                }
                            />
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label className="form-label">Revenue Target</label>
                                <input type="number" onChange={handleInputChange} name={"revnueTarget"} value={formData.revnueTarget} className="form-control" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label className="form-label">Sales Target</label>
                                <input type="number" onChange={handleInputChange} name={"salesTarget"} value={formData.salesTarget} className="form-control" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label className="form-label">Other Target</label>
                                <input type="number" onChange={handleInputChange} name={"otherTarget"} value={formData.otherTarget} className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FincialEvalution;