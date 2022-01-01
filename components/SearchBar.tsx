import styled from 'styled-components';

import { COLORS } from '@theme';
import { mediaQuery } from 'styles/utils';

import Image from 'next/image';

import magnifierIcon from 'public/magnifier.svg';

const StyledForm = styled.form`
  grid-column: 1 / 3;

  ${mediaQuery('LG')`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  `}
`;

const InputContainer = styled.div`
  padding: 0.5em 1em;
  display: flex;
  border-radius: 0.5rem;
  background: ${COLORS.SoftGrey};
`;

const Input = styled.input`
  margin-left: 1em;
  border: none;
  outline: none;
  background: inherit;
`;

export const SearchBar: React.FC = () => {
  return (
    <StyledForm>
      <InputContainer>
        <Image
          src={magnifierIcon}
          alt='magnifier icon'
        />
        <Input type='text' placeholder='Buscar productos' />
      </InputContainer>
    </StyledForm>
  );
}

