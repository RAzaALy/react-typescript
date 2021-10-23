import React from 'react'
import { PersonProps } from './Person.Types'
const Person = ({name}: PersonProps) => {
    return (
        <div>
            <h1>React Typescript Developer {name.first} {name.last}</h1>
        </div>
    )
}

export default Person
