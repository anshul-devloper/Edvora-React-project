import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function FilterSection(props) {
  return (
    <div className="filter-c">
      <button
        id={props.filter == "nearest" ? "selected" : ""}
        onClick={() => props.setFilter("nearest")}
      >
        Nearest rides
      </button>
      <button
        id={props.filter == "upcoming" ? "selected" : ""}
        onClick={() => props.setFilter("upcoming")}
      >
        Upcoming rides ({props.uarr ? props.uarr.length : ""})
      </button>
      <button
        id={props.filter == "past" ? "selected" : ""}
        onClick={() => props.setFilter("past")}
      >
        Past rides ({props.parr ? props.parr.length : ""})
      </button>
      <button className="r-btn" onClick={() => props.setShow(!props.show)}>
        <GiHamburgerMenu /> Filters
      </button>
      {props.show && (
        <div className="filter-box">
          <div className="filters-h">Filters</div>
          <select onChange={(e) => props.setFState(e.target.value)}>
            <option value={"all"}>State</option>
            {props.states.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <select
            id="citySelect"
            onChange={(e) => props.setFCity(e.target.value)}
          >
            <option value={"all"}>City</option>
            {props.cities.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
