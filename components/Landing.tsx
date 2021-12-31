import styled from 'styled-components';

import { COLORS } from '@theme';
import { mediaQuery } from 'styles/utils';

import { H1 } from '@headings';

const Container = styled.div`
  min-height: 85vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  background-image: url(minh-pham-OtXADkUh3-I-unsplash.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
  }

  & > h1 {
    padding: 0 1em 1em 0.5em;
    font-family: 'Poppins', sans-serif;

    ${mediaQuery('MD')`
      font-size: 2.5rem;
      padding-bottom: 1.5em;
      padding-left: 1.5em;
    `}
 
    ${mediaQuery('LG')`
      font-size: 3rem;
      padding-bottom: 2em;
      padding-left: 2em;
    `}

    ${mediaQuery('XL')`
      font-size: 3.5rem;
    `}
 }
`;

export const Landing: React.FC = () => {
  return (
    <Container>
      <H1 color={COLORS.White}>
        Cuando la realidad supera la ficción.
        <br/>
        Trucos para estar en casa.
      </H1>
    </Container>
  );

}

