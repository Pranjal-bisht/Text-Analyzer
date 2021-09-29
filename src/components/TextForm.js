import React, { useState } from 'react'

export const TextForm = (props) => {
    const onUpChanged = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const onTextChanged = (event) => {
        setText(event.target.value);
    }
    const [Text, setText] = useState('Enter Text here');

    return (
        <div>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={onTextChanged} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={onUpChanged}>Convert to upper case</button>
        </div>
    )
}
