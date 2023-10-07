import React, { useState } from 'react'

export const Header = () => 
{
    const [show, setshow] = useState(true)
  return (
    
        <header>
            <div class="layer-7"></div>
            
            <div class="nav">
                <div class="logo">
                    <div class="doob">Doob</div>
                    <div class="underline-c">
                        <div class="underline"></div>
                    </div>
                </div>
                <div className='toggle' onClick={()=>(setshow(!show))}><i class="fa fa-bars" aria-hidden="true"></i>
</div>
                <div class={show==true?"active-header":' links '} >
                    
                    <a href="/">Home.</a>
                    <a href="/about">About us.</a>
                    <a href="/portfolio">Portfolio.</a>
                    <a href="/blog">Blog.</a>
                    <a href="/contact ">Contact us.</a>
                    <a href="/login ">Login.</a>
                </div>

                <div class="nav-right">
                    <a href="#">EN<i class="fa fa-sort-desc" aria-hidden="true"></i>
                    </a>
                    <button style={{color: 'red'}}><a href="#contact us">Contact us <span>&nbsp;</span> </a> <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>

            </div>
        </header>

    
  )
}
