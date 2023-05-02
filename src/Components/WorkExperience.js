import React from "react";
import { ContactInformation } from './ContactInformation';

export const WorkExperience = () => {
    return(
        <div className='informationContainer'>
            <ContactInformation/>         
            <div className='description'>
                <h1>Work Experience</h1>
                <p>
                    My experience in:<br/>
                    <strong>CAMPUS:</strong><br/>
                    I completed an internship at the German CAMPUS training laboratory where I optimized existing web applications and developed new web-oriented systems to improve the learning process for students.<br/>
                    <strong>Stack: ReactJS, Bootstrap, SASS(SCSS), BEM, JS(ES6+), Webpack.</strong><br/>
                    <em>(06/2020 - 06/2021)</em><br/><br/>

                    <strong>GlobalLogic:</strong><br/>
                    I have experience developing web-oriented rating systems for product evaluation.<br/> Additionally, I have developed a mobile fitness application using the React Native framework. <br/>The application allows users to easily choose a set of exercises, select a personal trainer, make an appointment for a consultation with a trainer, and order a subscription to the gym.<br/>
        
                    <strong>Stack: ReactJS, React Native, Node.js, Express.js, SASS(SCSS), MongoDB, Docker.</strong><br/>
                    <em>(08/2021 - 12/2021)</em><br/><br/>

                    <strong>CyberBionic Systematics:</strong><br/>
                    I am a Frontend Developer and Frontend Development Trainer at CyberBionic Systematics. My work involves developing landing pages and multi-page websites<br/>
                
                    <strong>Stack: ReactJS, HTML5&CSS3, BEM, SASS(SCSS), JS(ES2022), Redux, Git, Figma, Webpack, Docker, Node.js, Express.js.</strong><br/>
                    I authored the course on HTML5&CSS3 fundamentals, which is focused on teaching the basics of web layout and design using HTML5 and CSS3 technologies.<br/>

                    <em>(07/2022 - now)</em>
                </p>
                <div className="figmaDescription">
                    <h2>My projects in Figma</h2>
                    <span><em>(If you want to look at these projects, you must click on the name project.)</em></span>
                        <ul className="figmaListProjects">
                            <li onClick={() => {window.location = 'https://www.figma.com/file/W8Mjj1w7MEOV7R7S4OPVNN/FreshBakery?t=jtpAl6PL0PSCPSEa-6'}}>FreshBakery</li>
                            <li onClick={() => {window.location = 'https://www.figma.com/file/YIx0ziSRmtcdOGI2pXLGls/PasswordManager?t=jtpAl6PL0PSCPSEa-6'}}>PasswordManager</li>
                            <li onClick={() => {window.location = 'https://www.figma.com/file/UF2WHFWJGs7p4NQBovIfnF/SpaceX?t=jtpAl6PL0PSCPSEa-6'}}>SpaceX</li>
                            <li onClick={() => {window.location = 'https://www.figma.com/file/0SMIFh0ruD8sXtSpN8gP9T/RoomsDesign?t=jtpAl6PL0PSCPSEa-6'}}>RoomDesign</li>
                            <li onClick={() => {window.location = 'https://www.figma.com/file/iodvXqdkR3FN1VF5UtL1Wg/Explore?t=jtpAl6PL0PSCPSEa-6'}}>Explore</li>
                            <li onClick={() => {window.location = 'https://www.figma.com/file/RhiOXtfujdpqgt5wkMYEkN/Jewelery?t=jtpAl6PL0PSCPSEa-6'}}>Jewelery</li>
                            <li onClick={() => {window.location = 'https://www.figma.com/file/3aCuN4QxZWvBKNKovEpqrB/Untitled?node-id=1%3A2&t=LLiHHrPXqyuEbY9R-0'}}>Coworking</li>
                        </ul>
                </div>
            </div>    
        </div>      
    );
}