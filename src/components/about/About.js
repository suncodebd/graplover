import React from 'react';
import { homeObjTow } from '../data';
import Infosectiontow from '../homesectiontow/InfoSection';
import { AboutContainer, AboutHeading } from './AboutStyle';

function About() {
    return (
        <AboutContainer>
            <AboutHeading>About Us</AboutHeading>
            <Infosectiontow {...homeObjTow} />
        </AboutContainer>
    );
}

export default About;
