import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      FoodApp
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
        <Link className="nav-link" to="/">Features</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <form className="d-flex">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>

      </div>
    </div>
  </div>
</nav>

   </>
  

  )
}
