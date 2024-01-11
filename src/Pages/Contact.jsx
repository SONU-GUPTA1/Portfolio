import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";

const Contact = () => {
  const [input, setInput] = useState({
    name: " ",
    email: " ",
    subject: " ",
    textarea: " ",
  });
  // let {name,email,subject,textarea} = input

  const [data, setData] = useState([]);

  const task = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    setData([...data, input]);
    setInput({ name: " ", email: " ", subject: " ", textarea: "" });
  };
  console.log(data);

  return (
    <div className="contact_container">
      <div className="c-section">
        <h1>Contacts</h1>
      </div>
      <div className="c-section">
        <div className="any_que">
          <div className="anyq_l">
            <h2>Any questions ?</h2>
          </div>
          <div className="anyq">
            <p>I AM AVAILABLE</p>
          </div>
        </div>
        <div className="details">
          <div className="details_list">
            <div className="icon">
              <span>
                <CallIcon sx={{ fontSize: 40 }} />
              </span>
            </div>
            <div className="nameid">
              <p>Call Me</p>
            </div>
            <div className="url">
              {" "}
              <span>+91 6351577624</span>
            </div>
          </div>
          <div className="details_list">
            <div className="icon">
              <span>
                <EmailIcon sx={{ fontSize: 40 }} />
              </span>
            </div>
            <div className="nameid">
              <p>Email</p>
            </div>
            <div className="url">
              <span>sonukumarguptasonu546@gmail.com</span>
            </div>
          </div>
          <div className="details_list">
            <div className="icon">
              {" "}
              <span>
                <GitHubIcon sx={{ fontSize: 40 }} />
              </span>
            </div>
            <div className="nameid">
              <p>Github</p>
            </div>
            <div>
              {" "}
              <a className="url" href="https://github.com/SONU-GUPTA1">
                {" "}
                <span>https://github.com/SONU-GUPTA1</span>
              </a>
            </div>
          </div>
          <div className="details_list">
            <div className="icon">
              <span>
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </span>
            </div>
            <div className="nameid">
              <p>Linkedin</p>
            </div>
            <div>
              {" "}
              <a
                className="url"
                href="https://www.linkedin.com/in/sonu-gupta1/"
              >
                <span>https://www.linkedin.com/in/sonu-gupta1/</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="c-section">
        <div className="any_que">
          <div className="anyq_l">
            <h2>SEND AN EMAIL</h2>
          </div>
          <div className="anyq">
            <p>I'LL BE HAPPY TO ANSWER</p>
          </div>
        </div>
        <div className="form">
          <div className="name">
            <input
              placeholder="Enter Name"
              className="fName"
              value={input.name}
              onChange={task}
              name="name"
              type="text"
            />
            <input
              className="fName"
              value={input.email}
              onChange={task}
              name="email"
              type="text"
              placeholder="Enter Email"
            />
          </div>
          <input
            className="name_subject"
            value={input.subject}
            onChange={task}
            name="subject"
            type="text"
            placeholder="Subject"
          ></input>
          <textarea
            className="name_textarea"
            value={input.textarea}
            onChange={task}
            name="textarea"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="btn" onClick={submit}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
