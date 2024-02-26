import React from "react";
import { Link } from "react-router-dom";
import { Vlogs } from "../../../Data/VlogData";


const Blog: React.FC = () => {
	return (
		<>
			<section id="blog" className="blog-mf sect-pt4 mt-5 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Blog</h3>
								<p className="subtitle-a">"Exploring the beauty of nature and our connection to the environment."</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						{Vlogs?.map((vlog,i) => {
							return (
								<>
									<div className="col-md-4" key={i}>
										<div className="card card-blog">
											<div className="card-img">
												<Link to={`/Blog-Single-details/${vlog?.id}`}>
													<a>
														<img src="img/post-1.jpg" alt="" className="img-fluid" />
													</a>
												</Link>
											</div>
											<div className="card-body">
												<div className="card-category-box">
													<div className="card-category">
														<h6 className="category">{vlog?.category}</h6>
													</div>
												</div>
												<h3 className="card-title">
													<a href="blog-single.html">{`See more ideas about ${vlog?.category.toLocaleLowerCase()}`}</a>
												</h3>
												<p className="card-description">{vlog?.articlecontent.slice(0, 150)}</p>
											</div>
											<div className="card-footer">
												<div className="post-author">
													<a href="#">
														<img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
														<span className="author">{vlog?.author}</span>
													</a>
												</div>
												<div className="post-date">
													<span className="bi bi-clock"></span> 10 min
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
						
						{/* <div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<Link to={"/Blog-Single-details"}>
										<a>
											<img src="img/post-2.jpg" alt="" className="img-fluid" />
										</a>
									</Link>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Web Design</h6>
										</div>
									</div>
									<h3 className="card-title">
										<a href="blog-single.html">See more ideas about Travel</a>
									</h3>
									<p className="card-description">
										"Welcome to our delightful recipe website, a gastronomic haven where culinary creativity knows no bounds.
										Explore a diverse collection of meticulously crafted recipes, catering to every palate and occasion. Elevate
										your cooking experience with step-by-step guides, tips, and a flavorful journey that promises to inspire your
										inner chef."
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="#">
											<img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="bi bi-clock"></span> 10 min
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<Link to={"/Blog-Single-details"}>
										<a>
											<img src="img/post-3.jpg" alt="" className="img-fluid" />
										</a>
									</Link>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Web Design</h6>
										</div>
									</div>
									<h3 className="card-title">
										<a href="blog-single.html">See more ideas about booking website</a>
									</h3>
									<p className="card-description">
										"Discover seamless travel planning with our intuitive booking website. Unlock a world of convenience as you
										effortlessly browse, compare, and secure the best deals for flights, accommodations, and more. Your gateway to
										hassle-free travel arrangements, ensuring your journeys are as memorable as the destinations themselves."
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="#">
											<img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="bi bi-clock"></span> 10 min
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>{" "}
		</>
	);
};

export default Blog;
