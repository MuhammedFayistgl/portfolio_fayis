import React from "react";
// import {ReactCountUp} from '../../../Hooks/ReactCountUp'
import CountUp from 'react-countup';

const Counter: React.FC = () => {
	

	return (
		<div>
			{" "}
			<div className="section-counter paralax-mf bg-image" style={{ backgroundImage: `url(assets/img/counters-bg.jpg)` }}>
				<div className="overlay-mf"></div>
				<div className="container position-relative">
					<div className="row">
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle">
										<i className="bi bi-check"></i>
									</span>
								</div>
								<div className="counter-num"style={{display:'flex',flexDirection:'column'}}>
									<CountUp  className="counter " enableScrollSpy duration={4}  end={100} />
									<span className="counter-text">WORKS COMPLETED</span>
								</div>
							</div>
						</div>
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle">
										<i className="bi bi-journal-richtext"></i>
									</span>
								</div>
								<div className="counter-num"style={{display:'flex',flexDirection:'column'}}>			
								<CountUp  className="counter " enableScrollSpy duration={4} end={100} />
									<span className="counter-text">YEARS OF EXPERIENCE</span>
								</div>
							</div>
						</div>
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle">
										<i className="bi bi-people"></i>
									</span>
								</div>
								<div className="counter-num"style={{display:'flex',flexDirection:'column'}}>
									<CountUp  className="counter " enableScrollSpy duration={4} end={100} />
									<span className="counter-text">TOTAL CLIENTS</span>
								</div>
							</div>
						</div>
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle">
										<i className="bi bi-award"></i>
									</span>
								</div>
								<div className="counter-num" style={{display:'flex',flexDirection:'column'}}>
								<CountUp className="counter " enableScrollSpy  end={100} />
									<span className="counter-text">AWARD WON</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
