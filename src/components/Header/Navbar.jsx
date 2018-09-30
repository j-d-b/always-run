import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Title from './Title';

// translate the left nav items to push the skewed title box off the page
const slideLeft = '20px';

// skewed and translated left to adjust for skew
const NavbarLeft = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  width: 100%;
  transform: skew(-20deg);

  @media (min-width: ${props => props.theme.navBreakpoint}) {
    justify-content: start;
    transform: skew(-20deg) translateX(${'-' + slideLeft});
  }
`;

// icons; not skewed
const NavbarRight = styled.div`
  height: 100%;
  display: none;
  padding-right: 20px;

  svg {
    fill: #fff;
  };

  @media (min-width: ${props => props.theme.navBreakpoint}) {
    display: flex;
    align-items: center;
    justify-content: end;
  };
`;

// scaleX(1.01) is a sort of HACK to remove space between title box and first nav link
const NavTitleContainer = styled.div`
  display: none;
  text-align: center;

  padding-left: 40px;
  padding-right: 20px;

  background-color: ${props => props.theme.accent};

  transform: scaleX(1.01);

  @media (min-width: ${props => props.theme.navBreakpoint}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// links in the navbar
const NavLink = styled(Link)`
  height: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #fff;
  background-color: ${
    props => {
      if (props.to) {
        const primaryPath = '/' + window.location.pathname.split('/')[1];
        if (props.to === primaryPath) {
          return props.theme.light;
        }
      }
    }
  };

  &:hover {
    background-color: ${props => props.theme.light};
  }
`;

// negate the navbar skew
const Unskew = styled.div`
  transform: skewX(20deg);
`

function NavItem({ to, text }) {
  return (
    <NavLink to={to}>
      <Unskew>{text}</Unskew>
    </NavLink>
  );
}

export function LeftContent() {
  return (
    <NavbarLeft>
      <NavTitleContainer>
        <Unskew>
          <Title title='Always Run' subtitle='A running shoe blog' />
        </Unskew>
      </NavTitleContainer>

      <NavItem to='/' text='Home' />

      <NavItem to='/reviews' text='Shoe Reviews' />

      <NavItem to='/about' text='About' />
    </NavbarLeft>
  );
};

// navbar link that is a fixed size icon
const IconLink = styled.a`
  padding-left: 16px;
  cursor: pointer;
`;

export function RightContent() {
  return (
    <NavbarRight>
      <IconLink href="https://www.strava.com/athletes/j-brady" target="_blank">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.2 512"><path d="M301.6 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220h-67.6zM151.4 0L0 292h89.2l62.2-116.1L213.1 292h88.5L151.4 0z"/></svg>
      </IconLink>

      <IconLink href="https://www.instagram.com/jdbradyy/">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
      </IconLink>

      <IconLink href="https://github.com/j-d-b/always-run" target="_blank">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77">
          <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"/>
        </svg>
      </IconLink>
    </NavbarRight>
  );
};
