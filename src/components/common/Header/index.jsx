import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  padding: 20px;
  background-color: #1b1b1b;
  display: flex;
  justify-content: flex-end;
`;

const LinkNav = styled(Link)`
  font-size: 22px;
  text-decoration: none;
  color: yellow;
  padding: 0 10px;
`;

const Header = ({ children }) => (
  <>
    <Wrapper>
      <LinkNav to="/people">People</LinkNav>
      <LinkNav to="/planets">Planets</LinkNav>
    </Wrapper>
    {children}
  </>
);

export default Header;
