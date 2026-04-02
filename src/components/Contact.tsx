import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ujjwalvermauv2004@gmail.com" data-cursor="disable">
                ujjwalvermauv2004@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech CSE (Data Science), BPIT, GGSIPU (2023–27)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ujjwalvermaaa"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwalvermaaa"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/ujjwalverma05"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              X <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ujjwalvermaaa/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
