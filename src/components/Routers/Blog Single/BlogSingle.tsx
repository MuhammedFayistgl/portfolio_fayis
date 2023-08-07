import React from "react";

const BlogSingle: React.FC = () => {
	return (
		<>
			<div className="hero hero-single route bg-image" style={{ backgroundImage: ` url(assets/img/overlay-bg.jpg)` }}>
				<div className="overlay-mf"></div>
				<div className="hero-content display-table">
					<div className="table-cell">
						<div className="container">
							<h2 className="hero-title mb-4">Blog Details</h2>
							<ol className="breadcrumb d-flex justify-content-center">
								<li className="breadcrumb-item">
									<a href="#">Home</a>
								</li>
								<li className="breadcrumb-item">
									<a href="#">Library</a>
								</li>
								<li className="breadcrumb-item active">Data</li>
							</ol>
						</div>
					</div>
				</div>
			</div>

			<main id="main">
				{/* <!-- ======= Blog Single Section ======= --> */}
				<section className="blog-wrapper sect-pt4" id="blog">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="post-box">
									<div className="post-thumb">
										<img src="assets/img/post-1.jpg" className="img-fluid" alt="" />
									</div>
									<div className="post-meta">
										<h1 className="article-title">Lorem ipsum dolor sit amet consec tetur adipisicing</h1>
										<ul>
											<li>
												<span className="bi bi-person"></span>
												<a href="#">Jason London</a>
											</li>
											<li>
												<span className="bi bi-tag"></span>
												<a href="#">Web Design</a>
											</li>
											<li>
												<span className="bi bi-chat-left-text"></span>
												<a href="#">14</a>
											</li>
										</ul>
									</div>
									<div className="article-content">
										<p>
											Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.
											Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a
											pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
											cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem
											ut libero malesuada feugiat.
										</p>
										<p>
											Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet
											elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
											amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada.
										</p>
										<p>
											Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur
											adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor
											sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
											Donec rutrum congue leo eget malesuada.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
											Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis
											porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut
											lacinia in, elementum id enim.
										</p>
										<blockquote className="blockquote">
											<p className="mb-0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
											</p>
										</blockquote>
										<p>
											Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet
											elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
											amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada.
										</p>
									</div>
								</div>
								<div className="box-comments">
									<div className="title-box-2">
										<h4 className="title-comments title-left">Comments (34)</h4>
									</div>
									<ul className="list-comments">
										<li>
											<div className="comment-avatar">
												<img src="assets/img/testimonial-2.jpg" alt="" />
											</div>
											<div className="comment-details">
												<h4 className="comment-author">Oliver Colmenares</h4>
												<span>18 Sep 2017</span>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque ipsam
													temporibus maiores quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet
													corporis.
												</p>
												<a href="3">Reply</a>
											</div>
										</li>
										<li>
											<div className="comment-avatar">
												<img src="assets/img/testimonial-4.jpg" alt="" />
											</div>
											<div className="comment-details">
												<h4 className="comment-author">Carmen Vegas</h4>
												<span>18 Sep 2017</span>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque ipsam
													temporibus maiores quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet
													corporis, veritatis deserunt.
												</p>
												<a href="3">Reply</a>
											</div>
										</li>
										<li className="comment-children">
											<div className="comment-avatar">
												<img src="assets/img/testimonial-2.jpg" alt="" />
											</div>
											<div className="comment-details">
												<h4 className="comment-author">Oliver Colmenares</h4>
												<span>18 Sep 2017</span>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque ipsam
													temporibus maiores quae.
												</p>
												<a href="3">Reply</a>
											</div>
										</li>
										<li>
											<div className="comment-avatar">
												<img src="assets/img/testimonial-2.jpg" alt="" />
											</div>
											<div className="comment-details">
												<h4 className="comment-author">Oliver Colmenares</h4>
												<span>18 Sep 2017</span>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque ipsam
													temporibus maiores quae natus libero optio.
												</p>
												<a href="3">Reply</a>
											</div>
										</li>
									</ul>
								</div>
								<div className="form-comments">
									<div className="title-box-2">
										<h3 className="title-left">Leave a Reply</h3>
									</div>
									<form className="form-mf">
										<div className="row">
											<div className="col-md-6 mb-3">
												<div className="form-group">
													<input type="text" className="form-control input-mf" id="inputName" placeholder="Name *" required />
												</div>
											</div>
											<div className="col-md-6 mb-3">
												<div className="form-group">
													<input type="email" className="form-control input-mf" id="inputEmail1" placeholder="Email *" required />
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="form-group">
													<input type="url" className="form-control input-mf" id="inputUrl" placeholder="Website" />
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="form-group">
													<textarea
														id="textMessage"
														className="form-control input-mf"
														placeholder="Comment *"
														name="message"
														cols={45}
														rows={8}
														required
													></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<button type="submit" className="button button-a button-big button-rouded">
													Send Message
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-4">
								<div className="widget-sidebar sidebar-search">
									<h5 className="sidebar-title">Search</h5>
									<div className="sidebar-content">
										<form>
											<div className="input-group">
												<input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
												<span className="input-group-btn">
													<button className="btn btn-secondary btn-search" type="button">
														<span className="bi bi-search"></span>
													</button>
												</span>
											</div>
										</form>
									</div>
								</div>
								<div className="widget-sidebar">
									<h5 className="sidebar-title">Recent Post</h5>
									<div className="sidebar-content">
										<ul className="list-sidebar">
											<li>
												<a href="#">Atque placeat maiores.</a>
											</li>
											<li>
												<a href="#">Lorem ipsum dolor sit amet consectetur</a>
											</li>
											<li>
												<a href="#">Nam quo autem exercitationem.</a>
											</li>
											<li>
												<a href="#">Atque placeat maiores nam quo autem</a>
											</li>
											<li>
												<a href="#">Nam quo autem exercitationem.</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="widget-sidebar">
									<h5 className="sidebar-title">Archives</h5>
									<div className="sidebar-content">
										<ul className="list-sidebar">
											<li>
												<a href="#">September, 2017.</a>
											</li>
											<li>
												<a href="#">April, 2017.</a>
											</li>
											<li>
												<a href="#">Nam quo autem exercitationem.</a>
											</li>
											<li>
												<a href="#">Atque placeat maiores nam quo autem</a>
											</li>
											<li>
												<a href="#">Nam quo autem exercitationem.</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="widget-sidebar widget-tags">
									<h5 className="sidebar-title">Tags</h5>
									<div className="sidebar-content">
										<ul>
											<li>
												<a href="#">Web.</a>
											</li>
											<li>
												<a href="#">Design.</a>
											</li>
											<li>
												<a href="#">Travel.</a>
											</li>
											<li>
												<a href="#">Photoshop</a>
											</li>
											<li>
												<a href="#">Corel Draw</a>
											</li>
											<li>
												<a href="#">JavaScript</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End Blog Single Section --> */}
			</main>
			{/* <!-- End #main --> */}
		</>
	);
};

export default BlogSingle;
