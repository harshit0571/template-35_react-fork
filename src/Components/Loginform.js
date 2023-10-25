import React, { useState } from 'react'

export const Loginform = ({settoggle,toggle}) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("")
  const [tog, settog] = useState(false)
  return (
    <div class="login-form">
      <div class="login-container">
        <input type="checkbox" id="check" />
        <div class="login form">
          <header>Login</header>
          <form action="#">
            <input type="" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter your email" />
            <input type="password" onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter your password" />
            <a href="#">Forgot password?</a>
            <input type="button" class="button" onClick={(e)=>{e.preventDefault(); settog(!tog)}} value="Login" />
           
          </form>
         {
          tog &&
          <div className='abbb'>
            <p>email: {email}</p>
            <p>password: {pass}</p>
          </div>
         }

          
          
        </div>
      </div>
      </div>
      )
}
