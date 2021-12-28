import styled from 'styled-components';

import { COLORS } from '@theme';

import { Button } from 'components/Button';

import { CategoryType } from 'components/CategoriesNav';

interface Props {
  category: CategoryType
}

const CategoryContainer = styled.div`
  margin: 2rem 1.5rem;
  scroll-snap-align: center;
  cursor: pointer;
`;

const CategoryImg = styled.div<{src: string}>`
  width: 12.5rem;
  height: 9.375rem;
  background-image: url(${({src}) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Span = styled.span`
  padding: 1.5em 0;
  display: block;
  text-decoration: underline;
  text-align: center;
`;

export const CategoryButton = styled(Button)`
  margin: 1em 0.5em;
  padding: 0.5em 1.75em;
  border: none;
  text-decoration: underline;
  background: ${COLORS.SoftGrey};
`;

export const Category: React.FC<Props> = ({category}) => {
  return (
    <CategoryContainer>
      <CategoryImg src={category.imageUrl} />
      <Span>{category.name}</Span>
    </CategoryContainer>
  );
}

