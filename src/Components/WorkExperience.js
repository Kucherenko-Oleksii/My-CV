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
                    <em><strong>(Front-end developer).</strong></em><br/>
                    During my professional journey, I actively contributed to the development of
                    innovative systems focused on enhancing the learning experience for
                    students in higher education institutions, collaborating with interdisciplinary
                    teams, I played a crucial role in analyzing requirements, designing intuitive
                    user interfaces, and implementing robust functionality, by harnessing my
                    front-end expertise, I delivered engaging and user-friendly interfaces that
                    streamlined navigation and elevated overall user satisfaction.
                    In addition to my involvement in educational systems, I immersed myself in
                    the realm of website optimization and the creation of cutting-edge websites.
                    With a keen eye for performance, I employed optimization techniques to
                    boost page loading speed, optimize resource utilization, and ensure
                    efficient code structure.<br/>

                    <strong>Stack: PostgreSQL , GraphQL, Node.js, Bootstrap, SASS(SCSS), BEM, JS(ES6+), Webpack, SEO.</strong><br/>

                    <em>(06/2020 - 06/2021)</em><br/><br/>

                    <strong>GlobalLogic:</strong><br/>
                    <em><strong>(Front-end developer).</strong></em><br/>

                    I have successfully developed web-oriented rating systems for product
                    evaluation, further showcasing my expertise in building robust and usercentric applications. By leveraging technologies such as MongoDB,
                    Node.js, SASS (SCSS), React, and React Native, I have delivered
                    seamless and interactive platforms for users to evaluate and review various
                    products.
                    With MongoDB, a flexible and scalable NoSQL database, I efficiently stored
                    and managed user ratings and reviews, ensuring optimal performance and
                    data integrity.
                    Moreover, I expanded my skill set by developing a mobile fitness
                    application using the React Native framework. This application
                    revolutionized the way users engage with fitness routines by providing a
                    seamless mobile experience. Users can effortlessly choose a set of
                    exercises, browse and select a personal trainer, schedule appointments for
                    consultations, and even order gym subscriptions, all within the intuitive and
                    user-friendly mobile application.<br/>
        
                    <strong>Stack: MongoDB, Express.js, Node.js, SASS (SCSS), React, Redux, React Native, SEO.</strong><br/>

                    <em>(08/2021 - 02/2022)</em><br/><br/>

                    <strong>CyberBionic Systematics:</strong><br/>
                    <em><strong>(Front-end developer & mentor).</strong></em><br/>
                    I specialize in developing simulation systems for students, providing them
                    with the opportunity to test their coding skills and gain practical experience
                    in real-world scenarios.<br/> By creating interactive coding tasks and exercises,
                    my aim is to foster a dynamic learning environment that encourages
                    students to enhance their programming abilities and problem-solving skills.<br/>
                    In addition to my work on simulation systems, I possess strong expertise in
                    website optimization techniques, employ industry best practices to optimize
                    website performance, focusing on improving loading times, minimizing file
                    sizes, and implementing effective caching strategies.<br/>
                    Moreover, teaching and sharing knowledge are my true passions. As a
                    frontend development instructor, I guide and mentor a group of students in
                    mastering the art of building modern web applications.<br/>
                    I design comprehensive curriculum modules covering a wide range of
                    topics, including HTML, CSS, JavaScript, and popular frontend
                    frameworks such as React and Angular. Through hands-on exercises, code
                    analysis, and collaborative projects, I empower my students to become
                    skilled frontend developers capable of delivering high-quality, innovative
                    solutions.<br/><br/>
                    Combining my technical expertise in simulation systems development,
                    website optimization, and frontend instruction, I offer a holistic skill set that
                    encompasses both practical application and educational guidance in the
                    field of frontend development.<br/>

                    <strong>Stack: ReactJS, HTML5&CSS3, BEM, SASS(SCSS), JS(ES2022), Redux, Git, Figma, Webpack, Docker, Node.js, Express.js.</strong><br/>
                    
                    <em>(08/2022 - now)</em>
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