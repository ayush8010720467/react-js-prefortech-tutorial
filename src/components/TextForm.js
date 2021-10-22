import React, {useState} from 'react';

export default function TextForm(props) {
    
    const [text, setText] = useState('');
    
    const hanldleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={hanldleUpClick}>Convert to Uppercase</button> 
        </div>
    )
}
