import React from 'react';
import './Skills.scss';

const skill = (props) => {

    return (
        <div className={props.className} onClick={props.clicked}>
            <p>{props.name}</p>
        </div>
    )
}
export default skill;