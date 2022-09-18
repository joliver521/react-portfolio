import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Rent-A-Ride',
            description:
                'Rent-A-Ride is an app that was created to help individuals find classic movie vehicles to rent when in need or for fun. After logging in or signing up, the user will be able to see a list of vehicles to rent from and be able to select a date to rent the vehicles for. Disclaimer: This application was created as a class project and is not intended for commercial use.',
            image: 'rent-a-ride.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'APIs',
                'Handlebars',
                'Sequelize',
                'Express',
            ],
            deployed: 'https://sleepy-cove-56868.herokuapp.com/',
            github: 'https://github.com/PGCranford/Rent-A-Ride-',
        },
        {
            name: 'Text Editor',
            description:
                'A text editor that runs in the browser. This app is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancies in case one of the options is not supported by the browser. The application will also function offline.',
            image: 'pwa-text-editor.png',
            technologies: [
                'JavaScript',
                'Concurrently',
                'Babel',
                'Node.js',
                'IndexedDB',
                'Workbox',
            ],
            deployed: 'https://pwa-text-editor-922.herokuapp.com/',
            github: 'https://github.com/joliver521/PWA-Text-Editor',
        },
        {
            name: 'Tech Blog',
            description:
                'Tech blog is a page created to allow users to create accounts and login so they will be able to post and comment on posts. they can also edit and delete their posts from their user dashboard.',
            image: 'tech-blog.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Express',
                'Heroku',
                'Handlebars.js',
                'Sequelize',
            ],
            deployed: 'https://shrouded-mesa-54601.herokuapp.com/',
            github: 'https://github.com/joliver521/Tech-Blog',
        },
        {
            name: 'Note Taker',
            description:
                'Note Taker is an application that can be used to write, save, edit, and delete notes using the CRUD operations',
            image: 'note-taker.png',
            technologies: ['HTML/CSS', 'JavaScript', 'Express.js', 'UUID'],
            deployed: 'https://powerful-gorge-19881.herokuapp.com/notes',
            github: 'https://github.com/joliver521/note-taker',
        },
        {
            name: 'Work Day Scheduler',
            description:
                'Work day schedule allows the user to schedule out their day in the work place. The color of the box for each hour changes along with the current time.',
            image: 'workday-scheduler.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Moment -npm',
                'Bootstrap',
            ],
            deployed: 'https://joliver521.github.io/work-day-scheduler/',
            github: 'https://github.com/joliver521/work-day-scheduler',
        },
        {
            name: 'Brews Clues',
            description:
                'trivia app that challenges your general knowledge. Once you are done with a quiz scroll down and find a local brewery to celebrate your intelligence.',
            image: 'brews-clues.png',
            technologies: ['JavaScript', 'HTML/CSS', 'Bulma'],
            deployed: 'https://pgcranford.github.io/Brew-s-Clues-/',
            github: 'https://github.com/PGCranford/Brew-s-Clues-',
        },
    ];

    return (
        <section>
            <div className="center">
                <h1>My Project Portfolio</h1>
            </div>
            <div className="center">
                <ul className="flex-row">
                    <li>
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className="flex-row">
                    <li>
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className="flex-row">
                    <li>
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
