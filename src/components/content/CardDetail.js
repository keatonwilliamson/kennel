import React, { useState, useEffect } from 'react';
import DataManager from '../../modules/DataManager';
import {firstLetterCase} from '../../modules/helpers'
// import './AnimalDetail.css'

const CardDetail = (props) => {

    const [details, setDetails] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(true)
    let detailsArray = []

    for (let i = 1; i < Object.entries(details).length; i++) {
        if (Object.keys(details)[i] !== "id")
        detailsArray.push(<p key={i}>{`${Object.keys(details)[i]}: ${Object.values(details)[i]}`}</p>)
    }

    const handleDelete = () => {
        setLoadingStatus(true)
        DataManager.delete(`${props.database}`, `${props.cardId}`)
            .then(() => {
                props.history.push(`/${props.database}`)
            })
    }

    useEffect(() => {
        //get from DataManager and hang on to that data; put it in state
        DataManager.get(`${props.database}`, `${props.cardId}`)
            .then((result) => {
                setDetails(result)
                setLoadingStatus(false)
            })
    }, []);

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                {/* <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3> */}
                <h3>{firstLetterCase(`${Object.keys(details)[0]}:`)} <span className="card-petname">{`${Object.values(details)[0]}`}</span></h3>
                {detailsArray}
                <button type="button" disabled={loadingStatus} onClick={handleDelete}>Discharge</button>
            </div>
        </div>
    );
}

export default CardDetail;