import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const FooterBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.light};
  height: ${props => props.height};
`;

export default function Footer(props) {
  return (
    <FooterBar height={props.height}>
      <Link to={'/'}>Return Home</Link>
    </FooterBar>
  );
}
