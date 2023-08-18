import React from "react";

const Services: React.FC = () => {
	const style: object = {
		// Adding media query..
		"@media (maxWidth: 375px)": {
			margintop: "10px",
		},
	};

	return (
		<>
			{" "}
			<section id="services" className="services-mf pt-5 mt-5 route">
				<div className="container">
					<div className="row" style={style}>
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Services</h3>
								<p className="subtitle-a">I design and code beautifully simple things, and I love what I do.</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="bi bi-briefcase"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Design</h2>

									<p className="s-description text-center">
										IIn the realm of pixels and possibilities, web design emerges as a symphony of art and function. Every line of
										code constructs a virtual universe, where color and typography converse in silent eloquence. A dance of layout
										and whitespace guides the eye, revealing the narrative woven within the digital tapestry. This harmonious
										marriage of aesthetics and user experience shapes a portal where creativity knows no bounds. As the screen
										becomes a canvas, web design orchestrates a ballet of visual poetry, inviting all to partake in its
										interactive sonnet of the modern age.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="bi bi-card-checklist"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Development</h2>
									<p className="s-description text-center">
										In the intricate realm of web development, lines of code weave the tapestry of the digital world. Like a
										composer crafting a symphony, developers harmonize languages to sculpt functionality and form. Cascading
										styles ripple across screens, a ballet of visual rhythm choreographed by meticulous hands. Frameworks stand as
										architectural blueprints, guiding the construction of virtual realms where interactivity thrives. With each
										click and scroll, users embark on a journey through algorithms and databases, orchestrated by the hands of
										coding artisans. In this ever-evolving saga, web development unfurls as a saga of innovation and creation,
										transforming imagination into tangible online experiences.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="bi bi-bar-chart"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Photography</h2>
									<p className="s-description text-center">
										Within the confines of a single frame, photography captures the fleeting essence of existence. The lens, a
										portal to alternate realities, distills emotion, light, and shadow into frozen moments of time. A dance
										between the photographer's vision and the world's canvas, each click immortalizes stories untold and emotions
										unspoken. From candid glances to sweeping landscapes, photography transcends words, evoking nostalgia, awe,
										and empathy. It's the art of stealing fragments from the river of time, holding them aloft like precious gems
										for the world to see. Through the aperture, life is translated into a language of light and composition,
										resonating with the hearts of those who peer into its enigmatic beauty.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="bi bi-binoculars"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Responsive Design</h2>
									<p className="s-description text-center">
										Responsive design, a digital chameleon, elegantly adapts web landscapes to the myriad screens that frame our
										virtual interactions. Like a tailor crafting bespoke attire, it ensures websites drape flawlessly across
										devices, whether on expansive monitors or pocket-sized wonders. Fluid grids and flexible elements collaborate
										in a dance of harmonious proportions, reshaping content with finesse. Images and text cascade like water,
										embracing the contours of screens, while media queries whisper instructions to the code, adjusting layouts as
										screens shift orientation. Responsive design is the art of empathy in pixels, anticipating user needs and
										transcending barriers of device disparity. It's an ode to adaptability, where design transcends limitations,
										granting seamless and enchanting experiences to all who traverse its ever-changing canvases.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="bi bi-brightness-high"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Graphic Design</h2>
									<p className="s-description text-center">
										Graphic design, the alchemy of visuals, melds artistry and communication into a tapestry of imagery. With the
										stroke of a cursor, designers orchestrate colors, shapes, and typography, conjuring visual narratives that
										speak without words. Every element is a brushstroke on a digital canvas, each composition a symphony of
										balance and contrast. From logos that brand the subconscious to posters that provoke thought, graphic design
										forges a bridge between intention and perception. It's a dance of aesthetics and purpose, where pixels and
										vectors intertwine to evoke emotion, tell stories, and shape perceptions. In this realm of visual poetry,
										designers wield creativity to distill complex ideas into visual elegies that resonate with hearts and minds,
										giving form to concepts and casting enchantment upon the mundane.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="bi bi-calendar4-week"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Marketing Services</h2>
									<p className="s-description text-center">
										Marketing services, the virtuosos of promotion, conjure a symphony of strategies to elevate brands from
										obscurity to acclaim. Armed with insights, they compose tales of value, weaving narratives that resonate with
										hearts and minds. Through digital realms and tangible spaces, they sculpt campaigns that cast spells of
										desire, arousing curiosity and planting seeds of loyalty. SEO incantations propel websites to the forefront of
										search, while social media spells foster connections across virtual landscapes. Data analytics become their
										crystal ball, revealing insights that guide the melody of persuasion. Like skilled conductors, marketing
										services harmonize channels, directing cohesive crescendos that echo through the corridors of consumer
										consciousness. In this marketing ballet, every interaction becomes a chance to enrapture, enchant, and
										transform, turning prospects into devoted patrons of the brand's captivating saga.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
