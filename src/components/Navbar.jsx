import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import githubIcon from './github-mark.svg'

const NavContainer = styled.div`
  width: 100%;
  color: #fff;
  height: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.darkBlue};
`;

const NavPart = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: ${props => props.right ? 'end' : 'start'};
`;

const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  padding: 0 1rem;

  &:hover {
    background-color: ${props => props.theme.lightBlue};
  }
`;

const NavTitle = styled.div`
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const NavIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 1rem;

  img {
    width: 1.5rem;
  }
`;

const NavSubtitle = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  font-style: italic;
`;

function Navbar() {
  return (
    <NavContainer>
      <NavPart>
        <NavTitle>
          <div>Always Run</div>
          <NavSubtitle>A running shoe blog</NavSubtitle>
        </NavTitle>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/shoe-reviews'}>Shoe Reviews</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </NavPart>
      <NavPart right>
        <NavIcon>
          <a href="https://github.com/j-d-b">
          <img src={githubIcon} />
          </a>
        </NavIcon>
      </NavPart>
    </NavContainer>
  );
}

export default Navbar;
