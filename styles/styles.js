import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #000;
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export const Link = styled.a`
  color: #0070f3;
  text-decoration: none;
  &:hover, &:focus, &:active {
    text-decoration: underline;
  }
`;
