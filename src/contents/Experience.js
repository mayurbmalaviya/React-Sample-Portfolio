import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import WideCard from '../components/WideCard';

import precise_logo from '../assets/resources/logos/precise_logo.png';
import inaxus_logo from '../assets/resources/logos/inaxus_logo.png';
import cloudchain_logo from '../assets/resources/logos/cloudchain_logo.png';
import kpit_logo from '../assets/resources/logos/kpit_logo.png';

class Experience extends Component {
    render () {
        return (
            <Container>
                <div className='expedu_section'>
                    <h1 className='pagesubhead'>Work Experience</h1>

                    <WideCard 
                        image={precise_logo} 
                        text={[
                            `We have delieverd a lot of projects to our client. We worked with this client on several projcets. We used to handle front-end side in the project and we delievered successfully our project.`, <br/>, 
                            `Fortunately, we achieve the reward and certificate to be a best team work and delievered project successfully to them.`
                        ]}
                    />
                    <WideCard 
                        image={inaxus_logo} 
                        text={[
                            `We have delieverd too many projects to this client. We worked with this client on several projcets. We used to handle backend-end side in the project and we delievered successfully our project.`, <br/>, 
                            `Fortunately, we achieve the reward and certificate to be a best team work and delievered project successfully to them.`
                        ]}
                    />
                    <WideCard 
                        image={cloudchain_logo} 
                        text={[
                            `We have delieverd too many projects to this client. We worked with this client on several projcets. We used to handle backend-end side in the project and we delievered successfully our project.`, <br/>, 
                            `Fortunately, we achieve the reward and certificate to be a best team work and delievered project successfully to them.`
                        ]}
                    />
                    <WideCard 
                        image={kpit_logo} 
                        text={[
                            `We have delieverd too many projects to this client. We worked with this client on several projcets. We used to handle backend-end side in the project and we delievered successfully our project.`, <br/>, 
                            `Fortunately, we achieve the reward and certificate to be a best team work and delievered project successfully to them.`
                        ]}
                    />
                </div>
                <div className='expedu_section mb-0'>
                    <h1 className='pagesubhead'>Education</h1>

                    <h2>Post Graduate(Web design and development)</h2>
                    <p>Conestoga College 2022-2023</p>
                </div>
            </Container>
        )
    }
}

export default Experience;