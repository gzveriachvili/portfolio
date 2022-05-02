import './projectitem.scss';
import { AiFillEye } from 'react-icons/ai';
import { DiGithubAlt } from 'react-icons/di';

const ProjectItem = ({ gif, title, desc, builtwith, live, github }) => {
  return (
    <div className='project-item'>
      <img src={gif} alt={title} />
      <h4>{title}</h4>
      <div className='desc-box'>
        <div className='description'>
          <p>{desc}</p>
          <p>{builtwith}</p>
        </div>
        <div className='project-links'>
          <div className='visit-link'>
            <AiFillEye />
            <a href={live} target='_blank' rel='noreferrer'>
              Live View
            </a>
          </div>
          <div className='visit-link'>
            <DiGithubAlt />
            <a href={github} target='_blank' rel='noreferrer'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
