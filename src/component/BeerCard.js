import React from 'react'


export default function BeerCard(props) {
    return (
        <div>
            <li key={props.index}>
                <img src={props.image_url} alt="beer" style={{height: "200px"}}></img>
                <h1>{props.name}</h1>
                <h2>{props.tagline}</h2>
                <p>{props.description}</p>
            </li>
        </div>
        
    )
}
