import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter the text here');
    const handleClickOnUpperCase = () => {
        setText(text.toUpperCase());
    }
    const handleClickOnLowerCase = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
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

    return (
      <>
        <div className="container" align="center">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClickOnUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary" onClick={handleClickOnLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3">
        <h2>Your text summary</h2>
            <p>{text.trim() ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
            <p>{text.trim() ? (0.008 * text.trim().split(/\s+/).length).toFixed(2) : 0} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        
      </>
    );
}