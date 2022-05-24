import React from 'react'
import Header from './Header'

const Viewstudent = () => {
    var viewli=[
        {
            "admno":"111",
            "rollno":"1",
            "name":"anuraj",
            "class":"12",
            "parentname":"rajendran",
            "mobile":"9078864564",
            "address":"raj vila"
        },
        {
            "admno":"112",
            "rollno":"2",
            "name":"manu",
            "class":"12",
            "parentname":"radhakrishnam",
            "mobile":"8067864564",
            "address":"dream house"
        },
        {
            "admno":"113",
            "rollno":"3",
            "name":"praveena",
            "class":"12",
            "parentname":"prakash",
            "mobile":"7578864564",
            "address":"veena vila"
        },{
            "admno":"114",
            "rollno":"4",
            "name":"mohan",
            "class":"11",
            "parentname":"rajendran",
            "mobile":"9078864564",
            "address":"malayil house"
        },
        {
            "admno":"115",
            "rollno":"5",
            "name":"sreeram",
            "class":"12",
            "parentname":"rajeev",
            "mobile":"9078864564",
            "address":"sreeram vila"
        }
    ]
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
      <th scope="col">ADMISSION NUMBER</th>
      <th scope="col">ROLL NUMBER</th>
      <th scope="col">NAME</th>
      <th scope="col">CLASS</th>
      <th  scope="col">PARENT NAME</th>
      <th scope="col">MOBILE </th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody>
    
        {viewli.map((value,key)=>{
           return <tr>
                <td>{value.admno}</td>
      <td>{value.rollno}</td>
      <td>{value.name}</td>
      <td>{value.class}</td>
      <td>{value.parentname}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
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

export default Viewstudent