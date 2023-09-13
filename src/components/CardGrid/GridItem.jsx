import React from "react"

export default function Card(props) {

    return (
        <div className="card">
            <h2>{props.name}</h2>
                <h3>{props.Skill}</h3>
                <h4>{props.Age}</h4>
             

        </div>
    )
}