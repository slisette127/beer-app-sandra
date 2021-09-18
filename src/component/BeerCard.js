import React from 'react'


export default function BeerCard(props) {
    return (
        <div>
            <li key={props.index}>
                <img src={props.image_url} alt="beer" style={{height: "200px"}}></img>
                <h3>{props.name}</h3>
                <p>{props.tagline}</p>
            </li>
        </div>
    )
}
