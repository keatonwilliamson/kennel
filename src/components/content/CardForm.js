import React, { useState, useEffect } from 'react';
import DataManager from '../../modules/DataManager';
import { firstLetterCase } from '../../modules/helpers'
// import './AnimalForm.css'

const CardForm = (props) => {
    const [inputs, setInputs] = useState({});
    const [entry, setEntry] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false)
    let inputsArray = []

    const handleFieldChange = (evt) => {
        entry[evt.target.id] = evt.target.value
        setEntry(entry)
        console.log("entry", entry)
    }

    for (let i = 0; i < Object.entries(inputs).length; i++) {
        if (Object.keys(inputs)[i] != "id") {
        entry[Object.keys(inputs)[i]] = ""
        // setEntry([Object.keys(inputs)[i]] = "")
        inputsArray.push(
            <div key={i}>
                <label htmlFor={`${Object.keys(inputs)[i]}`}>{firstLetterCase(`${Object.keys(inputs)[i]}: `)}</label>
                <input type="text" required onChange={handleFieldChange} id={`${Object.keys(inputs)[i]}`} placeholder={firstLetterCase(`${Object.keys(inputs)[i]}`)} />
            </div>
        )
        }
    }

    useEffect(() => {
        //get from DataManager and hang on to that data; put it in state
        DataManager.getAll(`${props.database}`)
            .then((result) => {
                let entries = [...result]
                setInputs(entries[0])
                setLoadingStatus(false)
            })
    }, []);

    //   Local method for validation, set loadingStatus, create entry object, invoke the DataManager post method, and redirect to the full card list

    const constructNewAnimal = (evt) => {
        let emptyFieldCheck = false
        evt.preventDefault();
        Object.values(entry).forEach(value => {
            if(value === "") {emptyFieldCheck = true}
        });
        if (emptyFieldCheck) {
            window.alert("Some fields are empty");
        } else {
            setLoadingStatus(true)
            DataManager.post(`${props.database}`, entry)
                .then(() => props.history.push(`/${props.database}`));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        {inputsArray}
                    </div>
                    <div className="alignRight">
                        <button type="button" disabled={loadingStatus} onClick={constructNewAnimal}>Submit {`${props.database}`}</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default CardForm