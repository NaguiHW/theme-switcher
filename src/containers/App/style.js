import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.backgroundColor};
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
