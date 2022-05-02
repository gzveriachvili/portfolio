import Heading from '../Utils/Heading';
import TextDec from '../Utils/TextDecoration';
import './style/skills.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Skills = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div ref={ref} id='skills-section'>
      <Heading title='Skills &amp; Tools' />
      <TextDec heading='skills' />
      <motion.div className='skills-wrapper' animate={animation}>
        <div className='skills-languages-wrapper'>
          <h3>Languages</h3>
          <div className='skills-languages'>
            <i class='devicon-html5-plain-wordmark'></i>
            <i class='devicon-css3-plain-wordmark'></i>
            <i class='devicon-javascript-plain'></i>
            <i class='devicon-sass-original'></i>
            <i class='devicon-python-plain-wordmark'></i>
            <i class='devicon-mysql-plain'></i>
            <i class='devicon-php-plain'></i>
          </div>
        </div>

        <div className='skills-libraries-wrapper'>
          <h3>Libraries/Frameworks</h3>
          <div className='skills-libraries'>
            <i class='devicon-react-original-wordmark'></i>
            <i class='devicon-redux-original'></i>
            <i class='devicon-jest-plain'></i>
            <i class='devicon-bootstrap-plain-wordmark'></i>
            <i class='devicon-jquery-plain-wordmark'></i>
            <i class='devicon-opencv-plain-wordmark'></i>
            <i class='devicon-materialui-plain'></i>
          </div>
        </div>

        <div className='skills-misc-wrapper'>
          <h3>Miscellaneous</h3>
          <div className='skills-misc'>
            <i class='devicon-git-plain'></i>
            <i class='devicon-webpack-plain'></i>
            <i class='devicon-npm-original-wordmark'></i>
            <i class='devicon-babel-plain'></i>
            <i class='devicon-github-original'></i>
            <i class='devicon-illustrator-plain'></i>
            <i class='devicon-maya-plain'></i>
            <i class='devicon-unity-original'></i>
            <i class='devicon-arduino-plain'></i>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
