import React from "react";

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = celsius * (9 / 5) + 32; // fahenheit = celsius * 9/5 + 32 works too.
  // Only change code above this line
  return fahrenheit;
}

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        {" "}
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        {" "}
        Temperature:
        <span className="weather__value">
          {Math.round(convertToF(props.temperature))}F 🌡
        </span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        {" "}
        Humidity:
        <span className="weather__value"> {props.humidity}% </span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        {" "}
        Conditions:
        <span className="weather__value">
          {" "}
          {props.description.toUpperCase()}{" "}
        </span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
