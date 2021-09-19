import React, { useState } from 'react';
import DeleteIcons from '../assets/icons/delete.svg'

const Challenges = () => {
    const [formData, setFormData] = useState([
        {
            input1: {
                label: "Challenge 1",
                value: "",
                name: "input1"
            },
            input2: {
                value: "",
                name: "input2"
            },
            input3: {
                value: "",
                name: "input3"
            },
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
    const handleChangeInput3 = (e, key) => {
        const copyFormData = [...formData];
        copyFormData[key][e.target.name].value = e.target.value;
        setFormData(copyFormData)
    }

    const handleAddMore = () => {
        const copyFormData = [...formData];
        copyFormData.push({
            input1: {
                label: "Challenge " + (formData.length + 1),
                value: "",
                name: "input1"
            },
            input2: {
                value: "",
                name: "input2"
            },
            input3: {
                value: "",
                name: "input3"
            },

        })
        setFormData(copyFormData)
    }
    return (
        <>
            <h1 className="section-title">Challenges</h1>
            {
                formData.map((itm, key) => (
                    <div key={key} className="card">
                        <div className="card-body">
                            <button className="remove-btn card-remove" onClick={() => {
                                var newCopyArray = [...formData]
                                newCopyArray.splice(key, 1)
                                setFormData(newCopyArray)
                            }}><img src={DeleteIcons} /> </button >
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label">{itm.input1.label}</label>
                                        <textarea onChange={(e) => handleChangeInput1(e, key)} name={itm.input1.name} value={itm.input1.value} className="form-control"></textarea>

                                    </div>
                                </div>
                                <div className="col-6">

                                    <div className="mb-3">
                                        <label className="form-label">How it was overcomed</label>
                                        <textarea onChange={(e) => handleChangeInput2(e, key)} name={itm.input2.name} value={itm.input2.value} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div className="mb-3">
                                        <label className="form-label">Lessons</label>
                                        <textarea onChange={(e) => handleChangeInput3(e, key)} name={itm.input3.name} value={itm.input3.value} className="form-control"></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))

            }
            <div className="add-more-wrapper">
                <button onClick={handleAddMore} type="button" class="btn btn-primary">Add More</button>
            </div>
        </>
    )
}

export default Challenges;