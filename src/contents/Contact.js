import React, { Component } from 'react';

import Social from '../components/Social';

class Contact extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>Reach Out to Me!</h1>
                <p>
                    Whether you want to build new project with great level of expeienced developer, discuss projects, or just say hi, We'd love to hear from you {String.fromCodePoint('0x1f60A')}
                </p><br/>

                <h3>Email list to contactUs</h3>
                <div className="sendMail">
                    <a href="mailto: deshpandem0@gmail.com">
                          <i className='bx bx-envelope' ></i> mayurbmalaviya@gmail.com
                        <i className='bx bx-envelope' ></i> Hitsavaliya@gmail.com
                        <i className='bx bx-envelope' ></i> Harshikalariya@gmail.com
                        <i className='bx bx-envelope' ></i> PrinceGinoya@gmail.com 
                    </a>
                    <div>
                        <i className='bx bx-map'></i> Ontario, Canada
                    </div>
                </div>
                <Social/>
            </div>
        );
    }
}

export default Contact;