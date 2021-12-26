import styled from 'styled-components';

import { COLORS } from '@theme';

import { H1 } from '@headings';
import { Heart } from '@icons/Heart';
import { SearchBar } from 'components/SearchBar';

const Nav = styled.nav`
  padding: 0.5em 1em;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  row-gap: 1rem;
  box-shadow: 0 0 2px ${COLORS.SoftGrey};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  & > h1 {
    padding-left: 0.5em;
  }
`;

const HeartContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
`;

export const Header: React.FC = () => {
  return (
    <Nav>
      <LogoContainer>
        <img src="/kave-home-logo.svg" alt="Kave Home Logo Icon" />
        <H1 color={COLORS.Primary}>Kave Home</H1>
      </LogoContainer>
      <HeartContainer>
        <Heart />
      </HeartContainer>
      <SearchBar />
    </Nav>
  );
}

