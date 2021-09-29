import React, { useState } from 'react'

export const TextForm = (props) => {
    const onUpChanged = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const onloChanged = () => {
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const onTextChanged = (event) => {
        setText(event.target.value);
    }
    const [Text, setText] = useState('');

    return (
        <div>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={onTextChanged} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={onUpChanged}>Convert to upper case</button>
            <button className="btn btn-primary mx-1" onClick={onloChanged}>Convert to lower case</button>
            <div className="container my-3">
                <h1> Your Text Summary </h1>
                <p> 
                    {Text.split(" ").length} words and {Text.length} characters
                </p>
                <p> 
                    { Math.ceil(0.008 * Text.split(" ").length)}  minutes read
                </p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </div>
    )
}
