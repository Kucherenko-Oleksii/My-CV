import React from 'react';

export const Home = () => {

  return (
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
              <p>
                Hello!)
                You have landed on my resume, the idea of creating this electronic resume was to stop the banal approach of submitting resumes in pdf, doc, docx, etc.<br/>

                So let's get acquainted!)<br/>
                By you clicked through the navigation menu, which is located in the header of the page, you can get the information you are interested in.<br/>

                If you have any questions, you can click on the telegram icon (located in the contact information) and write to me 😉<br/>

                <strong>P.S Looking forward to your message 😉</strong> 
              </p>
          </div>
      </div>
  )
}
