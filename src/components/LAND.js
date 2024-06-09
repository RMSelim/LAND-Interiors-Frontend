import "./LAND.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import kitchen from "../images/kitchen.png";
import bedroom from "../images/bedroom.png";
import living from "../images/living.png";
import office from "../images/office.png";


function LAND() {
  return (
    <>
      <div className="brief1">
        <h1>Why LAND Interiors</h1>
        <ul>
          <li>
          <FontAwesomeIcon icon={faCalendar} className="icons"/> <br />
            50 days or we <br />
            pay you rent
          </li>
          <li>
          <FontAwesomeIcon icon={faFaceSmileBeam} className="icons"/> <br />
            1500+happy <br />
            customers
          </li>
          <li>
          <FontAwesomeIcon icon={faMedal} className="icons"/> <br />
            300+ design <br />
            experties
          </li>
        </ul>
      </div>

      <div className="brief2">
        <h1>What we do?</h1>
        <ul>
          <li><img src={kitchen} alt="" /> <br />
          Modular Kitchen
          </li>
          <li><img src={bedroom} alt="" /> <br />
          Bedroom
          </li>
          <li><img src={living} alt="" /> <br />
          Living room
          </li>
          <li><img src={office} alt="" /> <br />
          Home office
          </li>
        </ul>
        <p className="brief">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet 
        luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum 
        facilisis leo, vel fringilla est ullamcorper eget nulla
        </p>
      </div>
    </>
  );
}

export default LAND;
