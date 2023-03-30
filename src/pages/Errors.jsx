import React from 'react'
import { Link } from 'react-router-dom'

const Errors = () => {
  return (
    <>
    <section className='error-page section d-flex justify-content-center align-items-center vh-100'>
        <div className="error-container ">
            <h1>Oops!!! Page is not found</h1>
        <Link to='/' className='btn btn-secondary'>
            to go back home
        </Link>
        </div>
    </section>
    </>
  )
}

export default Errors
