import React, { useState } from "react";

export default function TextForm(props) {
 
  const handleonchange=(event)=>
  {
    // console.log("On change clicked");

    settext(event.target.value);

  }

  const handlelowcase=()=>
  {
    let newtext=text.toLocaleLowerCase();
    settext(newtext);

  }

  const handleuppercase = () => {
    // console.log(text);
    let upptext= text.toUpperCase();
    settext(upptext);
  };

  const handleclear =()=>
  {
    let temp= "";
    settext(temp);
  }

  const [text, settext] = useState("");

  return (
    <>
      <div>
       
        <h1>{props.heading}</h1>
       
        <div className="mb-3">
          <label for="myBox" className="form-label"></label>
         
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="myBox"
            rows="8"
          ></textarea>

        <button className="btn btn-primary  mx-2" onClick={handleuppercase}> {" "}Uppercase button</button>

        <button className="btn btn-primary  mx-2" onClick={handlelowcase}>{" "}Lowercase button</button>

        <button className="btn btn-primary  mx-2" onClick={handleclear}>{" "}Clear text</button>


        </div>
      </div>

      <div className = "container my-3">
        <h4>Your text summary</h4>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read time</p>
      </div>

    
    
    </>
  );
}
