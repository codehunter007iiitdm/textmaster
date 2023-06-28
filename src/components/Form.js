import React,{useState} from 'react'

export default function Form(props) {
  const[text,setText]=useState('')

  const handleUpperClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("The text has been converted into lower case","Success")
  }
  const handleLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("The text has been converted into lower case","Success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleClear=()=>{
    setText("")
    props.showAlert("Text has been cleared","Success")
  }

  const handleCopy=()=>{
    let  text=document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","Success")
  }


  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.title}</h1>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <textarea className="form-control" id="textBox" rows="10" value={text} style={{backgroundColor:props.mode==='dark'?'#262323':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(' ').filter((t)=> {return t.length>0}).length}words and {text.length} characters</p>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter something to show the preview'}</p>
    </div>
    </>
  )
}
