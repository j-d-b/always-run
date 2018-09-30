import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Box from '../components/Box.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer.jsx';

const theme = {
  main: '#365AA1',
  light: '#52A4E6',
  accent: 'tomato',
  navBreakpoint: '620px'
};

const setGlobalStyles = () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    font-family: helvetica, sans-serif;
  }
`;

// fixed header heights
const navbarHeight = '60px';
const navbarHeightRaw = 60;

const titleHeight = '80px'; // on smaller displays, a title appears above the navbar
const titleHeightRaw = 80;

const footerHeight = '36px';
const footerHeightRaw = 36;

// make the footer stick to the bottom (based on the heights of header and footer ✨)
const Wrapper = styled.div`
  min-height: calc(100vh - ${titleHeightRaw + navbarHeightRaw + footerHeightRaw + 'px'});
  margin-top: ${titleHeightRaw + navbarHeightRaw + 'px'};

  @media (min-width: ${theme.navBreakpoint}) {
    margin-top: 0;
    min-height: calc(100vh - ${navbarHeightRaw + footerHeightRaw + 'px'});
  };
`;

// set styles, apply themeprovider, and setup nav, body, footer
export default function Template(props) {
  setGlobalStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header titleHeight={titleHeight} navbarHeight={navbarHeight} bgColor={theme.main} />
        <Wrapper>
          <Box mt={navbarHeight}>
            {props.children()}
          </Box>
        </Wrapper>
        <Footer height={footerHeight} />
      </div>
    </ThemeProvider>
  );
}
