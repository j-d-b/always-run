import React from 'react';
import styled from 'styled-components';

import Bio from '../components/Bio/Bio.jsx';

const PageBody = styled.div`
  padding-left: 2rem;
`;

export default function AboutPage() {
  return (
    <PageBody>
      <h1>About me, and this blog</h1>
      <Bio />
    </PageBody>
  );
}
