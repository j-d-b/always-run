import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Box from '../components/Box.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const theme = {
  main: '#365AA1',
  light: '#52A4E6',
  accent: 'tomato'
};

const setGlobalStyles = () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    font-family: helvetica, sans-serif;
  }
`;

// heights in heightUnit
const heightUnit = 'px';
const navbarHeight = 60;
const footerHeight = 36;

// make the footer stick to the bottom (based on the heights of header and footer ✨)
const Wrapper = styled.div`
  min-height: calc(100vh - ${navbarHeight + footerHeight + heightUnit});
`;

// set styles, apply themeprovider, and setup nav, body, footer
export default function Template(props) {
  setGlobalStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar height={navbarHeight + heightUnit} />
        <Wrapper>
          <Box mt={navbarHeight + heightUnit}>
            {props.children()}
          </Box>
        </Wrapper>
        <Footer height={footerHeight + heightUnit} />
      </div>
    </ThemeProvider>
  );
}
