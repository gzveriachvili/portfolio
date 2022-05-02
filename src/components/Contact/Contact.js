import Heading from '../Utils/Heading';
import TextDec from '../Utils/TextDecoration';
import './style/contact.scss';

import { AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Contact = () => {
  return (
    <div id='contact-section'>
      <Heading title='Contact Me' />
      <TextDec heading='contact' />
      <p>
        I'm currently looking for a role as a front-end web developer. Whether
        you have a question, an offer or just want to chat, send me an email or
        a message and I will get back to you!
      </p>
      <div className='contact-links'>
        <div className='contact-mail'>
          <AiFillMail />
          <a href='mailto:g.zveriachvili@gmail.com'>gzveriachvili@gmail.com</a>
        </div>
        <div className='contact-linkedin'>
          <FaLinkedinIn />
          <a
            href='https://www.linkedin.com/in/gia-zveriachvili-2881bb216/'
            target='_blank'
            rel='noreferrer'
          >
            Linkedin
          </a>
        </div>
        <div className='contact-github'>
          <AiFillGithub />
          <a
            href='https://github.com/gzveriachvili'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
