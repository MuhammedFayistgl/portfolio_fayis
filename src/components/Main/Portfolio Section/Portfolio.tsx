import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "rsuite";
import Swal from "sweetalert2";
import { Project_data } from "../../../Data/ProjectData";


const Portfolio: React.FC = () => {
	const [activePage, setActivePage] = React.useState(1);

	return (
		<>
			<section id="work" className="portfolio-mf sect-pt4 mt-5 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Projects</h3>
								<p className="subtitle-a">
									Join me on this journey where technology meets artistry, and let's collaborate to turn your visions into
									captivating virtual realities. Together, we'll breathe life into the intangible, and your digital dreams will
									resonate with the symphony of success.
								</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						{Project_data?.slice(activePage - 1, activePage + 2).map((value,i) => {
							return (
								<>
									<div className="col-md-4" key={i}>
										<div className="work-box ">
											<a
												onClick={() => {
													Swal.fire({
														title: "Sweet!",
														text: "Modal with a custom image.",
														imageUrl: "img/work-1.jpg",
														imageWidth: 400,
														imageHeight: 200,
														imageAlt: "Custom image",
													});
												}}
												className="portfolio-lightbox"
											>
												<div className="work-img">
													<img width={"100%"} src={value?.imgSrc} alt="" className="img-fluid" />
												</div>
											</a>
											<div className="work-content">
												<div className="row">
													<div className="col-sm-8">
														<h2 className="w-title">{value?.title}</h2>
														<div className="w-more">
															<span className="w-ctegory">{value?.category}</span> /{" "}
															<span className="w-projectdate">{value?.date}</span>
														</div>
													</div>
													<div className="col-sm-4">
														<div className="w-like">
															<a href="portfolio-details.html">
																<Link to={`/portfolio-details/${value?.id}`}>
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
							);
						})}
						<div className="mb-5 d-flex justify-content-center">
							<Pagination
								size="md"
								prev
								last
								next
								first
								total={50}
								limit={5}
								activePage={activePage}
								onChangePage={setActivePage}
							/>
						</div>
					</div>
				</div>
			</section>
			
		</>
	);
};

export default Portfolio;
