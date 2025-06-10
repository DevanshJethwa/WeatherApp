import React from "react";

import PartlyCloudyDay from "../Assets/icons/partly-cloudy-day.png";
import PartlyCloudyNight from "../Assets/icons/partly-cloudy-night.png";
import RainSnowShowerDay from "../Assets/icons/rain-snow-showers-day.png";
import RainSnowShowerNight from "../Assets/icons/rain-snow-showers-night.png";
import RainSnow from "../Assets/icons/rain-snow.png";
import Rain from "../Assets/icons/rain.png";
import ShowersDay from "../Assets/icons/showers-day.png";
import ShowersNight from "../Assets/icons/showers-night.png";
import Sleet from "../Assets/icons/sleet.png";
import SnowShowersDay from "../Assets/icons/snow-showers-day.png";
import SnowShowersNight from "../Assets/icons/snow-showers-night.png";
import Snow from "../Assets/icons/snow.png";
import ThunderRain from "../Assets/icons/thunder-rain.png";
import ThunderShowersDay from "../Assets/icons/thunder-showers-day.png";
import ThunderShowersNight from "../Assets/icons/thunder-showers-night.png";
import Thunder from "../Assets/icons/thunder.png";
import Wind from "../Assets/icons/wind.png";
import ClearDay from "../Assets/icons/clear-day.png";
import ClearNight from "../Assets/icons/clear-night.png";
import Cloudy from "../Assets/icons/cloudy.png";
import Fog from "../Assets/icons/fog.png";
import Hail from "../Assets/icons/hail.png";

function Weekly(props) {
  console.log(props);
  //console.log(props.weekData.icon)

  const icons = {
    "partly-cloudy-day":PartlyCloudyDay,
    "partly-cloudy-night":PartlyCloudyNight,
    "rain-snow-showers-day":RainSnowShowerDay,
    "rain-snow-showers-night":RainSnowShowerNight,
    "rain-snow":RainSnow,
    "rain":Rain,
    "showers-day":ShowersDay,
    "showers-night":ShowersNight,
    "sleet":Sleet,
    "snow-showers-day":SnowShowersDay,
    "snow-showers-night":SnowShowersNight,
    "snow":Snow,
    "thunder-rain":ThunderRain,
    "thunder-showers-day":ThunderShowersDay,
    "thunder-showers-night":ThunderShowersNight,
    "thunder":Thunder,
    "wind":Wind,
    "clear-day":ClearDay,
    "clear-night":ClearNight,
    "cloudy":Cloudy,
    "fog":Fog,
    "hail":Hail,
  }
  return (
    <>
      <div className="card px-2 py-1 flex-shrink-0 d-flex  flex-column ">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-1">
            <h6>
              {new Date(props.weekData.datetime)
                .getDate()
                .toString()
                .padStart(2, "0")}
            </h6>
            <h6>
              {
                [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ][new Date(props.weekData.datetime).getMonth()]
              }
            </h6>
          </div>
          <h6>
            {" "}
            {
              ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"][
                new Date(props.weekData.datetime).getDay()
              ]
            }{" "}
          </h6>
        </div>

        <div className="d-flex justify-content-between">
          <h5 className="fw-bolder mt-2">
            {((props.weekData.temp - 32) / 1.8).toString().slice(0, 2)}°C
          </h5>
          <img
            className="mx-1"
           src={icons[props.weekData.icon]}
            alt=""
            style={{ height: "40px", width: "40px" }}
          />
        </div>

        <h6>Thunderstrom</h6>
        <h6>Wind : {props.weekData.windspeed}km/h</h6>
        <h6>
          Precipitation : {props.weekData.precip ? props.weekData.precip : "0"}%
        </h6>
        <h6>Humidity : {props.weekData.humidity}%</h6>
      </div>
    </>
  );
}

export default Weekly;
