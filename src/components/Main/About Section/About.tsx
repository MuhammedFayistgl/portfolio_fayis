import React from "react";
import ProgressComp from "./Progress/ProgressComp";
type ProgressComp = {
	percent: number;
	status?: "success" | "fail" | "active" | undefined;
};
const About: React.FC = () => {
	return (
		<>
			<section id="about" className="about-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="row">
											<div className="col-sm-6 col-md-5">
												<div className="about-img">
													{/* <img src="assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt="" /> */}
													<img src="img/profilethamb.jpg" className="img-fluid rounded b-shadow-a" alt="" />
												</div>
											</div>
											<div className="col-sm-6 col-md-7">
												<div className="about-info">
													<p>
														<span className="title-s">Name: </span> <span>Muhammed Fayis Thangal</span>
													</p>
													<p>
														<span className="title-s">Profile: </span> <span>Full Stack Developer</span>
													</p>
													<p>
														<span className="title-s">Email: </span> <span>muhammedfayisthangal@gmail.com</span>
													</p>
													<p>
														<span className="title-s">Phone: </span> <span>8086860760</span>
													</p>
												</div>
											</div>
										</div>
										<div className="skill-mf">
											<p className="title-s">Skill</p>
											<span>React</span> <span className="pull-right">85%</span>
											<ProgressComp percent={60} status={"active"} />
											<span>Javascript</span> <span className="pull-right">75%</span>
											<ProgressComp percent={80} status={"active"} />
											<span>Nodejs</span> <span className="pull-right">50%</span>
											<ProgressComp percent={50} status={"active"} />
											<span>MongoDB</span> <span className="pull-right">90%</span>
											<ProgressComp percent={40} status={"active"} />									
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-me pt-4 pt-md-0">
											<div className="title-box-2">
												<h5 className="title-left">About me</h5>
											</div>
											<p className="lead" >
												I am Muhammed Fayis Thangal, a passionate freelancer bringing you programming and design from the future. My expertise is
												developing next-level websites and web applications including full frontend design.
											</p>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
