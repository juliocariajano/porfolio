import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser'
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //  const form = useRef();
  // const [done, setDone] = useState(false)
  
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

  function handleClick(e){
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
    }else{
      alert('Todos los campos deven ser completados')
    }

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
    }else{
      alert('Todos los campos deven ser completados')
    }
  }

  // const sendEmail = (event) => {
  //   event.preventDefault();

  //   emailjs.sendForm("service_ryvy4x4","template_5uc8dbi",event.target,"zmT5soNvxHXKErJ0p")
  //     .then (response => console.log(response))
  //     // setDone(true);
  //     //     form.reset();
        
  //       .catch(error => console.log(error));
           
  // };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}></span>
          <span>Contacto</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={sendEmail} >
          <input type="text" onChange={handleInput} name="user_name" className="user"  placeholder="Name"/>
          <input type="email" onChange={handleInput} name="user_email" className="user" placeholder="Email"/>
          <textarea name="user_message" onChange={handleInput} className="user" placeholder="Message"/>
          {/* <button onClick={handleClick} className="button">Send</button> */}
          <button onClick={handleClick}>Envio</button>
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
