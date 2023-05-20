import React, { Component } from 'react';

class REGISTRATION extends Component {
    state = {  } 
    render() { 
        return (
<div>

<div className="reg_page">
<form action="register" method="post">
  <h1 style={{position: "relative", left: "30%", marginBottom: "5%"}}>Registration</h1> 
  <div className="registration_form">  
    <div className="mb-3">
      <label htmlFor="user_name" className="form-label"><h5>User Name</h5></label>
      <input type="text" name="user_name" placeholder="User Name" className="form-control" id="user_name" required />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label"><h5>Email</h5></label>
      <input type="email" name="email" placeholder="Email" className="form-control" id="email" required/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="password1" className="form-label"><h5>Password</h5></label>
      <input type="password" name="password1" placeholder="Password" className="form-control" id="password1" required/>
    </div>
  

    <div className="mb-3">
      <label htmlFor="password2" className="form-label"><h5>ReEnter Password</h5></label>
      <input type="password" name="password2" placeholder="ReEnter Password" className="form-control" id="password2" required/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  </form>
</div> 
</div>

        );
    }
}
 
export default REGISTRATION;