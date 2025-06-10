import React from 'react';

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

function Hourly(props) {
  
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
  console.log(props.hoursData.icon);
  

  return (
    <>
    
        
              <div className="card  px-2 mt-3 mt-sm-0 py-1 flex-shrink-0 justify-content-center align-items-center d-flex flex-column">
                <h6>{props.hoursData.datetime.slice(0,5)} </h6>
                <img className='h-50 w-50 mb-1' src={icons[props.hoursData.icon]} alt=''/>
                <h6>{props.view == "temp" && (( props.hoursData.temp - 32) / 1.8).toString().slice(0,2)}
                {props.view == "temp" && <sup>°c</sup>}
                
                {props.view == "wind" && props.hoursData.windspeed}
                {props.view == "wind" && " km/h"}
                
                {props.view == "precip" && props.hoursData.precip}
                {props.view == "precip" && " %"}
                
                {props.view == "humidity" && props.hoursData.humidity}
                {props.view == "humidity" && " %"}

                </h6>
              </div>
          
    </>
  )
}

export default Hourly