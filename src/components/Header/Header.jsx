import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Title from './Title';
import { LeftContent, RightContent } from './Navbar';

const TitleBar = styled.div`
  width: 100%;
  height: ${props => props.height};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.bgColor};
  color: #fff;

  @media (min-width: ${props => props.theme.navBreakpoint}) {
    display: none;
  }
`;

const NavbarBar = styled.div`
  z-index: 2;
  position: fixed;
  top: ${
    props => {
      let offset = props.titleHeight - window.scrollY;
      console.log(window.scrollY);
      return offset > 0 ? offset : 0;
    }
  };

  width: 100%;
  height: ${props => props.height};

  display: flex;
  justify-content: space-between;

  background-color: ${props => props.bgColor};
  color: #fff;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderContainer>
        <TitleBar height={this.props.titleHeight} bgColor='tomato'>
          <Title title='Always Run' subtitle='A running shoe blog' />
        </TitleBar>
        <NavbarBar height={this.props.navbarHeight} titleHeight={this.props.titleHeight} bgColor={this.props.bgColor} >
          <LeftContent />
          <RightContent />
        </NavbarBar>
      </HeaderContainer>
    );
  }
}
