import Mail from "../../assets/svg/Mail";
import PhoneIcon from "../../assets/svg/phoneIcon";
import "./index.scss";

const socialLinks = [
  {
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path
            d="M18 14.28C17.2643 14.28 16.545 14.4982 15.9333 14.9069C15.3215 15.3157 14.8447 15.8967 14.5632 16.5764C14.2816 17.2562 14.2079 18.0041 14.3515 18.7257C14.495 19.4473 14.8493 20.1102 15.3696 20.6304C15.8898 21.1507 16.5527 21.505 17.2743 21.6485C17.9959 21.7921 18.7438 21.7184 19.4236 21.4368C20.1033 21.1553 20.6843 20.6785 21.0931 20.0667C21.5018 19.455 21.72 18.7357 21.72 18C21.72 17.5115 21.6238 17.0277 21.4368 16.5764C21.2499 16.1251 20.9759 15.715 20.6304 15.3696C20.285 15.0241 19.8749 14.7501 19.4236 14.5632C18.9723 14.3762 18.4885 14.28 18 14.28ZM32.895 10.605C32.8871 9.44664 32.6738 8.29886 32.265 7.215C31.9639 6.42189 31.4981 5.70164 30.8982 5.10178C30.2984 4.50192 29.5781 4.03608 28.785 3.735C27.7011 3.3262 26.5534 3.11289 25.395 3.105C23.46 3 22.89 3 18 3C13.11 3 12.54 3 10.605 3.105C9.44664 3.11289 8.29886 3.3262 7.215 3.735C6.42189 4.03608 5.70164 4.50192 5.10178 5.10178C4.50192 5.70164 4.03608 6.42189 3.735 7.215C3.3262 8.29886 3.11289 9.44664 3.105 10.605C3 12.54 3 13.11 3 18C3 22.89 3 23.46 3.105 25.395C3.12115 26.5574 3.33416 27.7087 3.735 28.8C4.03474 29.5895 4.50019 30.3056 5.1 30.9C5.69729 31.5035 6.41908 31.9693 7.215 32.265C8.29886 32.6738 9.44664 32.8871 10.605 32.895C12.54 33 13.11 33 18 33C22.89 33 23.46 33 25.395 32.895C26.5534 32.8871 27.7011 32.6738 28.785 32.265C29.5809 31.9693 30.3027 31.5035 30.9 30.9C31.4998 30.3056 31.9653 29.5895 32.265 28.8C32.6734 27.7108 32.8867 26.5582 32.895 25.395C33 23.46 33 22.89 33 18C33 13.11 33 12.54 32.895 10.605ZM29.085 22.605C29.0369 23.5307 28.8393 24.4424 28.5 25.305C28.2088 26.0245 27.7759 26.6782 27.227 27.227C26.6782 27.7759 26.0245 28.2088 25.305 28.5C24.4343 28.8204 23.5174 28.9977 22.59 29.025C21.405 29.025 21.09 29.025 18 29.025C14.91 29.025 14.595 29.025 13.41 29.025C12.4826 28.9977 11.5657 28.8204 10.695 28.5C9.95115 28.2236 9.27942 27.7826 8.73 27.21C8.1865 26.6719 7.76677 26.0218 7.5 25.305C7.17834 24.4352 7.00591 23.5173 6.99 22.59C6.99 21.405 6.99 21.09 6.99 18C6.99 14.91 6.99 14.595 6.99 13.41C7.00591 12.4827 7.17834 11.5648 7.5 10.695C7.77642 9.95115 8.21741 9.27942 8.79 8.73C9.3305 8.18944 9.9799 7.77014 10.695 7.5C11.5657 7.17961 12.4826 7.00231 13.41 6.975C14.595 6.975 14.91 6.975 18 6.975C21.09 6.975 21.405 6.975 22.59 6.975C23.5174 7.00231 24.4343 7.17961 25.305 7.5C26.0488 7.77642 26.7206 8.21741 27.27 8.79C27.8135 9.32812 28.2332 9.9782 28.5 10.695C28.8204 11.5657 28.9977 12.4826 29.025 13.41C29.025 14.595 29.025 14.91 29.025 18C29.025 21.09 29.13 21.405 29.085 22.59V22.605ZM26.685 11.445C26.5064 10.9605 26.2248 10.5205 25.8597 10.1553C25.4945 9.79018 25.0545 9.50859 24.57 9.33C23.9047 9.09939 23.204 8.98769 22.5 9C21.33 9 21 9 18 9C15 9 14.67 9 13.5 9C12.7924 9.00692 12.0916 9.13895 11.43 9.39C10.9529 9.56048 10.5175 9.83057 10.1529 10.1823C9.78821 10.534 9.50259 10.9594 9.315 11.43C9.09717 12.0981 8.99074 12.7974 9 13.5C9 14.67 9 15 9 18C9 21 9 21.33 9 22.5C9.01487 23.2068 9.14665 23.9062 9.39 24.57C9.5686 25.0545 9.85018 25.4945 10.2153 25.8597C10.5805 26.2248 11.0205 26.5064 11.505 26.685C12.145 26.9204 12.8185 27.052 13.5 27.075C14.67 27.075 15 27.075 18 27.075C21 27.075 21.33 27.075 22.5 27.075C23.2076 27.0681 23.9084 26.9361 24.57 26.685C25.0545 26.5064 25.4945 26.2248 25.8597 25.8597C26.2248 25.4945 26.5064 25.0545 26.685 24.57C26.9361 23.9084 27.0681 23.2076 27.075 22.5C27.075 21.33 27.075 21 27.075 18C27.075 15 27.075 14.67 27.075 13.5C27.0754 12.7917 26.9432 12.0896 26.685 11.43V11.445ZM18 23.73C17.2482 23.73 16.5038 23.5817 15.8095 23.2935C15.1151 23.0054 14.4845 22.5831 13.9536 22.0508C13.4227 21.5185 13.002 20.8868 12.7157 20.1916C12.4294 19.4965 12.283 18.7518 12.285 18C12.285 16.8661 12.6214 15.7576 13.2517 14.815C13.882 13.8724 14.7778 13.138 15.8257 12.7048C16.8736 12.2715 18.0265 12.1589 19.1384 12.3812C20.2503 12.6035 21.2713 13.1508 22.072 13.9536C22.8728 14.7565 23.4173 15.7789 23.6367 16.8914C23.8561 18.0039 23.7405 19.1564 23.3045 20.2032C22.8685 21.2499 22.1318 22.1438 21.1875 22.7716C20.2432 23.3994 19.1339 23.733 18 23.73ZM24 13.395C23.6684 13.3599 23.3615 13.2033 23.1385 12.9555C22.9155 12.7076 22.7921 12.3859 22.7921 12.0525C22.7921 11.7191 22.9155 11.3974 23.1385 11.1495C23.3615 10.9017 23.6684 10.7451 24 10.71C24.3316 10.7451 24.6385 10.9017 24.8615 11.1495C25.0845 11.3974 25.2079 11.7191 25.2079 12.0525C25.2079 12.3859 25.0845 12.7076 24.8615 12.9555C24.6385 13.2033 24.3316 13.3599 24 13.395Z"
            fill="#FE0002"
          />
        </g>
      </svg>
    ),
    name: "Instagram",
    link: "https://instagram.com/doitdigitalhub?igshid=YmMyMTA2M2Y=",
  },
  {
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path
            d="M30.7048 2.99997H5.29484C5.00921 2.996 4.72559 3.04834 4.46019 3.15399C4.19479 3.25965 3.9528 3.41655 3.74804 3.61573C3.54328 3.81492 3.37977 4.05249 3.26683 4.31488C3.1539 4.57727 3.09376 4.85933 3.08984 5.14497V30.855C3.09376 31.1406 3.1539 31.4227 3.26683 31.685C3.37977 31.9474 3.54328 32.185 3.74804 32.3842C3.9528 32.5834 4.19479 32.7403 4.46019 32.8459C4.72559 32.9516 5.00921 33.0039 5.29484 33H30.7048C30.9905 33.0039 31.2741 32.9516 31.5395 32.8459C31.8049 32.7403 32.0469 32.5834 32.2516 32.3842C32.4564 32.185 32.6199 31.9474 32.7329 31.685C32.8458 31.4227 32.9059 31.1406 32.9098 30.855V5.14497C32.9059 4.85933 32.8458 4.57727 32.7329 4.31488C32.6199 4.05249 32.4564 3.81492 32.2516 3.61573C32.0469 3.41655 31.8049 3.25965 31.5395 3.15399C31.2741 3.04834 30.9905 2.996 30.7048 2.99997ZM12.1348 28.11H7.63484V14.61H12.1348V28.11ZM9.88484 12.72C9.26424 12.72 8.66905 12.4734 8.23021 12.0346C7.79138 11.5958 7.54484 11.0006 7.54484 10.38C7.54484 9.75936 7.79138 9.16417 8.23021 8.72534C8.66905 8.2865 9.26424 8.03997 9.88484 8.03997C10.2144 8.00259 10.5481 8.03525 10.8642 8.13579C11.1802 8.23633 11.4715 8.4025 11.7188 8.62341C11.9662 8.84432 12.1641 9.11498 12.2996 9.41769C12.4352 9.72039 12.5052 10.0483 12.5052 10.38C12.5052 10.7116 12.4352 11.0395 12.2996 11.3422C12.1641 11.6449 11.9662 11.9156 11.7188 12.1365C11.4715 12.3574 11.1802 12.5236 10.8642 12.6241C10.5481 12.7247 10.2144 12.7573 9.88484 12.72ZM28.3648 28.11H23.8648V20.865C23.8648 19.05 23.2198 17.865 21.5848 17.865C21.0788 17.8687 20.5861 18.0274 20.1731 18.3197C19.7601 18.6121 19.4466 19.024 19.2748 19.5C19.1575 19.8525 19.1066 20.2238 19.1248 20.595V28.095H14.6248C14.6248 28.095 14.6248 15.825 14.6248 14.595H19.1248V16.5C19.5336 15.7906 20.1282 15.2062 20.8445 14.8098C21.5608 14.4133 22.3717 14.2197 23.1898 14.25C26.1898 14.25 28.3648 16.185 28.3648 20.34V28.11Z"
            fill="#FE0002"
          />
        </g>
      </svg>
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/doitdigital-hub-6096181b0",
  },
  {
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path
            d="M33 8.70007C31.8725 9.18921 30.6801 9.51257 29.46 9.66007C30.7473 8.89105 31.7119 7.68124 32.175 6.25507C30.9653 6.97517 29.6411 7.48252 28.26 7.75507C27.3368 6.75393 26.1075 6.08751 24.7647 5.86035C23.422 5.63318 22.0418 5.85811 20.8407 6.49985C19.6396 7.1416 18.6854 8.16387 18.1279 9.40632C17.5703 10.6488 17.4409 12.0412 17.76 13.3651C15.3141 13.2414 12.9217 12.6045 10.738 11.4959C8.5543 10.3872 6.62827 8.83161 5.085 6.93007C4.54371 7.87532 4.25928 8.9458 4.26 10.0351C4.25808 11.0466 4.50633 12.043 4.98263 12.9354C5.45894 13.8278 6.14853 14.5886 6.99 15.1501C6.01197 15.1235 5.05483 14.861 4.2 14.3851V14.4601C4.20733 15.8774 4.70399 17.2487 5.60597 18.342C6.50795 19.4353 7.75988 20.1835 9.15 20.4601C8.61488 20.6229 8.05931 20.7088 7.5 20.7151C7.11284 20.7105 6.72663 20.6754 6.345 20.6101C6.74086 21.8293 7.50693 22.8948 8.53661 23.6583C9.56629 24.4218 10.8084 24.8454 12.09 24.8701C9.9258 26.573 7.25383 27.5024 4.5 27.5101C3.9986 27.5117 3.4976 27.4817 3 27.4201C5.81164 29.2355 9.08822 30.1992 12.435 30.1951C14.7445 30.2191 17.0357 29.7826 19.1747 28.9112C21.3136 28.0398 23.2575 26.7509 24.8928 25.1198C26.5281 23.4887 27.8219 21.5482 28.6988 19.4114C29.5757 17.2747 30.0181 14.9847 30 12.6751C30 12.4201 30 12.1501 30 11.8801C31.177 11.0023 32.1922 9.92621 33 8.70007Z"
            fill="#FE0002"
          />
        </g>
      </svg>
    ),
    name: "Twitter",
    link: "https://twitter.com/DoItDigitalHub",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        height="36px"
        viewBox="0 0 256 256"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <rect fill="red" opacity={0.4} x="0" y="0" width="256" height="256" />
          <path
            d="M61.0908952,85.6165814 C61.3045665,83.5054371 60.4994954,81.4188058 58.9230865,79.9979257 L42.8652446,60.6536969 L42.8652446,57.7641026 L92.7248438,57.7641026 L131.263664,142.284737 L165.145712,57.7641026 L212.676923,57.7641026 L212.676923,60.6536969 L198.947468,73.8174045 C197.763839,74.719636 197.176698,76.2025173 197.421974,77.670197 L197.421974,174.391342 C197.176698,175.859021 197.763839,177.341902 198.947468,178.244134 L212.355766,191.407842 L212.355766,194.297436 L144.91283,194.297436 L144.91283,191.407842 L158.802864,177.923068 C160.16778,176.558537 160.16778,176.157205 160.16778,174.070276 L160.16778,95.8906948 L121.54867,193.97637 L116.329871,193.97637 L71.3679139,95.8906948 L71.3679139,161.628966 C70.9930375,164.392788 71.9109513,167.175352 73.8568795,169.174019 L91.9219516,191.086776 L91.9219516,193.97637 L40.6974359,193.97637 L40.6974359,191.086776 L58.7625081,169.174019 C60.6942682,167.172038 61.5586577,164.371016 61.0908952,161.628966 L61.0908952,85.6165814 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    ),
    name: "Medium",
    link: "https://medium.com/@doitdigitalhub",
  },
];

const FooterFull = () => {
  return (
    <div>
      <div>
        <div className="footerfull">
          <div className="top">
            <div className="tab">
              <h1>Email</h1>
              <a href="mailto:doitdigitalhub@gmail.com">
                doitdigitalhub@gmail.com
              </a>
              <span>
                <Mail />
              </span>
            </div>
            <div className="tab">
              <h1>Phone</h1>
              <a href="tel:+">+2349030877649</a>
              <span>
                <PhoneIcon />
              </span>
            </div>
          </div>
          <div className="body">
            {socialLinks.map((link, idx) => (
              <SocialLink id={idx} key={idx} data={link} />
            ))}
          </div>
          <div className="bottom">
            <span>© DDHub. All rights reserved</span>
            <a href="">Terms and condition</a>
            <a href="">Privacy</a>
            <a href="#top" className="toTop">
              Back to Top
            </a>
          </div>
        </div>
        <div className="tab">
          <h1>Phone</h1>
          <a href="tel:+">+2349030877649</a>
          <span>
            <PhoneIcon />
          </span>
        </div>
      </div>
      <div className="body">
        {socialLinks.map((link, idx) => (
          <SocialLink id={idx} key={idx} data={link} />
        ))}
      </div>
      <div className="bottom">
        <span>© DDHub. All rights reserved</span>
        <a href="">Terms and condition</a>
        <a href="">Privacy</a>
        <a href="">Community</a>
        <a href="#top" className="toTop">
          Back to Top
        </a>
      </div>
    </div>
  );
};
export default FooterFull;

export const socialLink = socialLinks;
const SocialLink = ({ data, id }) => {
  return (
    <div className={`link ${id < 3 && "border"}`}>
      <span>{data.svg}</span>
      <h3>{data.name}</h3>
      <span>@ddhub</span>

      <div className="follow">follow us</div>
    </div>
  );
};
