import React from 'react'
import './Input.css'

const Input = ({ inline = false, label = "", ...props}) => {
    return (
        <div className="form-group">
            <label className="label mb-label">{label}</label>
            <input {...props} />
        </div>
    )
}

export default Input