import Heading from '../Utils/Heading';
import TextDec from '../Utils/TextDecoration';
import TagCloudAnim from '../Utils/TagCloud';
import './style/about.scss';

const About = () => {
  return (
    <div id='about-section'>
      <Heading title='About Me' />
      <TextDec heading='about' />
      <div className='about-wrapper'>
        <div className='left-about'>
          <p>
            At first it started as a little hobby; If there were any fun student
            projects at school that needed a logo, poster or a very basic
            website I was the guy who did it. After freelancing for a while,
            I've decided that I wanted to build my career within ths field, and
            I decided to get an university education in Denmark, where I learned
            about more in-depth programming, UI/UX design principles, 3D
            modelling, and most importantly: how to work on a project as a team.
          </p>

          <p>
            I'm heavily invested in the life-long learning mentality. Currently
            I'm learning about the more advanced React concepts such as custom
            hooks and Redux. My strongest point is the creation of aesthetic and
            fun to use layouts, but I plan to start learning NodeJS, Express and
            Mongoose in the near future.
          </p>
        </div>
        <div className='right-about'>
          <TagCloudAnim />
        </div>
      </div>
    </div>
  );
};

export default About;
