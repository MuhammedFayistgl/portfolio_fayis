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
			<div className="testimonials paralax-mf bg-image" style={{ backgroundImage: `url(assets/img/overlay-bg.jpg)` }}>
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
												<img src="assets/img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a" />
												<span className="author">Xavi Alonso</span>
											</div>
											<div className="content-test">
												<p className="description lead " style={{ marginBottom: 35 }}>
													Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur
													adipiscing elit.
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
												<img src="assets/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a" />
												<span className="author">Marta Socrate</span>
											</div>
											<div className="content-test">
												<p className="description lead">
													Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur
													adipiscing elit.
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
