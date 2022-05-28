import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewfaculties = () => {
  var  [viewlist,setviewlist]=useState([])

  axios.get("http://localhost:5000/api/faculty").then(
      (response)=>{
  
          console.log(response.data)
          setviewlist(response.data.data) 
        
      })
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
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">EDUCATION</th>
     
      <th scope="col">MOBILE</th>
      <th  scope="col">ADDRESS</th>
      <th scope="col">PINCODE </th>
      <th scope="col">DISTRICT</th>
    </tr>
  </thead>
  <tbody>
    
        {viewlist.map((value,key)=>{
           return <tr>
                <td>{value.name}</td>
      <td>{value.education}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
      <td>{value.pincode}</td>
      <td>{value.district}</td>
      <td> <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>
</td>
     
      </tr>
        })}
     
     
   
   
    
  </tbody>
</table>



</div>
</div>
</div></div></div>
    </div>
  )
}

export default Viewfaculties