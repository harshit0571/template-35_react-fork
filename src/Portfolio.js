import React from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

export const Portfolio = () => {
  return (
    <div>
        <Header/>
        <div class='portfolio-main'>
        <div class="card">
      <div class="img-bx">
        <img src="./2110990526.jpg" alt="img" />
      </div>
      <div class="content">
        <div class="detail">
          <h2>Govind<br /><span>Student</span></h2>
          <ul class="sci">
            <li>
              <a href="https://www.facebook.com/" target='blank'><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target='blank'><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="https://in.linkedin.com/" target='blank'><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target='blank'><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

        <Footer/>
    </div>
  )
}
