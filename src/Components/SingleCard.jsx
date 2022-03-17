import React from "react";
export default function SingleCard(props) {
  return (
    <div className="single-card">
      <div className="row">
        <div className="col-lg-3">
          <img src={props.imgUrl} className="map-img" />
        </div>
        <div className="col-lg-9">
          <div className="row">
            <span className="field">Ride Id:</span>{" "}
            <span className="value">{props.id}</span>
            <div className="card-box">
              <span>{props.city}</span>
              <span>{props.state}</span>
            </div>
          </div>
          <div className="row">
            <span className="field">Origin Station:</span>{" "}
            <span className="value">{props.origin}</span>
          </div>
          <div className="row">
            <span className="field">Station Path:</span>{" "}
            <span className="value">{props.path}</span>
          </div>
          <div className="row">
            <span className="field">Date:</span>{" "}
            <span className="value">{props.date}</span>
          </div>
          <div className="row">
            <span className="field">Distance:</span>{" "}
            <span className="value">{props.distance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
