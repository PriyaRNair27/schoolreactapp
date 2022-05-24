import React from 'react'
import Header from './Header'

const Viewfaculties = () => {
    var viewlis=[
        {
            "name":"anupama",
            "education":"mtech",
            "mobile":"7089567657",
            "address":"slientvalley",
            "pincode":"689577",
            "district":"ktym"
        },
        {
            "name":"pooja",
            "education":"mtech",
            "mobile":"6589567657",
            "address":"rosevalley",
            "pincode":"689887",
            "district":"plkd"
        },
        {
            "name":"rosy",
            "education":"mca",
            "mobile":"7089567657",
            "address":"dream house",
            "pincode":"689599",
            "district":"kannur"
        },
        {
            "name":"veena",
            "education":"mba",
            "mobile":"8089567657",
            "address":"raj bhavan",
            "pincode":"689678",
            "district":"kzkd"
        },
        {
            "name":"mariya",
            "education":"mtech",
            "mobile":"7089567657",
            "address":"rose villa",
            "pincode":"689544",
            "district":"pta"
        },
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
      <th scope="col">NAME</th>
      <th scope="col">EDUCATION</th>
     
      <th scope="col">MOBILE</th>
      <th  scope="col">ADDRESS</th>
      <th scope="col">PINCODE </th>
      <th scope="col">DISTRICT</th>
    </tr>
  </thead>
  <tbody>
    
        {viewlis.map((value,key)=>{
           return <tr>
                <td>{value.name}</td>
      <td>{value.education}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
      <td>{value.pincode}</td>
      <td>{value.district}</td>
     
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