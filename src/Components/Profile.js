import React from "react";
import { ContactInformation } from './ContactInformation';

export const Profile = () => {
    return(
        <div className='informationContainer'>
           <ContactInformation/>
            <div className='description'>
                <h1>Professional Summary</h1>
                <p>
                    I have completed the React Native ProCamp by GlobalLogic.<br/>I also studied front-end development at SoftServe Academy.<br/>During an internship at a German company's campus, I worked as a front-end developer on their projects. I have experience working on commercial projects.<br/> 

                    <strong>My main technical skills include</strong> HTML5, CSS3, Flexbox, SASS (SCSS), responsive and multi-device layouts, BEM, JavaScript (ES6+), React (React-Hooks), TypeScript, REST API, GraphQL, Node.js, Express.js, MongoDB, Bootstrap v5, Redux, Styled Components, Axios, Figma, GitHub, Trello, Jira, and VS Code.<br/>

                    I possess strong communication and teamwork skills.<br/><strong>I also have experience with MS SQL Server, MySQL, OOP, React Native, algorithms, and data structures.</strong>
                    <br/>
                    Learning new things and striving for personal and professional growth are integral parts of my life. 😊
                </p>
            </div>
        </div> 
    );
}