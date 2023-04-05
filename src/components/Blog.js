import React from "react";

import Header from './Header';
import Footer from './Footer';

export default function Blog() {
    return (
        <>
            <Header />
            <div className="container py-3">
                {/* <div class="title h1 text-center">Blog articles</div> */}

                <div className="cardcontainer">
                    <div className="row ">

                        <div className="col-md-7 px-3 ">
                            <div className="card-block px-6">
                                <h4 className="card-title">What Are the Benefits of Walking?  </h4>
                                <p className="card-text mt-4">
                                    Walking can offer numerous health benefits to people of all ages and fitness levels. It may also help prevent certain diseases and even prolong your life.

                                    Walking is free to do and easy to fit into your daily routine. All you need to start walking is a sturdy pair of walking shoes.......</p>
                                <br />
                                <a href="https://www.health.harvard.edu/staying-healthy/5-surprising-benefits-of-walking" className="mt-auto btn btn-success btn-sm ">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 float right">
                            <img className="blog-block" src="./images/img2.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="cardcontainer">
                    <div className="row ">

                        <div className="col-md-7 px-3 ">
                            <div className="card-block px-6">
                                <h4 className="card-title">How Many Calories Do You Burn is Enough? </h4>
                                <p className="card-text mt-4">
                                    Running is a great way to get your cardio in, especially if you’re not someone who is particularly interested in playing a sport or hanging out in the gym. It’s an activity you can do on your own, and except for quality shoes, doesn’t require you to buy any special equipment.

                                    We know running is good for you. But how many calories does that sweat session help you burn?...........</p>

                                <br />
                                <a href="https://www.healthline.com/health/fitness-exercise/how-many-calories-do-i-burn-a-day" className="mt-auto btn btn-success btn-sm ">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 float right">
                            <img className="blog-block" src="./images/img1.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="cardcontainer">
                    <div className="row ">

                        <div className="col-md-7 px-3 ">
                            <div className="card-block px-6">
                                <h4 className="card-title">Surprising Benefits of Walking with a partner?  </h4>
                                <p className="card-text mt-4">
                                    Research has shown that exercise is not only good for your physical health, it also supports emotional and mental health. You can exercise with a friend and get the added benefit of emotional support.........
                                </p>
                                <br />
                                <a href="#" className="mt-auto btn btn-success btn-sm ">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 float right">
                            <img className="blog-block" src="./images/img3.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="cardcontainer">
                    <div className="row ">

                        <div className="col-md-7 px-3 ">
                            <div className="card-block px-6">
                                <h4 className="card-title">Health Benefits of Physical Activity for Adults </h4>
                                <p className="card-text mt-4">
                                The evidence is clear—physical activity can make you feel better, function better, and sleep better. Even one session of moderate-to-vigorous physical activity reduces anxiety, and even short bouts of physical activity are beneficial. Being physically active also fosters normal growth and development, improves overall health, can reduce the risk of various chronic diseases.......</p>
                                <br />
                                <a href="https://www.cdc.gov/physicalactivity/basics/index.htm" className="mt-auto btn btn-success btn-sm ">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 float right">
                            <img className="blog-block" src="./images/img4.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="cardcontainer">
                    <div className="row ">

                        <div className="col-md-7 px-3 ">
                            <div className="card-block px-6">
                                <h4 className="card-title">Is Mental Health realted to Exercise? </h4>
                                <p className="card-text mt-4">
                                Exercise is not just about aerobic capacity and muscle size. Sure, exercise can improve your physical health and your physique, trim your waistline, improve your sex life, and even add years to your life. But that’s not what motivates most people to stay active......</p>
                                <br />
                                <a href="https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm#:~:text=Other%20mental%20health%20benefits%20of%20exercise%201%20Sharper,4%20More%20energy.%20...%205%20Stronger%20resilience.%20" class="mt-auto btn btn-success btn-sm ">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 float right">
                            <img className="blog-block" src="./images/img5.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="cardcontainer">
                    <div className="row ">

                        <div className="col-md-7 px-3 ">
                            <div className="card-block px-6">
                                <h4 className="card-title"> Top Reasons Why Workout Gear and Equipment Is So Important</h4>
                                <p className="card-text mt-4">
                                When it comes to exercises, everyone has different preferences. Some prefer easy walking or jogging, which requires no gear or equipment, other than good running shoes.
                                Others like to use hand-held weights, and still, others prefer full gym equipment for their daily workout routines.

The type of equipment and gear chose will vary depending on an individual’s fitness and health goals......</p>
                                <br />
                                <a href="https://fitboxmethod.com/top-reasons-why-workout-gear-and-equipment-is-so-important/" className="mt-auto btn btn-success btn-sm ">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 float right">
                            <img className="blog-block" src="./images/img6.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="imagecardcontainer">
                    <div className="row ">

                    <div className= "embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item" src="//www.youtube.com/embed/zB4I68XVPzQ"></iframe>
      </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}