import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg  navbar-dark bg-success">
  <div class="container-fluid">
    <Link  class="navbar-brand" to="/">SCHOOL APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" to="/">ADD STUDENT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/addfacu">ADD FACULTIES</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link"to="/search">SEARCH STUDENT</Link>
        </li>
       
        <li class="nav-item">
        <Link class="nav-link"to="/searchfacu">SEARCH FACULTIES</Link>
        </li>
        <li class="nav-item">
       <Link class="nav-link" to="/viewstud">VIEW STUDENT</Link>
        </li>
        <li class="nav-item">
       <Link class="nav-link" to="/viewfacu">VIEW FACULTIES</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    





    </div>
  )
}

export default Header