import styled from 'styled-components';

import { Category, CategoryButton } from 'components/Category';
import { SnapScrollX } from '@layout/SnapScroll';

export type CategoryType = {
  name: string,
  imageUrl: string
}

const categories: CategoryType[] = [
  {
    name: 'Estancias',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Estil',
    imageUrl: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Muebles',
    imageUrl: 'https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Decoración',
    imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'We Are Kave',
    imageUrl: 'https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Proyectos',
    imageUrl: 'https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80',
  }
];

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ButtonCategories: React.FC = () => {
  return (
    <Wrapper>
      {categories.map((category) => (
        <CategoryButton key={category.name}>{category.name}</CategoryButton>
      ))}
    </Wrapper>
  );
}

export const Categories: React.FC = () => {
  return (
    <SnapScrollX>
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </SnapScrollX>
  );
}

