import styled from 'styled-components';

import { COLORS } from '@theme';

interface Props {
  primary?: boolean
}

//const setColor = (primary: boolean = false): string => primary ? COLORS.Primary : COLORS.White;
const setColor = ({primary}: Props): string => primary ? COLORS.Primary : COLORS.White;

export const H1 = styled.h1<Props>`
  color: ${setColor};
`;
//color: ${({primary}) => setColor(primary)};

