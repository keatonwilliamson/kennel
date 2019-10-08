import React, { useState, useEffect } from 'react';
import Card from './Card'
import DataManager from '../../modules/DataManager'

const CardList = (props) => {
    //define what this component needs to render
    const [cards, setCards] = useState({ animals: [], locations: [], owners: [], employees: [] });

    const deleteCard = (array, id) => {
        DataManager.delete(array, id)
            .then(() => {
                DataManager.getAll(`${props.database}`)
                    .then((results) => {
                        setCards(e => ({ ...e, [props.database]: results }))
                    })
            })
    }

    useEffect(() => {
        //getAll from DataManager and hang on to that data; put it in state
        DataManager.getAll(`${props.database}`)
            .then((results) => {
                setCards(e => ({ ...e, [props.database]: results }))
            })
    }, []);

    return (
        //add this button above your display of animal cards
        <>
            <section className="section-content">
                <button type="button" className="btn" onClick={() => { props.history.push(`/${props.database}/new`) }}>Add {props.database}</button>
            </section>
            <div className="container-cards">
                {cards[props.database].map(result => <Card key={result.id} content={result} deleteCard={deleteCard} database={props.database} {...props} />
                )}
            </div>
        </>
    )
}

export default CardList