import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='p-5 text-center' style={{minHeight:"100vh"}}>
        <div className="row container">
            <div className="col-md-4"></div>
            <div className="col-md-4 bg-dark  shadow d-flex justify-content-center align-items-center flex-column text-warning p-5 m-5 rounded-5" style={{backgroundColor:'rgb(255,255,255,0.2)'}}>
                <h1 >WELCOME TO EXPENSOIC!</h1>
                <hr />
                <p>Navigate to add or view your expenses</p>
                <Link to={'/addexp'}><button className='btn btn-warning'>ADD EXPENSE</button></Link>

            </div>
            <div className="col-md-4"></div>

        </div>
        



    </div>
  )
}

export default Home