import React from "react";
import { useEffect, useState } from "react";
import Hourly from "../components/Hourly";
import Weekly from "../components/Weekly";
import Navbar from "../components/Navbar";
import LoadingBar from 'react-top-loading-bar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";

function Home(props) {

    const [progress, setProgress] = useState(0)
    const [weather,updateWeather] = useState()
    const [city,updateCity] = useState()
    const [view,updateView] = useState("temp")

    const searchCity = (e) =>{
      updateCity(e.target.value)
    }

    const getWeatherInfo = async() =>{

      if (city==null) {
        toast.error("Please Enter City Name...")
        return
      }
      
      setProgress(30)
      const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=J5BE2TY44TBWL74M8D3EPHDT9`)
      setProgress(50)
      
      setProgress(100)
      if (data.status === 200) {
          const parsedData = await data.json()
          setProgress(80)
          console.log(parsedData);
          updateWeather(parsedData)
          toast.success("Data Found Successfully...")
          updateView("temp")
      }
      else{
        toast.error("Invalid City Name...")
      }
    }
 
  return (
    <>

      <LoadingBar
        color='#0B5ED7'
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    <div className="container my-3 text-light  rounded-2 myshadow"  style={{backgroundColor: "rgba(0,0,0,0.3)",width:"90vw"}}>

        <Navbar getInfoFunction={getWeatherInfo} searchUserCity={searchCity} />
      {weather && <>
      
      <div className="container px-2 py-2 my-2">
      
        <div className="d-flex flex-column my-2 flex-md-row justify-content-between  ">
          <div>
            <h5 className="">
              <i className="bi bi-geo-alt-fill fs-"> {weather.resolvedAddress}</i>
            </h5>
            <h4>Today's Weather Forecast</h4>
            <h6>Last Updated : {weather.currentConditions.datetime}</h6>
            <h1>
            {((weather.currentConditions.temp - 32) / 1.8).toString().slice(0,5)}<sup>℃</sup>
            </h1>
            <h5>
            
              Feels {((weather.currentConditions.feelslike - 32) / 1.8).toString().slice(0,5)}<sup>℃</sup> 
            </h5>
            
          </div>

          <div className="d-flex mt-md-0 mt-4 ">
          
            <div className="me-3 my-2">
            <img src={`icons/${weather.currentConditions.icon}.png`} alt=''/>
            </div>
            <div>
              <h3>{weather.currentConditions.conditions}</h3>
              <h6>
                <i className="bi bi-cloud-drizzle"></i> Precipitation : {weather.currentConditions.precip ? weather.currentConditions.precip : "0"}%
              </h6>
              <h6>
                <i className="bi bi-droplet-half"></i> Humidity : {weather.currentConditions.humidity}%
              </h6>
              <h6>
                <i className="bi bi-wind"></i> Wind : {weather.currentConditions.windspeed} km/h
              </h6>
              <h6>
              <i className="bi bi-cloud-sun"></i> Sunrise : {weather.currentConditions.sunrise.slice(0,5)} AM
              </h6>
              <h6>
                <i className="bi bi-sunset"></i> Sunset : {weather.currentConditions.sunset.slice(0,5)} PM
              </h6>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3 mt-2 mb-1 gap-md-4 justify-content-start justify-content-xl-center overflow-x-auto">
          <div className={`d-flex ${view==="temp" ? "border-bottom" : "border-0"} border-3 mb-2` } >
              <i className="bi bi-thermometer-half "></i>
              <h6 className="" onClick={()=>{updateView("temp")}} style={{cursor:"pointer"}}>Temperature</h6>
          </div>
              <div className={`d-flex ${view==="wind" ? "border-bottom" : "border-0"} border-3 mb-2`} >
              <i className="bi bi-wind me-1"></i>
              <h6 onClick={()=>{updateView("wind")}} style={{cursor:"pointer"}}>Wind</h6>
              </div>
            <div className={`d-flex ${view==="precip" ? "border-bottom" : "border-0"} border-3 mb-2`}>
              <i className="bi bi-cloud-drizzle me-1"></i>
              <h6 onClick={()=>{updateView("precip")}} style={{cursor:"pointer"}}>Precipitation</h6>
            </div>
            <div className={`d-flex ${view==="humidity" ? "border-bottom" : "border-0"} border-3 mb-2`}>
              <i className="bi bi-droplet-half me-1"></i>
              <h6 onClick={()=>{updateView("humidity")}} style={{cursor:"pointer"}}>Humidity</h6>
            </div>
            </div>

            <div className="d-flex gap-3 justify-content-start   pb-2" style={{overflowX:"auto"}}>
                {weather.days[0].hours.map((element)=>{
                    return <Hourly hoursData={element} view={view}/>
                })}
            </div>

          <h3 className="mt-3">Weekly Forecast</h3>
          <div className="d-flex gap-3 justify-content-start  overflow-x-auto pb-2" >

              {weather.days.map((element,index)=>{
                  if(index<=6){

                    return <Weekly weekData={element}/>
                  }
                  else{
                    return ""
                  }
              })
              }
            
          </div>
      </div>
      </>
      }
      </div>

    </>
  );
}

export default Home;
