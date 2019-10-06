import React from 'react';
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers'

const Card = (props) => {

  let details = []

  for (let i = 1; i < Object.entries(props.content).length; i++) {
    if (Object.keys(props.content)[i] != "id") {
      details.push(<p key={i}>{`${Object.keys(props.content)[i]}: ${Object.values(props.content)[i]}`}</p>)
    }
  }

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
        </picture>
        <h3>{firstLetterCase(`${Object.keys(props.content)[0]}:`)} <span className="card-petname">{Object.values(props.content)[0]}</span></h3>
        {details}
        <button type="button" onClick={() => props.deleteCard(props.database, props.content.id)}>Discharge</button>
        <Link to={`/${props.database}/${props.content.id}`}><button>Details</button></Link>
      </div>
    </div>
  );
}

export default Card; 