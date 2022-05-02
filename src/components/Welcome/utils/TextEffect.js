import './style/texteffect.scss';

export const TextEffect = ({ text }) => {
  return (
    <div class='wrapper'>
      <div class='typing-effect'>{text}</div>
    </div>
  );
};
