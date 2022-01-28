import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");

  const uppercase = () => {
    const val = text.toUpperCase();
    setText(val);
  };
  const changingText = (event) => {
    setText(event.target.value);
  };
  const lowercase = () => {
    const val = text.toLowerCase();
    setText(val);
  };
  const cleartext = () => {
    setText("");
  };
  let modeStyle = {
    backgroundColor: props.mode === "light" ? "white" : "black",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <div className="container " style={modeStyle}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>
            <strong>Enter Text Here</strong>
          </h2>
        </label>
        <textarea
          className="form-control"
          style={{backgroundColor: props.mode === "light" ? "white" : "#0f0259",color: props.mode === "dark" ? "white" : "black",}}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={changingText}
        ></textarea>
        <div className="container my-3 ">
          <button className="btn btn-primary mx-2" onClick={uppercase}>
            UPPERCASE
          </button>
          <button className="btn btn-primary mx-2" onClick={lowercase}>
            lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={cleartext}>
            Clear Text
          </button>
          <p className="my-3">
            <strong>
              Preview: <br />
            </strong>
            {text}
          </p>
          <p>
            <strong>No of characters : </strong>
            {text.length}
          </p>
          <p>
            <strong>No of words : </strong>
            {text.split(" ").length}
          </p>
        </div>
      </div>
    </div>
  );
}
