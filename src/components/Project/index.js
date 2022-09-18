import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const techs = currentProject.technologies;
    const application = currentProject.deployed;
    const github = currentProject.github;

    function getTechnologies(techArr) {
        let technologies = '';

        for (let i = 0; i < techArr.length; i++) {
            if (i === techArr.length - 1) {
                technologies += techArr[i];
            } else {
                technologies += techArr[i] + ', ';
            }
        }

        return technologies;
    }

    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img
                variant="top"
                src={require(`../../assets/projects/${image}`)}
                className="card-image"
            />
            <div className="center">
                <Card.Body>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Subtitle className="card-subtitle">
                        Technologies Employed
                    </Card.Subtitle>
                    <Card.Text className="card-techs">
                        {getTechnologies(techs)}
                    </Card.Text>
                    <Card.Link
                        href={application}
                        target="_blank"
                        className="card-link"
                    >
                        {name} Deployed
                    </Card.Link>
                    <br></br>
                    <Card.Link
                        href={github}
                        target="_blank"
                        className="card-link"
                    >
                        {name} Github
                    </Card.Link>
                </Card.Body>
            </div>
        </Card>
    );
}

export default Project;
