import React from 'react';

const Card = (props) => {

  let details = []

  for (let i = 2; i < Object.entries(props.content).length; i++) {
    details.push(<p key= {i}>{`${Object.keys(props.content)[i]}: ${Object.values(props.content)[i]}`}</p>)
  } 

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
        </picture>
        <h3>{`${Object.keys(props.content)[1]}:`} <span className="card-petname">{Object.values(props.content)[1]}</span></h3>
        {details}
      </div>
    </div>
  );
}

export default Card; 