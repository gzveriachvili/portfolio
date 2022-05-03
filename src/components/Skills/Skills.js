import Heading from '../Utils/Heading';
import TextDec from '../Utils/TextDecoration';
import './style/skills.scss';

const Skills = () => {
  return (
    <div id='skills-section'>
      <Heading title='Skills &amp; Tools' />
      <TextDec heading='skills' />
      <div className='skills-wrapper'>
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
            {/*<i class='devicon-redux-original'></i>*/}
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
      </div>
    </div>
  );
};

export default Skills;
