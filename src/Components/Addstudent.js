import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Addstudent = () => {
    var [admno,setadmno]=useState("")
    var [rollno,setrollno]=useState("")
    var [name,setname]=useState("")
    var [clas,setclas]=useState("")
    var [parentname,setparentname]=useState("")
    var [mobile,setmobile]=useState("")
    var [address,setaddress]=useState("")
    const subdata=()=>{
        const data={"admno":admno,"rollno":rollno,"name":name,"clas":clas,"parentname":parentname,"mobile":mobile,"address":address}
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
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <dv className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">ADMIN NUM</label>
                    <input onChange={(c)=>{setadmno(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for"> ROLL NUM</label>
                    <input onChange={(c)=>{setrollno(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">NAME</label>
                    <input onChange={(c)=>{setname(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">CLASS</label>
                    <input onChange={(c)=>{setclas(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">PARENT NAME</label>
                    <input onChange={(c)=>{setparentname(c.target.value)}} type="text" className="form-control"/>
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
                    <button  onClick={subdata} className="btn btn-success">SUBMIT</button>
                </div>
                
            </dv>
        </div>
    </div>
</div>
    </div>
  )
}


export default Addstudent