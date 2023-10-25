import React from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            {/* <div class="overlay"></div> */}
            <Header />
            <div class="wrapper ">


                <div class="container">
                    <section id="home" class="first">

                        <div class="aa">
                            <div class="aa-1">
                                <h1>The Spirit of<br />Digital Agency.</h1>
                            </div>
                            <div class="aa-2">We've been illuminating digital for Australia's brightest brands since 1999                            </div>
                            <div class="aa-3">
                                <div class="aa-3-1"><Link to='/about'><button>More About Us</button></Link></div>
                                <div class="aa-3-2"><Link to='/contact'><button>Get in touch.</button></Link></div>
                            </div>

                        </div>

                        <img class=" picture bg-shape-3" src="bg_shape_5.png" alt="" width="800" height="859" />


                        <div class="picture first-img pic1"><img src="./3.png" /></div>

                    </section>
                    <section class="second">
                        <img class="bg-shape-2 picture" src="./bg_shape_4.png" alt="" width="279" height="967" />
                        <div class="bb">
                            <div class="bb-1">
                                <div class="bb-1-1">
                                    <h1>Anything you <br /> need,we've<br /> got you covered</h1>
                                </div>
                                <div class="bb-1-2">
                                    <Link to='/contact'><button>
                                        Get in touch
                                    </button></Link>
                                </div>
                            </div>
                            <div class="bb-2">
                                <div class="bb-2-1">
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div class="bb-2-2">
                                    <h2>Web & Graphic<br /> Design</h2>
                                </div>
                                <div class="bb-2-3">
                                We believe in the power of design to transform businesses and captivate audiences. Our mission is to deliver innovative, eye-catching solutions that elevate your brand.

                                </div>
                            </div>
                            <div class="bb-3">
                                <div class="bb-3-1">
                                    <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                </div>
                                <div class="bb-3-2">
                                    <h2>Web & App Development</h2>

                                </div>
                                <div class="bb-3-3">
                                We're dedicated to transforming your ideas into reality through innovative web and app development. Our mission is to provide cutting-edge solutions that drive your success.
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about us" class="three">
                        <img class="picture cloud" src="./2.png" />
                        <div class="cc">
                            <div class="cc-1">
                                <h4>Our Company</h4>
                            </div>
                            <div class="cc-2">
                                <h1>Some Fine <br /> Words about us</h1>
                            </div>
                            <div class="cc-3">
                                <p> Experience is our point of difference, both in terms of the experience we hold, and the experiences we create. We bring together the brightest minds in digital to craft experiences that are intuitive, engaging, impactful and enlightening.
                                </p>
                            </div>
                            <div class="cc-4">
                                <i class="fa fa-long-arrow-left left" aria-hidden="true"></i>

                                <i class="fa fa-long-arrow-right right" aria-hidden="true"></i>

                            </div>


                        </div>
                    </section>
                    <section id="portfolio" class="four">
                        <div class="dd">
                            <div class="dd-1">
                                <h1>See Some of our <br />Creative work.</h1>
                            </div>
                            <div class="dd-4">
                                <i class="fa fa-long-arrow-left left" aria-hidden="true"></i>

                                <i class="fa fa-long-arrow-right right" aria-hidden="true"></i>

                            </div>


                        </div>
                        <div class="flexbox-container">
                            <div class="child"><img src="./pexels-artem-podrez-5716001.jpg" alt="" /></div>
                            <div class="child"><img src="./pexels-canva-studio-3194521.jpg" /></div>
                            <div class="child"><img src="./pexels-kaboompics-com-6168.jpg" alt="" /></div>
                        </div>
                        <div class="flexbox-container">
                            <div class="child"><img src="./pexels-kindel-media-7688173.jpg" alt="" /></div>
                            <div class="child"><img src="./pexels-pixabay-4158.jpg" alt="" /></div>
                            <div class="child"><img src="./pexels-roger-brown-5126268.jpg" alt="" /></div>
                        </div>
                        <div class="dd-text">See More of These.</div>
                    </section>
                    <section id="blog" class="five">
                        <div class="ee">
                            <div class="ee-1">Blog Stories</div>

                            <div class="ee-3">
                                <i class="fa fa-long-arrow-left left" aria-hidden="true"></i>

                                <i class="fa fa-long-arrow-right right" aria-hidden="true"></i>

                            </div>
                            <div class="ee-2">
                                <h1>Check Our News</h1>
                            </div>

                            <div class="ee-4">
                                <div class="ee-4-1">
                                    <div class="ee-4-1-1">
                                        <h1>Explore</h1>
                                    </div>
                                    <div class="ee-4-1-2">
                                        {/* 17 March 2019 */}
                                    </div>
                                    <div class="ee-4-1-3">
                                    We take the time to understand the context so decisions can be made from a place of evidence rather than assumption.
                                    </div>
                                    <div class="ee-4-1-4">

                                        <i class="fa fa-long-arrow-right righttt" aria-hidden="true"></i>

                                    </div>
                                </div>
                                <div class="ee-4-2">
                                    <div class="ee-4-2-1">
                                        <h1>Build</h1>
                                    </div>
                                    <div class="ee-4-2-2">
                                        {/* 17 March 2019 */}
                                    </div>
                                    <div class="ee-4-2-3">
                                    We bring together the right digital specialists at the right moments to suit the unique challenges of your project. 
                                    </div>
                                    <div class="ee-4-2-4">

                                        <i class="fa fa-long-arrow-right righ" aria-hidden="true"></i>

                                    </div>
                                </div>
                                <div class="ee-4-3">
                                    <div class="ee-4-2-1">
                                        <h1>Grow</h1>
                                    </div>
                                    <div class="ee-4-2-2">
                                        {/* 17 March 2019 */}
                                    </div>
                                    <div class="ee-4-2-3">
                                    Our teams work closely together to ensure your digital assets  to evolve and deliver a return on your investment.
                                    </div>
                                    <div class="ee-4-2-4">

                                        <i class="fa fa-long-arrow-right righ" aria-hidden="true"></i>

                                    </div>
                                </div>
                            </div>
                            <img class="bg-shape picture" src="./bg_shape.png" alt="" width="418" height="667" />

                        </div>
                    </section>
                    <section id="contact us" class="five">
                        <div class="ff-1">CONTACT US</div>
                        <div class="ff-2">
                            <h1>Get in Touch</h1>
                        </div>
                        <div class="ff-3">
                            <div class="fff-3">
                                <input type="text" placeholder="   Your Email" />
                                <input type="text" placeholder="   Subject" />
                            </div>
                            <div class="ff-3-3"><input type="text" placeholder="    Message..." /></div>
                        </div>
                        <div class="ff-4"><button>Send Message</button></div>
                    </section>

                </div>
            </div>
            <Footer />


        </div>
    )
}
