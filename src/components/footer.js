import "./Footer.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <ul className="footer">
        <li className="section1">
          <img src={logo} alt="" />
          <p>
            We introduce our selves as LAND Interior and Architectural Design
            Consultancy - one of the best interior designers in Chennai. Chennai
            Luxury Interior and Architectural Design Consultancy has challenged
            the conventional way of interior designing and given new dimensions
            to the art of interior designing.
          </p>
          <ul>
            <li>
              <button>
                <FontAwesomeIcon icon={faSquareFacebook} />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faTwitter} />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faYoutube} />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </li>
          </ul>
        </li>

        <li className="section2">
          <h2>WHAT WE DO</h2>
          <p>
            <button>Interior Design</button>
            <br />
            <button>Kitchen</button>

            <br />
            <button>Ceiling</button>

            <br />
            <button>Bedroom</button>

            <br />
            <button>Smart Home</button>
          </p>
        </li>

        <li className="section3">
          <h2>Get in touch</h2>
          <p>
            landinteriors@gmail.com <br />
            +91 98987 65656
          </p>

          <ul>
            <button>
              <li>About</li>
            </button>
            <button>
              <li>Projects</li>
            </button>
            <button>
              <li>Studio</li>
            </button>
            <button>
              <li>Blog</li>
            </button>
            <button>
              <li>Contact</li>
            </button>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Footer;
