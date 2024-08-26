import { useState } from "react";
import OpenNav from "../../assets/svg/openNav";
import "./index.scss";
import logo from "../../assets/png/red and black logo 1.png";
import CloseNav from "../../assets/svg/closeNav";
import { Link, useLocation } from "react-router-dom";
import NavDesign from "../../assets/svg/navDesign";
import { HashLink } from "react-router-hash-link";
const HeaderWrap = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div id="top" className="headerWrap">
      <div className="mobileNav">
        <div className="navContain">
          <div className="top">
            <div
              className="logo"
              onClick={() => {
                console.log("clicked");
                window.location.href = "/";
              }}
            >
              <img src={logo} alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className="navControl">
              {open ? <CloseNav /> : <OpenNav />}
            </div>
          </div>
          <div className="bottom">
            {open && (
              <ul>
                <Link to="/" className={location.pathname === "/" && "active"}>
                  HOME
                </Link>
                <HashLink
                  to="#services"
                  className={
                    location.pathname?.includes("services") && "active"
                  }
                >
                  SERVICES
                </HashLink>
                <Link
                  href="/team"
                  className={location.pathname === "/team" && "active"}
                >
                  TEAM
                </Link>
                <Link
                  href="/contact"
                  className={location.pathname === "/contact" && "active"}
                >
                  CONTACT US
                </Link>
              </ul>
            )}
          </div>
        </div>

        {open && <div onClick={() => setOpen(!open)} className="cover"></div>}
      </div>
      <div className="desktopNav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navLinks">
          <Link to="/">
            <span>HOME</span>
            {location.pathname === "/" && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </Link>
          <HashLink to="/#services">
            <span>SERVICES</span>
            {location.pathname?.includes("services") && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </HashLink>
          <Link to="/team">
            <span>TEAM</span>
            {location.pathname === "/team" && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </Link>
          <Link to="/contact">
            <span>CONTACT US</span>
            {location.pathname === "/contact" && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </Link>
          <Link className="hire" to="/hire">
            Hire us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderWrap;
