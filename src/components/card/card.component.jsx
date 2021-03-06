import React from "react";
import './card.styles.css'

export function Card(props) {
    return (
        <div className="card-container">
            <img alt="monster_img" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    )
}