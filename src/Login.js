import React, { useState } from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Signup } from './Components/Signup'
import { Loginform } from './Components/Loginform'

export const Login = () => {
    const [toggle, settoggle] = useState(true)

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <Header/>
        {
            toggle?<Signup settoggle={settoggle} toggle={toggle}/>:<Loginform settoggle={settoggle} toggle={toggle}/>
        }
        <button style={{backgroundColor:'white', border:'white',fontSize:'2.0rem',fontWeight:'bolder',width:'450px',color:'var(--blue)',height:'40px',margin:'0 auto'}} onClick={()=>(settoggle(!toggle))}>{toggle?'Already Have an account?Login':'Create New Account Sign up'}</button>
        <Footer/></div>
  )
}
