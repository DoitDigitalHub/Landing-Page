import "./index.scss";

import React, { useRef, useState } from "react";
import FooterFull from "../../components/footer-full";
import ContactUsSvg from "../../assets/svg/contactUsSvg";

function Contact(props) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactRef = useRef();

  return (
    <div class="contact_page">
      <div className="content">
        <div className="img">
          <ContactUsSvg />
        </div>
        <div className="form">
          <h1>Send us a message</h1>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              contactRef.current.click();
              setContactData({ name: "", email: "", message: "" });
            }}
          >
            <label htmlFor="">
              <span>Name</span>
              <input
                type="text"
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
                value={contactData?.name}
                required
              />
            </label>
            <label htmlFor="">
              <span>Email</span>
              <input
                type="email"
                onChange={(e) =>
                  setContactData({ ...contactData, email: e.target.value })
                }
                value={contactData?.email}
                required
              />
            </label>
            <label htmlFor="">
              <span>Message</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onInput={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
                value={contactData?.message}
                required
              ></textarea>
            </label>
            <a
              href={`mailto:doitdigitalhub@gmail.com? &subject= Message from ${contactData?.name}, mail back address: ${contactData?.email} &body=${contactData?.message}`}
              ref={contactRef}
              style={{ display: "none" }}
            >
              mailer reference
            </a>
            <label htmlFor="">
              <button>Send message</button>
            </label>
          </form>
        </div>
      </div>
      <FooterFull />
    </div>
  );
}

export default Contact;
