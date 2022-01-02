import styled from 'styled-components';

type Size = 'S' | 'M' | 'L';

interface Props {
  price: number,
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
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  font-size: ${({size}) => setFontSize(size)};
`;

const CurrencySign = styled.span<{size: Size}>`
  font-size: ${({size}) => size === 'L' ? '0.70em' : 'inherit'};
`;

export const Price: React.FC<Props> = ({price, size}) => {
  const format = (): string => {
    const locale = 'ca-ES';
    const options: Intl.NumberFormatOptions = {
      style: 'decimal',
      //minimumFractionDigits: 2
    };

    return new Intl.NumberFormat(locale, options).format(price);
  }

  return (
    <StyledPrice size={size}>
      <span>{format()}</span>
      <CurrencySign size={size}>&euro;</CurrencySign>
    </StyledPrice>
  )
};

