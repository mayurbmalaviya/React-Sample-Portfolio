import React, { Component } from 'react';

import Skills from '../components/Skills';

class About extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>About me</h1>
                <p>
                    Hey, We are brogrammers!
                </p>
                <p>
                    We have passionate to offer full stack developements and, deliever service successfully 
                    to our clients. We have lots of experience to be working with various front-end and backend technologies and frameworks. 
                </p>
                <p>
                    We are very efficient and fluent in latest technologies - HTML, CSS, JavaScript, Java, Nodejs, ReactJs, GraphQL, ForestAdmin, and Android.
                </p>
                <p>
                   We are currently taking efforts to gain expertise on cloud side and to offer clients cloud services such as DevOps and all. 
                    What you are seeing now is my portfolio developed in React in an attempt to showcase my skills and work experience.
                </p>

                <div className='skills'>
                    <p>My professional skillset include : </p>
                    
                    <div className='d-flex flex-wrap'>
                        <Skills />
                    </div>
                </div>

                <p>
                    We have developed a lots of project. I have attached my github account on Contact Us page Social media section. Please follow that if you would like to go through our expertise.
                </p>
            </div>
        );
    }
}

export default About;