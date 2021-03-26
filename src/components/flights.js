import React, { useState, useEffect } from "react";
import "../styles/main.css";

const FlightView = (props) => {
  return (
    <div>
      <div className="flight-label">Flight Data</div>
      <div class="flight-container">
        <div className="flight-card">
          <div className="f-1">{props.data.Carriers[0].Name}</div>
          <div className="f-2">BDT {props.data.Quotes[0].MinPrice}</div>
          <div className="f-3">
            Departs at {props.data.Quotes[0].OutboundLeg.DepartureDate}
          </div>
          <div className="f-4">Depart from {props.data.Places[0].Name}</div>
          <div className="f-5">Arrive at {props.data.Places[1].Name}</div>
        </div>
        <div className="flight-card">
          <div className="f-1">{props.data.Carriers[1].Name}</div>
          <div className="f-2">BDT {props.data.Quotes[1].MinPrice}</div>
          <div className="f-3">
            Departs at {props.data.Quotes[1].OutboundLeg.DepartureDate}
          </div>
          <div className="f-4">Depart from {props.data.Places[0].Name}</div>
          <div className="f-5">Arrive at {props.data.Places[1].Name}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightView;
