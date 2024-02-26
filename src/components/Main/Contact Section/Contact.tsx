import React from "react";
import FormContact from "./FormContact";

const Contact: React.FC = () => {
	return (
		<>
			{" "}
			<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route overlaybg">
				<div className="overlay-mf"></div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="contact-mf">
								<div id="contact" className="box-shadow-full">
									<div className="row">
										<div className="col-md-6">
											<div className="title-box-2">
												<h5 className="title-left">Send Message Us</h5>
											</div>
											<div>						
												<FormContact/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="title-box-2 pt-4 pt-md-0">
												<h5 className="title-left">Get in Touch</h5>
											</div>
											<div className="more-info">
												<p className="lead">
													I noticed you visited my personal website! I'm thrilled to have you drop by. Feel free to leave a
													comment in the section below—I'd love to hear your thoughts, feedback, or any questions you might have.
													Your input means a lot to me, and it's a great way for us to connect. Looking forward to your comment!
													{/* Best regards, [Your Name]" */}
												</p>
												<ul className="list-ico">
													<li>
														<span className="bi bi-geo-alt"></span>INDIA - kerala 
													</li>
													<li>
														<span className="bi bi-phone"></span> 8086860760
													</li>
													<li>
														<span className="bi bi-envelope"></span> muhammedfayisthangal@gmail.com
													</li>
												</ul>
											</div>
											<div className="socials">
												<ul>
													<li>
														<a href="">
															<span className="ico-circle">
																<i className="bi bi-facebook"></i>
															</span>
														</a>
													</li>
													<li>
														<a href="https://instagram.com/fayis_elm?igshid=ZGUzMzM3NWJiOQ==">
															<span className="ico-circle">
																<i className="bi bi-instagram"></i>
															</span>
														</a>
													</li>
													<li>
														<a href="">
															<span className="ico-circle">
																<i className="bi bi-twitter"></i>
															</span>
														</a>
													</li>
													<li>
														<a href="https://www.linkedin.com/in/muhammad-fayis-thangal-9843011bb">
															<span className="ico-circle">
																<i className="bi bi-linkedin"></i>
															</span>
														</a>
													</li>
												</ul>
											</div>
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

export default Contact;
