import { useState } from "react";
import "./Form.css";
import emailjs from "emailjs-com";
import { Button } from "./Button";
import PopUp from "./Popup/PopUp";

export function Form() {
  const[pop, setPop]= useState('');

  const [data, setData] = useState({
    username: "",
    email: "",
    company: "",
    position: "",
    budget: "",
    message: "",
  });

  //send form to database
  function submitFormPartner(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nawfksp",
        "template_dp34pa9",
        e.target,
        "ZKX9Xt1UaNb3P15Ad"
      )
      .then((res) => {
        if (res.status === 200) {
          const style = 'grid';
          setPop(style);
          console.log(pop);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setData({
      username: "",
      email: "",
      company: "",
      position: "",
      budget: "",
      message: "",
    });
  }

  function handleInputChange(event) {
    const { name, type, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  return (
    <div className="form-partner-wrapper">
      <div className="form-partners">
        <h3 className="h3-form">Send a message</h3>
        <p className="p-form">Our team will respond within 1 business day.</p>

        <div>
          <form onSubmit={submitFormPartner} className="grid-container">
            <div className="input-1">
              <input
                className="input-partners"
                onChange={handleInputChange}
                value={data.username}
                name="username"
                placeholder="Full Name"
              />
            </div>

            <div className="input-2">
              <input
                className="input-partners"
                onChange={handleInputChange}
                value={data.email}
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="input-3">
              <input
                className="input-partners"
                onChange={handleInputChange}
                value={data.company}
                name="company"
                placeholder="Company Name"
              />
            </div>

            <div className="input-4">
              <input
                className="input-partners"
                onChange={handleInputChange}
                value={data.position}
                name="position"
                placeholder="Position"
              />
            </div>
            <div className="input-5">
              <input
                className="input-partners"
                onChange={handleInputChange}
                value={data.budget}
                name="budget"
                placeholder="Budget"
              />
            </div>

            <div className="input-6">
              <textarea
                className="input-message input-partners"
                onChange={handleInputChange}
                value={data.message}
                name="message"
                placeholder="Why would you like to partner with Immerse?"
              />
            </div>
            <div className="send">
              <button className="button-partners" type="submit">
                Send a message
              </button>
            </div>
          </form>
        </div>
      </div>
      <PopUp display={pop}/>
    </div>
  );
}
