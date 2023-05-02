import React from "react";
import { ContactInformation } from "./ContactInformation";

export const Education = () => {
    return(
        <div className='informationContainer'>
           <ContactInformation/>
            <div className='description'>
                <h1>Education</h1>
                <p>
                    <strong>National University of Life and Environmental Sciences of Ukraine</strong><br/>

                    <strong>09/2019 - 06/2023</strong><br/>

                    <strong>Bachelor’s degree in progress Computer Science.</strong><br/>
                    Department of Information technology
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10176.536543240654!2d30.497778000000004!3d50.382698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8bf73400839%3A0xcdd11bbe7d784783!2z0YPQuy4g0JPQtdGA0L7QtdCyINCe0LHQvtGA0L7QvdGLLCAxNSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1673130495556!5m2!1sru!2sua" width="300" height="230" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="NULES"></iframe>
            </div>    

        </div>
    );
}