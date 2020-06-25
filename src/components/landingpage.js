import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import profilePicture from './resources/profile.jpg'

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src={profilePicture}
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Wan Song Lee</h1>
							<p>
								Recent graduate from University of Toronto. <br />
								Looking for positions in Machine Learning and/or Software Engineering.
							</p>

							<Grid>	
								<Cell col={1} offset={4} style={{textAlign: 'right'}}>
									<a href="https://www.linkedin.com/in/wansonglee/" rel="noopener noreferrer" target="_blank">
										<i className="fa fa-linkedin-square" aria-hidden="true" />
									</a>
								</Cell>
								<Cell col={7} style={{textAlign: 'left'}}>
									<a href="https://www.linkedin.com/in/wansonglee/" rel="noopener noreferrer" target="_blank">										
										<p>
											linkedin.com/in/wansonglee/
										</p>
									</a>
								</Cell>

								<Cell col={1} offset={4} style={{textAlign: 'right'}}>
									<a href="https://github.com/wansonglee/" rel="noopener noreferrer" target="_blank">
										<i className="fa fa-github-square" aria-hidden="true" />
									</a>
								</Cell>
								<Cell col={7} style={{textAlign: 'left'}}>
									<a href="https://github.com/wansonglee/" rel="noopener noreferrer" target="_blank">										
										<p>
											github.com/wansonglee
										</p>
									</a>
								</Cell>

								<Cell col={1} offset={4} style={{textAlign: 'right'}}>
									<i className="fa fa-phone-square" aria-hidden="true" />
								</Cell>
								<Cell col={7} style={{textAlign: 'left'}}>
									<p>
										+1 (289) 788-4022
									</p>
								</Cell>

								<Cell col={1} offset={4} style={{textAlign: 'right'}}>
									<i className="fa fa-envelope" aria-hidden="true" />
								</Cell>
								<Cell col={1} style={{textAlign: 'right'}}>
									<p>
										wansong.lee@utoronto.ca
									</p>
								</Cell>
							</Grid>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;
