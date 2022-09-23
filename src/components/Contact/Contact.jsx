import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser'
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //  const form = useRef();
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)
  
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function sendEmail(e) {
    e.preventDefault();
    if(input.user_name && input.user_email && input.user_message){
    emailjs
      .sendForm(
        "service_ryvy4x4",
        "template_5uc8dbi",
        e.target,
        "zmT5soNvxHXKErJ0p"
      )
      .then((response) => console.log(response))
      .then((error) => console.log(error));
      
      setInput({
        user_name: "",
        user_email: "",
        user_message: ""
        
      })
      setDone(true)
      setTimeout(function(){ setDone(false) }, 4000);

    }else{
      setError(true)
      setTimeout(function(){ setError(false) }, 3000);

    }
  }

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}} />
          <span>Contacto</span>
          <div className="blur s-blur1"
          style={{ background: "#ABF1FF94" }} />
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={sendEmail} >
          <input type="text" onChange={handleInput} name="user_name" value={input.user_name} className="user"  placeholder="Name"/>
          <input type="email" onChange={handleInput} name="user_email" value={input.user_email} className="user" placeholder="Email"/>
          <textarea name="user_message" onChange={handleInput} value={input.user_message} className="user" placeholder="Message"/>
          <button className="button">Send</button>
        
          <span>{done && "Gracias por contactarme"}</span>
          <span>{error && "Favor completa todos campos"}</span>

          {/* <div className="blur c-blur1"
          style={{ background: "var(--purple)" }} /> */}
        </form>
      </div>
    </div>

    );
};

export default Contact;
