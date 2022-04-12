import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img4.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                              <h2 className="title">How We Can Help You Achieve Your Business Goal</h2>
                          </div>
                          <p>For us, every relationship is built on trust and honesty. Before we start your website design, we engage with the key individuals in your business to truly understand the objectives you want to achieve. Our web development process keeps those people involved, engaged, and informed throughout the design, build, and your project's life.</p>
                          <p className="m-b30">We design and build world-class responsive web applications that will help Your businesses.</p>
                          <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">CEO Slavo Popovic</h4>
                         <Link href="/about-us-1"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link> 
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;