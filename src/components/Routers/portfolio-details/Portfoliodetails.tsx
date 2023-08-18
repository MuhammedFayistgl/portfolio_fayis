import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import BreadcrumbComp from "../../../Hooks/BreadcrumbHook";
import { useParams } from "react-router-dom";
import { Project_data } from "../../../Data/ProjectData";

const Portfoliodetails: React.FC = () => {
const {id} = useParams()
console.log(id);
const data = Project_data.filter(data => `${data.id}` === id)[0]
console.log(data);

	return (
		<>
			<div className="hero hero-single route bg-image overlaybg">
				<div className="overlay-mf"></div>
				<div className="hero-content display-table">
					<div className="table-cell">
						<div className="container">
							<h2 className="hero-title mb-4">Project Details</h2>
							<ol className="breadcrumb d-flex justify-content-center">
							<BreadcrumbComp		/>
								{/* <li className="breadcrumb-item">
									<a href="#">Home</a>
								</li>
								<li className="breadcrumb-item active">Portfolio Details</li> */}
							</ol>
						</div>
					</div>
				</div>
			</div>

			<main id="main">
				{/* <!-- ======= Portfolio Details Section ======= --> */}
				<section id="portfolio-details" className="portfolio-details">
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-8">
								<div className="portfolio-details-slider swiper">
									<div className="swiper-wrapper align-items-center">
										<Swiper
											pagination={{
												dynamicBullets: true,
											}}
											modules={[Pagination]}
											className="mySwiper"
										>
											{data?.extrasrc.map( (data) => { return (

												<SwiperSlide>
												<div className="swiper-slide">
													<img src={data} alt="" />
												</div>
											</SwiperSlide>
											)})}

										</Swiper>
									</div>
									{/* <div className="swiper-pagination"></div> */}
								</div>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Category</strong>: {data?.category}
										</li>
										<li>
											<strong>Client</strong>: IND Company
										</li>
										<li>
											<strong>Project date</strong>:{data?.projectdate}
										</li>
										<li>
											<strong>Project URL</strong>: <a >{data?.projectURL}</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description mb-5">
									<h2>This is an example of Project detail</h2>
									<p>
									{data.projectdetail}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End Portfolio Details Section --> */}
			</main>
			{/* <!-- End #main --> */}
		</>
	);
};

export default Portfoliodetails;
