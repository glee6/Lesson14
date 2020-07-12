import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Web Developer" where="Wake Technical Community College" from="August 2019" to="Current"/>
            <Widecard title="Computer Science" where="Fayetteville State University" from="August 2016" to="December 2018"/>
            </div>
            )
        }
    }
    
export default Education
    