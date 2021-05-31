import React from 'react'
import "../InputOptions/InputOptions.css"

function InputOptions({ Icon, title, color }) {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }}/>
            <h5>{title}</h5>
        </div>
    )
}

export default InputOptions
