import React from 'react'

function Hourly(props) {
  
  return (
    <>
    
        
              <div className="card  px-2 mt-3 mt-sm-0 py-1 flex-shrink-0 justify-content-center align-items-center d-flex flex-column">
                <h6>{props.hoursData.datetime.slice(0,5)} </h6>
                <img className='h-50 w-50 mb-1' src={`icons/${props.hoursData.icon}.png`} alt=''/>
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