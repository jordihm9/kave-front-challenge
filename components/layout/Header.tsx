import Link from 'next/link';
import styled from 'styled-components';

import Image from 'next/image';

import { COLORS } from '@theme';
import { mediaQuery } from 'styles/utils';

import { H1 } from '@headings';
import { Heart } from '@icons/Heart';
import { SearchBar } from 'components/SearchBar';

import kavehomeLogo from 'public/kave-home-logo.svg';

const Nav = styled.nav`
  padding: 1em;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  row-gap: 1rem;
  box-shadow: 0 0 2px ${COLORS.SoftGrey};

  ${mediaQuery('LG')`
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: none; 
  `}
`;

const LogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  
  & > h1 {
    font-family: 'Poppins', sans-serif;
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
      <Link href='/' passHref>
        <LogoContainer>
          <Image src={kavehomeLogo} alt="Kave Home Logo Icon" />
          <H1 color={COLORS.Primary}>Kave Home</H1>
        </LogoContainer>
      </Link>
      <HeartContainer>
        <Heart />
      </HeartContainer>
      <SearchBar />
    </Nav>
  );
}

