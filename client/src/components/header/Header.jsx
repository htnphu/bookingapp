import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../../styles/header.css";
import { format } from "date-fns";

import { useState } from "react";

const Header = ({type}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openDate, setOpenDate] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1
      };
    });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <a href="/"><span>Stays</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <a href="/"><span>Flights</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <a href="/"><span>Car rentals</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <a href="/"><span>Attractions</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <a href="/"><span>Airport taxis</span></a>
          </div>
        </div>

        { type !== "list" && <div className="list">
          <h1 className="headerTitle">
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of 25% or
            more with a free Trivella account.
          </p>
          <button className="headerBtn">Sign in or Register</button>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input type="text" placeholder="Where are you going?" name="" id="" className="headerSearchInput" />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon onClick={() => setOpenDate(!openDate)} icon={faCalendarDays} className="headerIcon" />
              <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange 
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon onClick={() => setOpenOptions(!openOptions)}  icon={faPerson} className="headerIcon" />
              <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
              {openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" onClick={() => handleOption("adult", "decrease")} disabled={options.adult <= 1}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={() => handleOption("adult", "increase")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" onClick={() => handleOption("children", "decrease")} disabled={options.children <= 0}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={() => handleOption("children", "increase")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" onClick={() => handleOption("room", "decrease")} disabled={options.room <= 1} >-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={() => handleOption("room", "increase")}>+</button>
                  </div>
                </div>
              </div>}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">
                Search
              </button>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Header;