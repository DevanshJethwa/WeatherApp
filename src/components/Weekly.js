import React from 'react'

function Weekly(props) {

  return (
    <>

              <div className="card px-2 py-1 flex-shrink-0 d-flex  flex-column " >
                <div className="d-flex justify-content-between"> 
                  <h6>July 12</h6>
                  <h6>Wed</h6>
                </div>

                <div className="d-flex justify-content-between"> 
                <h5 className="fw-bolder mt-2">{((props.weekData.temp - 32) / 1.8).toString().slice(0,2)}° </h5>
                <img className='mx-1' src={`icons/${props.weekData.icon}.png`} alt='' style={{hight:"40px",width:"40px"}}/>
                </div>
                
                
                <h6>Thunderstrom</h6>
                <h6>Wind : {props.weekData.windspeed}km/h</h6>
                <h6>Precipitation : {props.weekData.precip ? props.weekData.precip : "0"}%</h6>
                <h6>Humidity : {props.weekData.humidity}%</h6>
              </div>
          
    </>
  )
}

export default Weekly