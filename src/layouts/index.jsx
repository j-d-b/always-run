import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Navbar from '../components/Navbar.jsx';

const theme = {
  darkBlue: '#365AA1',
  lightBlue: '#52A4E6'
};

const setGlobalStyles = () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    font-family: helvetica, sans-serif;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.lightBlue};
  height: 20px;
`;

function Template(props) {
  setGlobalStyles();

  const header = <Navbar />;
  const footer = <Footer><Link to={'/'}>Return Home</Link></Footer>;
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <div>
        {header}
        {children()}
        {footer}
      </div>
    </ThemeProvider>
  );
}

export default Template;
