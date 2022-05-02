import './heading.scss';

const Heading = ({ title }) => {
  return (
    <div className='heading-title'>
      <h2>{title}</h2>
      <div className='heading-decoration'></div>
    </div>
  );
};

export default Heading;
