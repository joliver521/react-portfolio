import React from 'react';

function Resume() {
    return (
        <section>
            <div className="center">
                <h1>My Resume</h1>
            </div>
            <div className="center">
                <a href={require('../../assets/resume/my_resume.pdf')} download>
                    <h3 id="resume-pdf">Resume PDF</h3>
                </a>
            </div>
            <div>
                <h5 className="center">Proficiencies</h5>
                <ol>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>APIs</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>RESTful web services</li>
                    <li>Progressive Web Applications</li>
                    <li>Model View Controller</li>
                    <li>Sequelize</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>GraphQL</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                </ol>
            </div>
        </section>
    );
}

export default Resume;
