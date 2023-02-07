import { Component, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { initialStateProps } from '../store/slice';
const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: white;
  height: 100%;
`;

const PagesWrapper = styled.ul<{ location: number }>`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flexbox;
  transition: all 250ms ease;
  transform: ${(props) => `translateX(calc((425px) * ${-1 * props.location}))`};
`;

const Page = styled.li`
  width: 425px;
  height: 100%;
  background-color: transparent;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button<{ isSelected: boolean }>`
  background-color: transparent;
  border: none;
  color: #3a2f2a;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  opacity: ${(props) => (props.isSelected ? 1 : 0.45)};
`;
function Pages({
  pages,
}: {
  pages: { idx: number; component: JSX.Element }[];
}) {
  const [location, setLocation] = useState<number>(0);
  const dispatch = useDispatch();

  const { nowPageIdx } = useSelector((state: initialStateProps) => ({
    nowPageIdx: state.nowPageIdx,
  }));
  return (
    <Container>
      <PagesWrapper location={nowPageIdx}>
        {pages.map((page) => (
          <Page key={page.idx}>{page.component}</Page>
        ))}
      </PagesWrapper>
    </Container>
  );
}

export default Pages;
