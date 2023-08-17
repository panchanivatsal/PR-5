import React from "react";

const Testimonials = () => {
  return (
    <section class="testimonials">
        <div class="background bg-img bg-fixed section-padding pb-0 demo">
            <div class="container">
                <div class="row">
                    {/* <!-- Free Trial Training --> */}
                    <div class="col-md-6 mb-30">
                        <div class="ready v-middle">
                            <h4>Free Trial Training</h4>
                            <p>Make an appointment today for your free and non-binding trial session with or without one of our personal trainers.</p> 
                            <a href="contact.html" class="btn-1 button-1">Contact Us</a>
                        </div>
                    </div>
                    {/* <!-- Testiominals --> */}
                    <div class="col-md-5 offset-md-1">
                        <div class="testimonials-box">
                            <h4>What <span>Clients</span> Say</h4>
                            <div class="owl-carousel owl-theme">
                                <div class="item"> <span class="quote"><img src="img/quot.png" alt=""/></span>
                                    <p>Lorem luctus nulla a scelerisque ultricies miss elonas nisa drana aliquamen the placerat quis risus onthase vitae tesus in the duzse vitaeni asthe nesue the duru in fermen.</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/team/1.jpg" alt=""/> </div>
                                        <div class="cont">
                                            <h6>Jason Brown</h6> <span>Customer Review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item"> <span class="quote">
                                        <img src="img/quot.png" alt=""/>
                                    </span>
                                    <p>Lorem luctus nulla a scelerisque ultricies miss elonas nisa drana aliquamen the placerat quis risus onthase vitae tesus in the duzse vitaeni asthe nesue the duru in fermen.</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/team/2.jpg" alt=""/> </div>
                                        <div class="cont">
                                            <h6>Emily White</h6> <span>Customer Review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
