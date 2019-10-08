import React, { useState, useEffect } from 'react';
import DataManager from "../../modules/DataManager"

import EditFields from './EditFields';
// import "./AnimalForm.css"

//derived from  https://itnext.io/how-to-build-a-dynamic-controlled-form-with-react-hooks-2019-b39840f75c4f

const CardEditForm = (props) => {
    // //set the initial state
    const [entryState, setEntryState] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false)

    const handleFieldChange = evt => {
        let updatedEntry = [...entryState]
        updatedEntry[evt.target.id][1] = `${evt.target.value}`
        console.log(updatedEntry)
        setEntryState(updatedEntry)
    }

    useEffect(() => {
        //get from DataManager and hang on to that data; put it in state
        DataManager.get(`${props.database}`, `${props.cardId}`)
            .then((result) => {
                let returnedEntry = [...Object.entries(result)]
                returnedEntry.pop();
                setEntryState(returnedEntry)
            })
    }, []);

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        let editedEntry = [...entryState]
        editedEntry.push(["id", `${props.cardId}`])
        setLoadingStatus(true)
        console.log(Object.fromEntries(editedEntry))
        DataManager.update(`${props.database}`, Object.fromEntries(editedEntry))
            .then(() => props.history.push(`/${props.database}`))
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        {entryState.map((value, i) => (
                            <EditFields key={`entry-${i}`} i={i} entryState={entryState} handleFieldChange={handleFieldChange} />
                        ))}
                    </div>

                    <div className="alignRight">
                        <button
                            type="button" disabled={loadingStatus}
                            onClick={updateExistingAnimal}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default CardEditForm