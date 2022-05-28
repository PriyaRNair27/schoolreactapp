import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchstudent = () => {
    var [data,setdata]=useState([{"rollno":"","name":"","clas":"","parentname":"","mobile":"","address":""}])
    var [admin,setadmin]=useState("")
    const subdata=()=>{
        const data={"admin":admin}
        console.log(data)
        axios.post("http://localhost:5000/api/studentsearch",data).then((response)=>{
            
            setdata(response.data.data)

        })
    }

    const deleteApiCall=(id)=>{
        const data={"_id":id}
       console.log(data)
       axios .post("http://localhost:5000/api/studentdelete",data).then((response)=>
       {
           if(response.data.status=="success")
           {
               alert("success")
           }
           else
           {
               alert("error")
           }
       })
      
   }
   
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">ADMIN NUM</label>
                    <input onChange={(c)=>{setadmin(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-success">SEARCH </button>
                </div>
                
            </div>
            {data.map((value,key)=>
    {
        return<div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                ROLL NUM:
                <input type="text" value={value.rollno} className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                NAME:
                <input type="text" value={value.name} className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                CLASS:
                <input type="text" value={value.clas} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                PARENT NAME:
                <input type="text" value={value.parentname} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                MOBILE:
                <input type="text" value={value.mobile} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                ADDRESS:
                <input type="text" value={value.address} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>

                </div>
         
        </div>
        })}
</div>
</div>
</div>

    </div>
  )
}

export default Searchstudent