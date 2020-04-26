import React from 'react'
import "./card-list.css"
import Card from '../card/card'

export const CardList = ({ monsters }) => {
    console.log(monsters)
    return (
        <div className="card-list">

            {monsters.map(monster =>
                <Card email= {monster.email} key={monster.id} id={monster.id} name={monster.name}> {monster.name} </Card>
            )}
        </div>
    )
}