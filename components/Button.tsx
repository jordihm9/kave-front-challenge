import styled from 'styled-components';

import { COLORS } from '@theme';

export enum Style {
  Dark = 'dark',
  Primary = 'primary'
}

interface Props {
  style?: Style
}

const setBackgroundColor = ({style}: Props): COLORS => {
  switch (style) {
    case Style.Dark:
      return COLORS.Black;
    case Style.Primary:
      return COLORS.Primary;
    default:
      return COLORS.White;
  }
}

const setBorderColor = ({style}: Props): COLORS => {
  switch (style) {
    case Style.Dark:
      return COLORS.Black;
    case Style.Primary:
      return COLORS.Primary;
    default:
      return COLORS.Black;
  }
}

const setColor = ({style}: Props): COLORS => {
  switch (style) {
    case Style.Dark:
      return COLORS.White;
    case Style.Primary:
      return COLORS.White;
    default:
      return COLORS.Black;
  }
}

export const Button = styled.button<Props>`
  margin: 1em 0.5em;
  padding: 0.5em 1.75em;
  outline: none;
  border: 0.0625em solid ${setBorderColor};
  letter-spacing: 0.025em;
  color: ${setColor};
  background: ${setBackgroundColor};
  cursor: pointer;
`;

