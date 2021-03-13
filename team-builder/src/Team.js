import React from 'react'
import Card from './style/Card'

export default function Team(props){

    const { team } = props

    return(
        <Card>
            <h2>{team.name}</h2>
            <p>Email: {team.email}</p>
            <p>Role: {team.role}</p>
        </Card>
    )
}
