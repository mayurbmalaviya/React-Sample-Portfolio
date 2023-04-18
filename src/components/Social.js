import React, { Component } from 'react';

import '../assets/scss/social.scss';

class Social extends Component {
    render() {
        return (
            <div className='social'>
                <a href="https://github.com/mayurbmalaviya" target="_blank">
                    <i className='bx bxl-github'></i>
                </a>
                <a href="#" target="_blank">
                    <i className='bx bxl-instagram' ></i>
                </a>
                <a href="https://www.linkedin.com/in/mayurkumar-malaviya-4259aa188/" target="_blank">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
            </div>
        )
    }
}

export default Social;