import styled from 'styled-components';

type Size = 'S' | 'M' | 'L';

interface Props {
  price: string | number,
  size: Size
}

const setFontSize = (size: Size) => {
  switch (size) {
    case 'S':
      return '1.15rem';
    case 'M':
      return '1.35rem';
    case 'L':
      return '1.75rem';
  }
}

const StyledPrice = styled.span<{size: Size}>`
  display: inline-block;
  font-size: ${({size}) => setFontSize(size)};
`;

export const Price: React.FC<Props> = ({price, size}) => {
  return <StyledPrice size={size}>{price}&euro;</StyledPrice>
}

