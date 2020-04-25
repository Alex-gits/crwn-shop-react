import React from 'react';

import './contact.styles.scss';

const ContactPage = () => (
  <div className='contact'>
    <h1 className='contact-title'>Hello, my name is Alexey and this is my pet-project.</h1>
    <div className="contact-content">
    <p>It was build with:</p>
    <ul className='contact-list'>
      <li className='contact-feature'>
        <a href="https://ru.reactjs.org/" target="_blank" rel="noopener noreferrer" className='contact-link'>
          React.js
        </a>
      </li>
      <li className='contact-feature'>
        <a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer" className='contact-link'>
          Redux Saga
        </a>
      </li>
      <li className='contact-feature'>
        <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noopener noreferrer" className='contact-link'>
          Firestore 
        </a> (for authentication and backend features)
      </li>
      <li className='contact-feature'>Some other small libraries (reselect, persist, etc)</li>
    </ul>

    <div>
      <p className='contact-info'>You can check my github and linkedin accounts here:</p>
      <ul>
        <li>
          <a  href="https://github.com/Alex-gits" target="_blank" rel="noopener noreferrer" className='contact-link'>
            Gitgub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexey-nebesiuk-164658184/" target="_blank" rel="noopener noreferrer" className='contact-link'>
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
    </div>
  </div>
);

export default ContactPage;