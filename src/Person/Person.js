import React from 'react';

const person = (props) => { //props bármi más lehet de íratlan szabály, ez kell ha a komponens kezel változót
    return (
        <div>
            <p>Üdvözlet Person komponensből! Random: {Math.floor(Math.random() * 6 + 1)}, nevem: {props.name}, age {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;