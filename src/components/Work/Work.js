import Heading from '../Utils/Heading';
import TextDec from '../Utils/TextDecoration';
import ProjectItem from './utils/ProjectItem';
import './style/work.scss';
import kalibre from './assets/img/kalibre.gif';
import cvapp from './assets/img/cvapp.gif';
import memorycard from './assets/img/memorycard.gif';
import weatherapp from './assets/img/weatherapp.gif';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Work = () => {
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
    <div ref={ref} id='work-section'>
      <Heading title='My Projects' />
      <TextDec heading='projects' />
      <motion.div className='projects' animate={animation}>
        <ProjectItem
          gif={kalibre}
          title='Kalibre Watches'
          desc='A fictional online store featuring a fully functional shopping cart. It allows the users to browse the catalogue, and also the addition and removal of shop items from the cart.'
          builtwith='This project was built by the use of functional components, Hooks, React Router and Framer Motion.'
          live='https://gzveriachvili.github.io/shopping-cart/#/'
          github='https://github.com/gzveriachvili/shopping-cart'
        />
        <ProjectItem
          gif={cvapp}
          title='CV Application'
          desc='A resume creator application. It features an editable section which allows the users to input their data, and a stylized preview section.'
          builtwith='The project was created by the use of React, props and class components.'
          live='https://gzveriachvili.github.io/cv-application/'
          github='https://github.com/gzveriachvili/cv-application'
        />
        <ProjectItem
          gif={memorycard}
          title='Memory Card'
          desc='A simple React-based game created in React to test your memory skills. Clicking on the same card twice ends the game.'
          builtwith='This project was built with the use of React hooks, props, lists and keys, and the React Icons library.'
          live='https://gzveriachvili.github.io/memory-card-game/'
          github='https://github.com/gzveriachvili/memory-card-game'
        />
        <ProjectItem
          gif={weatherapp}
          title='Weather App'
          desc='A weather application which allows the users to search for a city or commune then displays the current temperature, humidity, and a gif which depicts the current weather condition.'
          builtwith='The weather app was built with the use of asynchronous JavaScript, fetch API, the OpenWeatherMap API, and Webpack'
          live='https://gzveriachvili.github.io/weather-app/#'
          github='https://github.com/gzveriachvili/weather-app'
        />
      </motion.div>
    </div>
  );
};

export default Work;
