import React from 'react';

function Footer() {
    return (
        <footer className="center">
            <div>
                <a href="https://github.com/joliver521" target="_blank">
                    <img
                        src={require('../../assets/images/github.png')}
                        alt="Github"
                        style={{ height: 50, width: 50 }}
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/jason-s-oliver/"
                    target="_blank"
                >
                    <img
                        src={require('../../assets/images/linkedin.jpg')}
                        alt="LinkedIn"
                        style={{ height: 50, width: 50 }}
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://stackoverflow.com/users/13029576/jollie"
                    target="_blank"
                >
                    <img
                        src={require('../../assets/images/stackoverflow.png')}
                        alt="Stack Overflow"
                        style={{ height: 50, width: 50 }}
                    ></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
