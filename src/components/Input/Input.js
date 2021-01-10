import React from 'react'
import './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const InputType = props.type || 'text'
    const htmlFor = `${InputType}-${Math.random()}`
    var cls = ' '

    if (isInvalid(props)) {
        cls += 'invalid'
    }

    return (
        <div className={"Input" + cls}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={InputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props)
                    ? <span>{props.errorMessage || ''}</span>
                    : null
            }
        </div>
    )
}

export default Input