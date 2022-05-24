import React, { useState } from 'react'

const Searchfaculties = () => {
    var [name,setname]=useState("")
    const subdata=()=>{
        const data={"name":name}
        console.log(data)
    }
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
                    <button  onClick={subdata} className="btn btn-success">SEARCH</button>
                </div>
                
            </dv>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchfaculties