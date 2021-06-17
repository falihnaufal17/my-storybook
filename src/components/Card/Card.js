import React from 'react'
import './Card.css'

const Card = ({ children, className, title = ''}) => {
    return (
        <div className={"card " + className}>
            {
                title.length > 0 ? <div className="card-title">{title}</div> : <></>
            }
            {children}
        </div>
    )
}

export default Card