import styled from 'styled-components';

import { COLORS } from '@theme';

import { H1 } from '@headings';

const Container = styled.div`
  padding: 1.5em 1em;
  height: 80vh;
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

