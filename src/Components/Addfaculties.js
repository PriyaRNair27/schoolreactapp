import axios from 'axios'
import React, { useState } from 'react'

const Addfaculties = () => {
    var [name,setname]=useState("")
    var [education,seteducation]=useState("")
    var [mobile,setmobile]=useState("")
    var [address,setaddress]=useState("")
    var [pincode,setpincode]=useState("")
    var [district,setdistrict]=useState("")
    
    const subdata=()=>{
        const data={"name":name,"education":education,"mobile":mobile,"address":address,"pincode":pincode,"district":district}
        console.log(data)
    axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data).then(
        (response)=>
        {
            console.log(response.data)
            if(response.data.status=="success")
            {
                alert("successfully inserted")
            }
            else
            {
                alert("failed ")
            }
        }
        )}

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <dv className="row g-3">
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">NAME</label>
                    <input onChange={(c)=>{setname(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">EDUCATION</label>
                    <input onChange={(c)=>{seteducation(c.target.value)}} type="text" className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">MOBILE</label>
                    <input onChange={(c)=>{setmobile(c.target.value)}} type="text" className="form-control"/>
                
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">ADDRESS</label>
                    <input onChange={(c)=>{setaddress(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">PINCODE</label>
                    <input onChange={(c)=>{setpincode(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">DISTRICT</label>
                    <input onChange={(c)=>{setdistrict(c.target.value)}} type="text" className="form-control"/>
                </div>
                
                

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-success">SUBMIT</button>
                </div>
                
            </dv>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addfaculties