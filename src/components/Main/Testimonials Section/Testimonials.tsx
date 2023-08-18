import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Testimonials: React.FC = () => {
	return (
		<>
			<div className="testimonials paralax-mf bg-image overlaybg">
				<div className="overlay-mf"></div>
				<div className="container">
					<Swiper
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Pagination]}
						className="mySwiper"
					>
						<div className="row">
							<div className="col-md-12">
								<SwiperSlide>
									<div className="swiper-slide">
										<div className="testimonial-box">
											<div className="author-test">
												<img width={150} height={150} src="img/testimonial-1.jpg" alt="" className="rounded-circle b-shadow-a" />
												<span className="author">Muhamad Fayis</span>
											</div>
											<div className="content-test">
												<p className="description lead " style={{ marginBottom: 35 }}>
													"Proficient web developer skilled in crafting dynamic and user-centric websites, combining creativity
													and technical expertise to deliver seamless and engaging digital experiences that exceed client
													expectations."
												</p>
											</div>
										</div>
									</div>
									{/* <!-- End testimonial item --> */}
								</SwiperSlide>
								<SwiperSlide>
									<div className="swiper-slide">
										<div className="testimonial-box">
											<div className="author-test">
												<img width={150} height={150} src="img/testimonial-1.jpg" alt="" className="rounded-circle b-shadow-a" />
												<span className="author">Muhamad Fayis</span>
											</div>
											<div className="content-test">
												<p className="description lead">
													Experienced web developer proficient in creating dynamic and responsive websites. Expertise in HTML,
													CSS, JavaScript, and modern frameworks. Dedicated to delivering visually appealing and user-friendly web
													solutions that meet clients' needs effectively.
												</p>
											</div>
										</div>
									</div>
									{/* <!-- End testimonial item --> */}
								</SwiperSlide>
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
