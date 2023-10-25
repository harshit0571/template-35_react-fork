import React from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

export const Aboutus = () => {
  return (
    <div>
      <Header />

      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="imgContainer">
            {/* <img class="blueDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"/> */}
            <img class="mainImg" src="./2.png" />
          </div>
          <div class="responsive-container-block textSide">
            <p class="text-blk heading">
              About Us
            </p>
            <p class="text-blk subHeading">
             <h1>We're a digital agency that's been around since 1999.</h1> <br></br>
              Experience is our point of difference, both in terms of the experience we hold, and the experiences we create. We bring together the brightest minds in digital to craft experiences that are intuitive, engaging, impactful and enlightening. We are known for our work on complex web projects for leading Australian brands, but we also do everything from digital transformation and user experience design, to digital marketing and managed cloud services.
            </p>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">
                  Real
                </p>
                <p class="text-blk cardSubHeading">
                We're authentic & down-to-earth, true to ourselves & honest to our clients.         </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">
                  Solid
                </p>
                <p class="text-blk cardSubHeading">
                Everything we say and do is backed by solid experience and proven results.
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">
                  Human
                </p>
                <p class="text-blk cardSubHeading">
                We put people first every time in our business and our work.
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">
                  Bright
                </p>
                <p class="text-blk cardSubHeading">
                We aim to be the brightest minds in digital intelligent & enlightening. 
                </p>
              </div>
            </div>
            <a>
              <button class="explore">
                Explore our Services
              </button>
            </a>
          </div>
          {/* <img class="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}
