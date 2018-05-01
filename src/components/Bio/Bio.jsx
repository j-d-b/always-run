import React from 'react';
import ReactMarkdown from 'react-markdown';

import bioMd from 'raw-loader!./bio.md';
import profilePic from './pentathlon-run-sqr.jpg';

export default function Bio() {
  return (
    <div>
      <img src={profilePic} alt={'Jacob Brady'} width='200px' />
      <ReactMarkdown source={bioMd} />
    </div>
  );
}
