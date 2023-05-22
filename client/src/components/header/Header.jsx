import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_list">
          <div className="header_list_item active">
            <FontAwesomeIcon icon={faBed} />
            <a href="/"><span>Stays</span></a>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faPlane} />
            <a href="/"><span>Flights</span></a>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faCar} />
            <a href="/"><span>Car rentals</span></a>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faBed} />
            <a href="/"><span>Attractions</span></a>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faTaxi} />
            <a href="/"><span>Airport taxis</span></a>
          </div>
        </div>

        <div className="header_infor">
          <h1 className="header_title">
              A lifetime of discounts? It's Genius.
          </h1>
          <p className="header_desc">
            Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Lamabooking account
          </p>
          <button className="header_btn">Sign in / Register</button>
          {/* <div className="header_search">
            <div className="header_search_item">
              <FontAwesomeIcon icon={faBed} className="header_icon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="header_search_input"
                // onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header;