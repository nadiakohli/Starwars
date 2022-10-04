import styled from 'styled-components';

export const Card = styled.div`
  padding: 8px 16px;
  background: #1b1b1b;
  margin: 16px 0;
  border-radius: 20px;
`;

export const H3 = styled.h3`
  margin: 10px 0;
  color: #ffff57;
`;

export const Paragraph = styled.p`
  margin: 6px 0;
  color: #999;
`;

export const Button = styled.button`
  margin: 20px 5px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  color: #ccc;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: #fff;
    border-color: #fff;
    background-color: #808080;
  }

  &.active {
    color: #fff;
    border-color: #fff;
    background-color: #808080;
  }

  &.disabled {
    cursor: inherit;
    background: transparent;
    border: 1px solid #ccc;
    color: #ccc;
  }
`;
