import React, { useEffect, useState } from 'react'
import Reviewrecord from '../components/Reviewrecord'
import { Link } from 'react-router-dom'
import { getValue } from '@testing-library/user-event/dist/utils'
import { ToastContainer, toast } from 'react-toastify'


function Review(props) {

    const [username,updateUsename] = useState()
    const [email,updateEmail] = useState()
    const [review,updateReview] = useState()
    const [reviewrecord,updateReviewRecord] = useState([])
    const [reload,updateReload] = useState()
 
    const setValues = async(e) =>{
      if (username==null || email==null || review==null) {
        toast.error("Field is Empty...")
        return
      }
      const data = await fetch("http://localhost:5000/sendreview",{ 
        method : 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          user:username,
          email:email,
          review:review
        })
      })


    const parsedData = await data.json()

        if (parsedData.success) {
          toast.success("Review Submited...")
          updateReload(true)
        }
        else{
          toast.success("Failed to Submit...")
          console.log(parsedData);
        }
      
        // console.log(username);
        // console.log(email);
        // console.log(review);
    }

    const getReview = async()=>{
      const data = await fetch("http://localhost:5000/fetchreviews")
      const parsedData = await data.json()
      updateReviewRecord(parsedData.reviews)
      console.log(parsedData);
      console.log(reviewrecord)
    }
    useEffect(()=>{
      getReview()
    },[reload])


  return (
    <>
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
    <div className="container  text-light py-3 my-5 rounded myshadow" style={{backgroundColor: "rgba(0,0,0,0.3)",width:"90vw"}} >

      
      <div className=''>

      <Link type="button" className="btn btn-primary  px-3" to="/"><i className="bi bi-arrow-left me-2"></i>Back</Link>

      <h1 className={`text-center my-4 text-light`}>Reviews</h1>
      <div className={`row row-cols-1 row-cols-md-3 g-4`}>
        {reviewrecord.map((element,index)=>{
          return  <Reviewrecord data={element} key={index} name={username}></Reviewrecord>
        })}
      </div>
      
        <h1
          className={`text-center mb-3 mt-3`}>
          Share Your Experience
        </h1>
            </div>
        <div className="row">
          <div className="col-md-6">

          <label htmlFor="name" className={`form-label  mt-3`}>
                Full Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="name" onChange={(e)=>{updateUsename(e.target.value)}}/>
            
              <label htmlFor="email" className={`form-label  mt-3`}>
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                id="email" onChange={(e)=>{updateEmail(e.target.value)}}/>

              <label htmlFor="review" className={`form-label mt-3 `}>
                Review :
              </label>
              <textarea
                className="form-control"
                id="review"
                rows="8" onChange={(e)=>{updateReview(e.target.value)}}
              ></textarea>
              <button type="button" className="btn btn-primary mt-3 float-end px-4" onClick={setValues}>Submit</button>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src="review.svg" className="img-fluid  d-block mx-auto"   style={{maxHeight:"430px"}}/>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Review