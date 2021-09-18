import React from 'react'
import BeerCard from './BeerCard'


export default function ListBeers(props) {
    return (
        <ul>
            {console.log(props.arrayOfBeers)}
            {props.arrayOfBeers.map((beer, index) => {
                return(
                 <BeerCard {...beer}/>   
                )
            })}
        </ul>
    )
}
