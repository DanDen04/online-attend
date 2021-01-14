import React from 'react'
import './Group.css'

export default props => (
    <ul>
         <li>
            <i className="fa fa-circle" aria-hidden="true"></i>
            {props.name}
            <i className="numMiss">{props.num}</i>
        </li>
    </ul>
)