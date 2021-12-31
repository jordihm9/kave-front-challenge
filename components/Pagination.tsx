import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  current: number,
  onChange: (page: number) => void,
  totalPages: number,
  offset: number
}

const PaginationContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
`;

const Page = styled.div<{current?: boolean}>`
  padding: 0.5em;
  ${({current}) => current && 'font-weight: 700'};
  font-size: 1.15rem;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
`;

export const Pagination: React.FC<Props> = ({current, onChange, totalPages, offset}) => {
  const [pagesRange, setPagesRange] = useState<number[]>([]);
  const [minNumOnEachSide] = useState(Math.floor(offset / 2));

  useEffect(() => {
    let start: number;
    let end: number;

    if (current > minNumOnEachSide) {
      start = current - minNumOnEachSide;

      if ((current + minNumOnEachSide) < totalPages) {
        end = current + minNumOnEachSide;
      } else {
        end = totalPages;
      }
    } else {
      start = 1;
      end = offset;
    }

    setPagesRange(range(start, end));
  }, [current]);

  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  }

  const decrement = () => {
    if (current === 1) return;
    onChange(current -1);
  }

  const increment = () => {
    if (current === totalPages) return;
    onChange(current +1);
  }

  const setPage = (p: number) => onChange(p);

  return (
    <PaginationContainer>
      <Page onClick={decrement}>&lt;</Page>
      { pagesRange.map(pageNumber => (
        <Page
          key={`page-${pageNumber}`}
          current={current === pageNumber}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </Page>
      ))}
      <Page onClick={increment}>&gt;</Page>
    </PaginationContainer>
  );
}

