import React, { useState, useEffect } from "react";
import "../styles/main.css";
import FlightView from "./flights";
import axios from "axios";

const Main = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ origin, destination });

    const options = {
      method: "GET",
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/BD/BDT/en-US/" +
        origin +
        "-sky/" +
        destination +
        "-sky/anytime",
      headers: {
        "x-rapidapi-key": "31799ff833mshdc413de7a349e59p15c832jsnfd2a01775473",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setFlightData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div class="parent-container">
      <div className="form-container">
        <form id="form" onSubmit={submitHandler}>
          <label htmlFor="origin">Flying from</label>
          <input
            onChange={(e) => setOrigin(e.target.value)}
            type="text"
            name="origin"
            placeholder="DAC"
            id=""
            value={origin}
          />
          <label htmlFor="destination">Flying to</label>
          <input
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            name="destination"
            id=""
            placeholder="LHR"
            value={destination}
          />
          <button type="submit">Search Flights</button>
        </form>
      </div>
      {loading ? (
        <div>Search for any flight</div>
      ) : (
        <FlightView data={flightData} />
      )}
    </div>
  );
};

export default Main;
