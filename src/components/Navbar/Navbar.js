import './style/Navbar.scss';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';
import logo from '../../assets/img/logo.svg';
import 'animate.css';

const Navbar = () => {
  return (
    <div>
      <nav id='side-nav'>
        <div className='side-nav-links'>
          <ul>
            <li>
              <div className='logo'>
                <img src={logo} alt='' />
              </div>
              <p className='strike-through'>Pastiche</p>
              <p>Portfolio</p>
              <h5>Web Developer</h5>
            </li>

            <li>
              <a href='#about-section'>About</a>
            </li>
            <li>
              <a href='#skills-section'>Skills</a>
            </li>
            <li>
              <a href='#work-section'>Work</a>
            </li>
            <li>
              <a href='#contact-section'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='side-nav-contact'>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/gia-zveriachvili-2881bb216/'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/gzveriachvili'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href='https://dev.to/gzveriachvili'
                target='_blank'
                rel='noreferrer'
              >
                <FaDev />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
