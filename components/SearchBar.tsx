import styled from 'styled-components';

import { theme } from '@theme';

const StyledForm = styled.form`
  grid-column: 1 / 3;
`;

const InputContainer = styled.div`
  padding: 0.5em 1em;
  display: flex;
  border-radius: 0.5rem;
  background: ${theme.colors.softGrey};
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
        <img src='magnifier.svg' alt='magnifier icon' />
        <Input type='text' placeholder='Buscar productos' />
      </InputContainer>
    </StyledForm>
  );
}

