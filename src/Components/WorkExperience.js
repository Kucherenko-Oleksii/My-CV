import React from "react";

export const WorkExperience = () => {
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
                <h1>Work Experience</h1>
                <p>
                    Me experience in:<br/>
                    <strong>CAMPUS:</strong><br/>
                    I did an internship at the German CAMPUS training laboratory.<br/>
                    I was engaged in the optimization of existing web applications and the development of new web-oriented systems to improve the learning process of students.<br/>

                    Stack: ReactJS, Bootstrap, SASS(SCSS), BEM, JS(ES6+), Webpack.<br/>
                    <em>(06/2020 - 06/2021)</em><br/>
                    <strong>GlobalLogic:</strong><br/>
                    I was engaged in the development of web-oriented rating systems for product evaluation.<br/>
                    Stack: ReactJS, Node.js, SASS(SCSS)<br/>
                    Also developing a mobile fitness application using the React Native framework
                    The user could easily choose a set of exercises, choose a personal trainer.
                    Make an appointment for a consultation with a trainer, order a subscription to the gym.<br/>

                    <em>(08/2021 - 12/2021)</em><br/>

                    <strong>CyberBionic Systematics:</strong><br/>
                    Frontend developer and frontend development trainer at CyberBionic Systematics.
                    I develop landing and multi-page websites.<br/>
                    ReactJS, HTML5&CSS3, SASS(SCSS), Redux technology stack.<br/>
                    I am the author of the HTML5&CSS3 course.<br/>

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