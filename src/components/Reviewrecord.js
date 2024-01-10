import React from 'react'
import { Link } from 'react-router-dom'

function Reviewrecord(props) {
  return (
    <>
        
            
                <div className="col">
                    <div className={`card-body bg-light text-dark py-3 mb-4 px-2 rounded`}>
                        <p className="card-text"><i className="bi bi-quote"></i>{props.data.review}<i className="bi bi-quote "></i></p>
                        <div className='d-flex align-items-center justify-content-start'>
                                <i className="bi bi-person-circle me-2 mb-2 fs-5"></i>
                            <div className='d-flex flex-column justify-content-start '>
                                <h6 className='lead fs-6 my-1'>{props.data.user}</h6>
                                <h6>{props.data.email}</h6>
                            </div>
                        </div>
                </div>
                
            </div>
        
    </>
  )
}

export default Reviewrecord