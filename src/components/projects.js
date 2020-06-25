import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

import breakoutGif from './resources/breakout.gif'
import word2vecImg from './resources/word2vec.png'
import nstGif from './resources/nst.gif'
import ganImg from './resources/gan.png'

import coursecrunchImg from './resources/coursecrunch.png'
import fortniteImg from './resources/fortnite.png'
import cannyImg from './resources/canny.jpg'



class Projects extends Component {
	constructor(props) {
		console.log("constructed")
		super(props);
		this.state = { 
			activeTab: 1
		};
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div style={{width: '75%', margin: 'auto'}}>
					<Grid>
						{/* column 0 */}
						<Cell col={4}>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', height:'425px', background: `url(${breakoutGif}) center / cover`}} >
									Atari Breakout AI
								</CardTitle>
								<CardText>
									Trained an AI that learns to play Atari Breakout by Reinforcement Learning using Deep Q-Networks.
									<br/>
								</CardText>
								<CardActions border>
									<a href="https://github.com/WansongLee/DeepQLearning" target="_blank" rel="noopener noreferrer">
										<Button colored>GitHub</Button>
									</a>
									</CardActions>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', background: '#3E4EB8' }} >
									Image Colorizer
								</CardTitle>
								<CardText>
									Created an AI that colorizes black-and-white images to colored images.
								</CardText>
							</Card>
						</Cell>

						{/* column 1 */}
						<Cell col={4}>
							
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#000', height: '320px', background: `url(${word2vecImg}) center / cover` }} >
									Word Embeddings
								</CardTitle>
								<CardText>
									Used the Word2Vec and t-SNE algorithm to create a low-dimensional word embeddings and to visualize relationship between words
								</CardText>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', background: '#3E4EB8' }} >
									Neural Machine Translator
								</CardTitle>
								<CardText>
									Experimented with RNN, GRU, LSTM, and Transformer to perform seq2seq translation between languages
								</CardText>
							</Card>
						</Cell>

						{/* column 2 */}
						<Cell col={4}>						
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', height: '165px', background: `url(${nstGif}) center / cover`  }} >
									Video Style Transfer
								</CardTitle>
								<CardText>
									Created an AI that converts videos to a different style using Neural Style Transfer.
								</CardText>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450',  margin: 'auto'}}>
								<CardTitle style={{ color: '#FFF', height: '165px', background: `url(${ganImg}) center / cover` }} >
									Emoji GAN
								</CardTitle>
								<CardText>
									Implemented CycleGAN to convert between Apple emojis and Windows emojis
								</CardText>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', background: '#3E4EB8' }} >
									Exam Scanner
								</CardTitle>
								<CardText>
									Created a script that automatically reads student information from exam covers using <b>NumPy</b>, <b>OpenCV</b>, and <b>scikit-learn</b>.
								</CardText>
							</Card>
						</Cell>
					</Grid>
				</div>
			)
		} else if (this.state.activeTab === 1) {
			return (
				<div style={{width: '75%', margin: 'auto'}}>
					<Grid>
						{/* column 1 */}
						<Cell col={4}>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#FFF', height: '210px', background: `url(${coursecrunchImg}) center / cover` }}>
									Course Crunch
								</CardTitle>
								<CardText>
									Developed a React web application that gives course recommendations and various other services for University of Toronto students.
									<br/>
									<br/>
									Tech stack: <b>MongoDB</b>, <b>Express</b>, <b>React</b>, <b>Node.js</b>, <b>PostgreSQL</b>, <b>Neo4j</b>
								</CardText>
								<CardActions border>
								<a href="https://github.com/CourseCrunch/CourseCrunch" target="_blank" rel="noopener noreferrer">
									<Button colored>GitHub</Button>
								</a>
								</CardActions>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '250px', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', background: '#3E4EB8' }} >
									Proxy Server
								</CardTitle>
								<CardText>
									Implemented a proxy server with cache in <b>Python</b> to reduce server load and load time. 
									<br/>
									<br/>
								</CardText>
							</Card>
						</Cell>

						{/* column 2 */}
						<Cell col={4}>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#FFF', height: '190px', background: `url(${fortniteImg}) center / cover` }} >
									2D FPS Game
								</CardTitle>
								<CardText>
									Created a 2D multiplayer First Person Shooter game on the web.
									<br/>
									<br/>
									Tech stack: <b>SQLite</b>, <b>Express</b>, <b>React</b>, <b>Node.js</b>, <b>WebSocket</b>
									
								</CardText>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450',  margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', background: '#3E4EB8' }} >
									EXT2 File System
								</CardTitle>
								<CardText>
									Implemented mkdir, cp, rm, and hard/soft links in <b>C</b> according to the ext2 file system specification.
								</CardText>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', background: '#3E4EB8' }} >
									PaperAccess
								</CardTitle>
								<CardText>
									Used <b>Java</b> to build an Android app to help high school students access IGCSE papers. 
								</CardText>
							</Card>
						</Cell>

						{/* column 2 */}
						<Cell col={4}>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#FFF', height: '250px', background: `url(${cannyImg}) center / cover` }} >
									Canny Edge Detector
								</CardTitle>
								<CardText>
									Built a Canny edge detector that leverages the parallel processing power of GPUs using <b>C++</b> and <b>CUDA</b>.
								</CardText>
							</Card>
							<br/>
							<Card shadow={5} style={{ minHeight: '0px', minWidth: '450', margin: 'auto' }}>
								<CardTitle style={{ color: '#fff', background: '#3E4EB8' }} >
									Plastic Language
								</CardTitle>
								<CardText>
									Created a new programming language and interpreter from scratch in <b>Racket</b>.
								</CardText>
							</Card>
						</Cell>
					</Grid>
				</div>
			)
		}

	}



	render() {
		return (
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Machine Learning</Tab>
					<Tab>Software Engineering</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;
