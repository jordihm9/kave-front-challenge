import styled from 'styled-components';

import { COLORS } from '@theme';

import { Heart } from '@icons/Heart';

interface Props {
  src: string,
  alt: string
}

const Thumbnail = styled.div`
  width: 20.8125rem;
  height: 16.6875rem;
  position: relative;
  background-color: ${COLORS.SoftGrey};

  & > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const Img = styled.img`
  margin: auto;
  display: block;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ProductThumbnail: React.FC<Props> = ({src, alt}) => {
  return (
    <Thumbnail>
      <Heart/>
      <Img src={src} alt={alt} />
    </Thumbnail>
  );
}
