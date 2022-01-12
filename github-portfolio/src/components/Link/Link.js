import React from 'react';
import styled from 'styled-components';

const InnerLink = styled.a`
color: #61dafb;
`

const Link = () => (
  <InnerLink    href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer" >

  </InnerLink>
 
);

export default Link;