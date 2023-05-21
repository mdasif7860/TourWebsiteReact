import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="formComponent">
      <h1>Send a message to us!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject"/>
        <textarea rows="5" placeholder="Message"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
