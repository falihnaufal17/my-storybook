import React from 'react'
import './TextArea.css'

const TextArea = ({ label = '', ...props }) => {
    return (
        <div className="form-group">
            <label className="label">{label}</label>
            <textarea {...props}></textarea>
        </div>
    )
}

export default TextArea