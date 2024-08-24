import React, { useRef, useState } from "react";
import "./index.scss";
import FooterFull from "../../components/footer-full";

const Hire = () => {
  // state to track data entered by visitor to forward to email
  const [hireData, setHireData] = useState({
    rangeOne: "",
    rangeTwo: "",
    email: "",
    service: "",
  });

  // ref to trigger email sending
  const mailRef = useRef();

  return (
    <div class="hire_page">
      <div className="message">
        <h1>Thank you for choosing us</h1>
        <p>
          We are here to break boundaries and make the impossible possible for
          you! Get in touch with us or kindly request a free consultation or an
          instant quote through our contact form.
        </p>
      </div>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          mailRef.current.click();
        }}
      >
        <div className="entries">
          <div className="entry">
            <p>
              What is your <span>budget</span>
            </p>
            <div className="input">
              <input
                type="number"
                placeholder="$1000"
                min={0}
                onChange={(e) =>
                  setHireData({ ...hireData, rangeOne: e.target.value })
                }
                required
              />
              <span>-</span>
              <input
                type="number"
                placeholder="$2000"
                min={0}
                onChange={(e) =>
                  setHireData({ ...hireData, rangeTwo: e.target.value })
                }
                required
              />
            </div>
            <span>Input your budget range</span>
          </div>
          <div className="entry">
            <p>
              Your <span>E -mail address</span>
            </p>
            <div className="input">
              <input
                type="email"
                placeholder="exmaple@example.com"
                onChange={(e) =>
                  setHireData({ ...hireData, email: e.target.value })
                }
                required
              />
            </div>
            <span>Input your email address so we can contact you</span>
          </div>
          <div className="entry">
            <p>
              What <span>service</span> do you require?
            </p>
            <div className="input">
              <input
                type="text"
                placeholder="UI Design"
                onChange={(e) =>
                  setHireData({ ...hireData, service: e.target.value })
                }
                required
              />
            </div>
            <span>
              UI Design, Web development, consultation, others, etc...
            </span>
          </div>
        </div>
        <a
          href={`mailto:doitdigitalhub@gmail.com? &subject= Offer for ${hireData?.service} from ${hireData?.email} &body= My budget is ${hireData?.rangeOne} - ${hireData?.rangeTwo}`}
          style={{ display: "none" }}
          ref={mailRef}
        >
          mailer
        </a>
        <button className="button">Send</button>
      </form>
      <FooterFull hide />
    </div>
  );
};

export default Hire;
