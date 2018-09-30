import React from 'react';
import styled from 'styled-components';

const NavTitleText = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const NavSubtitleText = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  font-style: italic;
`;

export default function Title({ title, subtitle }) {
  return (
    <div>
      <NavTitleText>{title}</NavTitleText>
      <NavSubtitleText>{subtitle}</NavSubtitleText>
    </div>
  );
}
