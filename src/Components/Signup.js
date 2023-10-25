import React, { useState } from 'react'

export const Signup = ({settoggle,toggle}) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("")
  const [tog, settog] = useState(false)
  return (
    <div class="registration-containter">
        
        
    <div class="registration form">
      <header>Signup</header>
      <form action="#">
        <input type="" onChange={(e)=>{setemail(e.target.value)}}  placeholder="Enter your email"/>
        <input type="password" onChange={(e)=>{setpass(e.target.value)}}  placeholder="Create a password"/>
        <input type="password"  placeholder="Confirm your password"/>
        <input type="button" onClick={(e)=>{e.preventDefault(); settog(!tog)}} class="button" value="Signup"/>
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

  


  )
}
