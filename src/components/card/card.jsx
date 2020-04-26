import React from "react"
import "./card.css"

const Card = ({id, name, email}) => {
    return (
        <div className = "card-container">
        <img src= {`https://robohash.org/${id}?set=set2`} alt="monster"/>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
    )
}
export default Card