import React from "react";
import { ContactInformation } from './ContactInformation';

export const Profile = () => {
    return(
        <div className='informationContainer'>
           <ContactInformation/>
            <div className='description'>
                <h1>Professional Summary</h1>
                <p>
                    I have completed the React Native ProCamp by GlobalLogic and studied
                    front-end at SoftServe Academy. Additionally, I gained practical and
                    commercial experience as a front-end developer during my internship at a
                    German company's campus.<br/>

                    With a background in commercial projects, my technical skills encompass a
                    wide range of tools and technologies. <strong>I am proficient in HTML5, CSS,
                    Flexbox, SASS (SCSS), and have expertise in creating responsive and
                    multi-device layouts, I am well-versed in using BEM methodology to write
                    clean and maintainable code.</strong><br/><br/>

                    <strong>JavaScript (ES6+) is my go-to language, and I am experienced in working
                    with React (including React Hooks) and TypeScript to build dynamic and
                    interactive user interfaces, I am skilled in utilizing styled components for
                    modular and reusable styling.</strong><br/><br/>

                    <strong>For handling API requests, I am familiar with Axios.</strong><br/>
                    In terms of design collaboration, I am proficient in <strong>Figma</strong>, allowing me to
                    effectively work with designers to implement pixel-perfect UIs, on the server
                    side, <strong>I have experience with Node.js and Express.js, leveraging them to
                    build robust and scalable web applications.</strong><br/>
                    Package management using yarn and npm, version control with Git and
                    GitHub, and project management tools like Trello and Jira are integral parts
                    of my development workflow, I am also competent in using Visual Studio
                    Code as my primary code editor.<br/><br/>

                    Moreover, I have a good understanding of <strong>Bootstrap v5 and its grid system
                    for rapid prototyping and building responsive web layouts, I have worked
                    with REST APIs, enabling seamless integration of data into applications.</strong><br/>
                    In addition to the skills mentioned earlier, I have developed expertise in
                    various areas of front-end development.<br/><strong>This includes proficiency in
                    developing components using the Context API and React Hooks, I am wellversed in popular state management libraries like Redux.
                    Furthermore, I have hands-on experience with front-end testing, including
                    both unit testing and functional testing.</strong><br/><br/>
                    When it comes to creating engaging user interfaces, I am familiar with the
                    principles of animating web elements using <strong>CSS animations and
                    JavaScript, such as CSS transitions and GSAP, I have a strong
                    understanding of designing and developing responsive websites,
                    employing techniques like media queries and flexbox.</strong><br/>
                    Optimizing the performance of front-end applications is another area of
                    expertise for me, <strong>I possess the ability to enhance performance by
                    optimizing image loading through lazy loading, implementing data caching
                    strategies, and minimizing latency through performance optimization
                    techniques.</strong><br/><br/>
                    Additionally, I have worked with web servers such as Apache and have
                    experience in configuring them to efficiently serve static files and handle
                    requests, I also have knowledge of front-end security principles, ensuring
                    protection against vulnerabilities like <strong>XSS (cross-site scripting) and CSRF
                    (cross-site request forgery) attacks, I am well-versed in utilizing HTTPS for
                    secure data transmission.</strong><br/>
                    Understanding the basic principles of <strong>SEO (Search Engine Optimization)</strong> is
                    another aspect of my skill set, I employ techniques to improve website
                    rankings in search engines, helping to increase visibility and organic traffic.<br/><br/>
                    Continuous learning is a core value for me, and I am always seeking
                    opportunities for personal and professional growth, I am passionate about
                    staying up-to-date with the latest trends and technologies in the front-end
                    development field, ensuring that I can deliver high-quality solutions. 😊
                </p>
            </div>
        </div> 
    );
}