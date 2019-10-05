import React, { useState, useEffect } from 'react';
import Card from './Card'
import DataManager from '../../modules/DataManager'

const CardList = (props) => {
    //define what this component needs to render
    const [cards, setCards] = useState({ animals: [], locations: [], owners: [], employees: [] });

    useEffect(() => {
        //getAll from DataManager and hang on to that data; put it in state
        DataManager.getAll(`${props.database}`)
            .then((results) => {
                setCards(e => ({ ...e, [props.database]: results }))
            })
    }, []);

    return (
        <div className="container-cards">
            {cards[props.database].map(result => <Card key={result.id} content={result} />
            )}
        </div>
    )
}

export default CardList