import React from 'react'

export const ContactInformation = () => {
  return (
    <div className='aboutMe'>
        <div title='Oleksii Kucherenko' className='profilePhoto'/>
        <h3>Oleksii Kucherenko</h3>
        <p>Frontend developer at CyberBionic Systematics</p>
        <div className='quote'>
            <p>
                Hi, if you have come to my site, it means you are interested in me ;) <br/>
                Please take a few minutes of your time to read my resume.<br/> 
                I would be glad to receive feedback from you 😊 Thank you!
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
  );
}
