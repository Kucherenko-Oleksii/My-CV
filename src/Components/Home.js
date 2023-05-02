import React from 'react';
import { ContactInformation } from './ContactInformation';

export const Home = () => {
  return (
      <div className='informationContainer'>
        <ContactInformation/>
          <div className='description'>
              <p>
                Hi! You have landed on my resume.<br/> The idea behind creating this electronic resume is to move away from the banal approach of submitting resumes in PDF, DOC, DOCX, and other formats. So, let's get to know each other!<br/> By clicking on the navigation menu items located in the header of the page, you can find the information that interests you.<br/> If you have any questions, you can click on the Telegram icon (located in the contact information) and message me. 😉<br/>
                <strong>P.S. I'm looking forward to your message. 😉</strong>
              </p>
          </div>
      </div>
  )
}
