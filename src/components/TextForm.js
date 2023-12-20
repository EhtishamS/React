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

    const handleClearClick = () =>{
        setText('');
    }

    const handleOnChange = (event)=> {
        console.log('On change');
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        id="myBox" 
                        rows="8" 
                        value={text} 
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey', 
                            color: props.mode === 'light' ? 'black' : 'white'}}/>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters</p>
                <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text:"Enter something in the textbox above to preview here"}</p>
            </div>
        </>
  );
}
