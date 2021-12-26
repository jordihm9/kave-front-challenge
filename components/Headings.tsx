import styled from 'styled-components';

import { COLORS } from '@theme';

/**
 * @param color Default color: black.
 * @param center Sets the text align to center.
 *  Default: false (centered to the left).
 */
interface Props {
  color?: COLORS,
  center?: boolean
}

const setColor = ({color}: Props): string => (color) ? color : COLORS.Black;

const setCenterText = ({center}: Props): string => center ? 'center' : 'left';

export const H1 = styled.h1<Props>`
  color: ${setColor};
  text-align: ${setCenterText};
`;

export const H2 = styled.h2<Props>`
  color: ${setColor};
  text-align: ${setCenterText};
  font-family: 'Noto Serif', serif;
`;

