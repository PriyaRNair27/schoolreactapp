import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchfaculties = () => {
    var [data,setdata]=useState([{"education":"","mobile":"","address":"","pincode":"","district":""}])
    var [name,setname]=useState("")
    const subdata=()=>{
        const data={"name":name}
        console.log(data)
        axios.post("http://localhost:5000/api/facultysearch",data).then((response)=>{
            
            setdata(response.data.data)

        })

    }


    const deleteApiCall=(id)=>{
        const data={"_id":id}
       console.log(data)
       axios.post("http://localhost:5000/api/facultydelete",data).then((response)=>
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
                    <label for="" className="for">NAME</label>
                    <input onChange={(c)=>{setname(c.target.value)}} type="text" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-success">SEARCH</button>
                </div>
                
            </div>
           
            {data.map((value,key)=>
    {
        return<div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                EDUCATION:
                <input type="text" value={value.education} className="form-control"/>
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
                PINCODE:
                <input type="text" value={value.pincode} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                DISTRICT:
                <input type="text" value={value.district} className="form-control"/>

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

export default Searchfaculties