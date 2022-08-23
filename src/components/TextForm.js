import React, { useState } from 'react'

export default function TextForm(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase","success");
    }


    const handleLoClick = () => {
        let lowtext = text.toLowerCase();
        setText(lowtext);
        props.showAlert("Converted To Lowercase","success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared","success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);

    }


    const handleBlankClick = () => {
        let correctText = text.split(/[ ]+/).join(' ').trim();
        setText(correctText);
        props.showAlert("Extra Blank Spaces removed","success");
    }


    const [text, setText] = useState("");


    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='light'?'white':'black' ,color : props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mb-3" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary  mb-3 mx-1" onClick={handleLoClick}>
                    Convert To Lowercase
                </button>
                <button className="btn btn-primary mb-3 " onClick={handleBlankClick}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-primary mb-3 mx-1" onClick={handleClearClick}>
                    Clear Text
                </button>

            </div>
            <div className="container my-3">
                <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} Words {text.length} characters</p>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length * 0.008} Minutes read </p>
                <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter something to preview it here "}</p>
            </div>

        </>
    )
} 
