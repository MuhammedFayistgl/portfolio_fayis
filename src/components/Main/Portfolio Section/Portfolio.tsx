import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Portfolio: React.FC = () => {

	const data :Array  = [{
		title:  "Portfolio",
		ctegory: "portfolio",
		imgSrc : 'assets/img/work-1.jpg',
		date: "51/78/2012"
	},{
		title: "Portfolio",
		ctegory: "portfolio",
		imgSrc : 'assets/img/work-2.jpg',
		date: "51/78/2012"
	},{
		title: "Portfolio",
		ctegory: "portfolio",
		imgSrc : 'assets/img/work-3.jpg',
		date: "51/78/2012"
	},{
		title: "Portfolio",
		ctegory: "portfolio",
		imgSrc : 'assets/img/work-4.jpg',
		date: "51/78/2012"
	}]
	return (
		<>
			<section id="work" className="portfolio-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Portfolio</h3>
								<p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						{data.map((value:String, index:number) => {
							return (
								<>
								<div className="col-md-4" key={index} >
							<div className="work-box">
								<a
									onClick={() => {
										Swal.fire({
											title: "Sweet!",
											text: "Modal with a custom image.",
											imageUrl: "assets/img/work-1.jpg",
											imageWidth: 400,
											imageHeight: 200,
											imageAlt: "Custom image",
										});
									}}
									className="portfolio-lightbox"
								>
									<div className="work-img">
										<img src={value.imgSrc} alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">{value?.title}</h2>
											<div className="w-more">
												<span className="w-ctegory">{value?.ctegory}</span> / <span className="w-date">{value?.date}</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html">
													<Link to={"/portfolio-details"}>
														<span className="bi bi-plus-circle"></span>
													</Link>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
								
								</>
							)
						})}
						
						{/* <div className="col-md-4">
							<div className="work-box">
								<a onClick={() => {
										Swal.fire({
											title: "Sweet!",
											text: "Modal with a custom image.",
											imageUrl: "assets/img/work-2.jpg",
											imageWidth: 400,
											imageHeight: 200,
											imageAlt: "Custom image",
										});
									}} className="portfolio-lightbox">
									<div className="work-img">
										<img src="assets/img/work-2.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Loreda Cuno Nere</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html">
													<Link to={"/portfolio-details"}>
														<span className="bi bi-plus-circle"></span>
													</Link>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a onClick={() => {
										Swal.fire({
											title: "Sweet!",
											text: "Modal with a custom image.",
											imageUrl: "assets/img/work-3.jpg",
											imageWidth: 400,
											imageHeight: 200,
											imageAlt: "Custom image",
										});
									}}  className="portfolio-lightbox">
									<div className="work-img">
										<img src="assets/img/work-3.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Mavrito Lana Dere</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html">
													<Link to={"/portfolio-details"}>
														<span className="bi bi-plus-circle"></span>
													</Link>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a onClick={() => {
										Swal.fire({
											title: "Sweet!",
											text: "Modal with a custom image.",
											imageUrl: "assets/img/work-4.jpg",
											imageWidth: 400,
											imageHeight: 200,
											imageAlt: "Custom image",
										});
									}} className="portfolio-lightbox">
									<div className="work-img">
										<img src="assets/img/work-4.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Bindo Laro Cado</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html">
													<Link to={"/portfolio-details"}>
														<span className="bi bi-plus-circle"></span>
													</Link>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a onClick={() => {
										Swal.fire({
											title: "Sweet!",
											text: "Modal with a custom image.",
											imageUrl: "assets/img/work-5.jpg",
											imageWidth: 400,
											imageHeight: 200,
											imageAlt: "Custom image",
										});
									}} className="portfolio-lightbox">
									<div className="work-img">
										<img src="assets/img/work-5.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Studio Lena Mado</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html">
													<Link to={"/portfolio-details"}>
														<span className="bi bi-plus-circle"></span>
													</Link>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a onClick={() => {
										Swal.fire({
											title: "Sweet!",
											text: "Modal with a custom image.",
											imageUrl: "assets/img/work-6.jpg",
											imageWidth: 400,
											imageHeight: 200,
											imageAlt: "Custom image",
										});
									}} className="portfolio-lightbox">
									<div className="work-img">
										<img src="assets/img/work-6.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Studio Big Bang</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html">
													<Link to={"/portfolio-details"}>
														<span className="bi bi-plus-circle"></span>
													</Link>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
