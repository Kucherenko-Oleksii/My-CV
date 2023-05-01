import React from "react";

export const Profile = () => {
    return(
        <div className='informationContainer'>
            <div className='aboutMe'>
            <div title='Oleksii Kucherenko' className='profilePhoto'/>
            <h3>Oleksii Kucherenko</h3>
            <p>Frontend developer at CyberBionic Systematics</p>
                <div className='quote'>
                    <p>
                    Hi, if you got to my site, it means you are interested in me ;)<br/>
                    Please take a few minutes of your time and read my resume.<br/> 
                    I will be glad to get feedback from you)
                    Thank you)
                    </p>
                </div>
                <div className='contactInfo'>
                    <p>
                    Tel.: +38 (093) 611 01 87<br/>
                    E-mail: kucherenkoolexiy@gmail.com
                    </p>
                </div>
                <div className='socialPage'>
                    <div className='linkedIn' onClick={() => {window.location = 'https://www.linkedin.com/in/oleksii-kucherenko-3543081a7/'}} title = 'linkedIn'/>
                    <div className='telegram' onClick={() => {window.location = 'https://t.me/kucherenko_oleksii'}} title = 'Telegram'/>
                    <div className='gitHub' onClick={() => {window.location = 'https://github.com/Kucherenko-Oleksii?tab=repositories'}} title = 'gitHub'/>
                </div>
            </div>
            <div className='description'>
                <h1>Professional Summary</h1>
                <p>
                    I completed the React Native ProCamp by GlobalLogic.<br/>
                    Also studied front-end at SoftServe Academy,<br/>
                    I did an internshipn Germany companys Campus, where I was a front-end developer on their projects.<br/>
                    I have experience in commercial projects.<br/>

                    <strong>Main tech skills:</strong> HTML5, CSS3, Flexbox, SASS (SCSS), responsive and multi device layouts, BEM,<br/> Javascript (ES6+), React (React-Hooks), TypeScript, REST API, GraphQL, Node.js, Express.js, MongoDB, bootstrap v5,<br/> Redux, Styled Components, Axios, Figma, Github, Trello, Jira, VS Code<br/>

                    <strong>Strong communication skills; teamwork skills</strong><br/>

                    Experience with the following languages and technologies:<br/>
                    MS SQL Server, MySQL, OOP, React Native, Algorithms, and data structures.<br/>

                    <strong>My desire to learn new things and my aspiration for personal and professional growth are integral parts of my life 😊</strong>
                </p>
            </div>
        </div> 
    );
}