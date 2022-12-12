import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        console.log("Lowercase was click" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);

}
const [text, setText] = useState('Enter text here')

  return (
    <>
        <div className='container'>
        <div className='mb-3'>
            <h1 className='mt-5 mb-2'>{props.heading}</h1>
            <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-success mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
        <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{text.split("").length} words and {text.length} character</p>
            <p>{0.008 * text.split("").length} Minutes reads</p>
            <h2>Preview</h2>
            <p></p>
        </div>
    </>
  )
}

