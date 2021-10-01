import React, { useState } from 'react'

export const TextForm = (props) => {
    const onUpChanged = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Upper case.","success");
    }
    const onloChanged = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lower case.","success");
    }
    const onTextChanged = (event) => {
        setText(event.target.value);
    }
    const oncpChanged = () => {
        let Text = document.getElementById("myBox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Text Copied.","success");
    }
    const onclrChanged = () => {
        let cleartext = '';
        setText(cleartext);
        props.showAlert("Cleared text.","success");
    }
    
    const onrmChanged = () => {
        let newtext = Text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed spaces.","success");
    }
    const [Text, setText] = useState('');

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={onTextChanged} style={{background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={onUpChanged}>Convert to upper case</button>
            <button className="btn btn-primary mx-1" onClick={onloChanged}>Convert to lower case</button>
            <button className="btn btn-primary mx-1" onClick={oncpChanged}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={onclrChanged}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={onrmChanged}>Remove extra spaces</button>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 > Your Text Summary </h1>
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
