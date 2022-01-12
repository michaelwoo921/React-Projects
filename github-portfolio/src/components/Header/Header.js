import React from 'react';
import logo from '../../logo.svg';
import Link from '../Link/Link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const Logo = styled.img`
height: 40vmin;
pointer-events: none;

`

const Header = () => (
  <HeaderWrapper>
<Logo src={logo} alt="logo" />

  <h1>Learn React</h1>

</HeaderWrapper>
);

export default Header;