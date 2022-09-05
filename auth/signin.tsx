// import React from 'react';
import * as React from 'react';
// import "./signin.css";
import SigninForm from './signinForm';

const Signin = () => {


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-6 d-none d-md-block login-banner"></div>
        <div className="col-md-6 col-xs-12 px-5" style={{backgroundColor:"#f0f3fb"}}>
            <h2 className='text-center py-4'>Quiz App</h2>
            <div className='px-3 py-5'>
              <SigninForm/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Signin
