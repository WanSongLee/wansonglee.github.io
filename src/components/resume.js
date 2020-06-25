import React, { Component } from 'react';

import resume from './resources/resume.pdf'

class Resume extends Component {
	render() {
		return <iframe title="resume_frame" src={resume} width="100%" height="100%"/>
	}
}

export default Resume;
