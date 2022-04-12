import Link from "next/link";
import Slider from "react-slick";


function Slider1 () {
    return (
      <>
        <div className="banner-one" style={{"backgroundImage":"url(images/main-slider/slider1/pic2.png)"}}>
			<div className="container">
				<div className="banner-inner">
					<div className="img1"><img src="images/main-slider/slider1/pic3.png" alt=""/></div>
					<div className="img2"><img src="images/main-slider/slider1/pic4.png" alt=""/></div>
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="banner-content">
								<h6 data-wow-duration="1s" data-wow-delay="0.5s" className="wow fadeInUp sub-title text-primary">Creative Digital Agency</h6>
								<h1 data-wow-duration="1.2s" data-wow-delay="1s" className="wow fadeInUp "><span className="text-primary">Seek Re-Invention</span><br /> With S3 Agency</h1>
								<p  data-wow-duration="1.4s" data-wow-delay="1.5s" className="wow fadeInUp m-b30">Re-Invention moves the world forward. And that’s what we do best. We help organizations reinvent themselves through digital and cognitive transformation.</p>
								<Link href="/about-us-1" ><a  data-wow-duration="1.6s" data-wow-delay="2s" className="wow fadeInUp btn btn-link d-inline-flex align-items-center" ><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>
							</div>
						</div>
						<div className="col-md-6">
							<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
								{/* <img className="move-1" src="images/move/pic1.png" alt=""/> */}
								<img className="move-2" src="images/about/img7.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
  
  export default Slider1;