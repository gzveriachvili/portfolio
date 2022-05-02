import React from 'react';
import TagCloud from 'react3dtagcloud';

class TagCloudAnim extends React.Component {
  render() {
    const tagName = [
      'HTML5',
      'CSS3',
      'SASS',
      'ES6',
      'FetchAPI',
      'WebPack',
      'Jest',
      'Babel',
      'ReactJS',
      'Git',
      'FramerMotion',
      'Bootstrap',
      'jQuery',
      'AJAX',
    ];
    return (
      <div style={{ 'margin-top': '30px' }}>
        <TagCloud url='#' tagName={tagName} speed={1} radius={220}></TagCloud>
      </div>
    );
  }
}

export default TagCloudAnim;
