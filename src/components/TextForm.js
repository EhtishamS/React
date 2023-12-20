import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log('Uppercase was clicked');
        setText(text.toUpperCase());
    }

    const handleLowClick = ()=> {
        console.log('Lowercase was clicked');
        setText(text.toLocaleLowerCase());
    }

    const handleOnChange = (event)=> {
        console.log('On change');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3"> 
                <h2>Your text summary</h2>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters</p>
                <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
  );
}
