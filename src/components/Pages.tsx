import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addPageIdx, initialStateProps, minusPageIdx } from '../store/slice';
import { useState } from 'react';
import Page from './Page';
const Container = styled.div`
  flex: 1;
  display: flex;
  /* background-color: #ebebeb; */

  background-color: transparent;
  height: 100%;
  z-index: 9999;
`;

const PagesWrapper = styled.ul<{ location: number }>`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flexbox;
  transition: all 250ms ease;
  transform: ${(props) => `translateX(calc((425px) * ${-1 * props.location}))`};
`;

function Pages({
  pages,
}: {
  pages: { idx: number; component: JSX.Element }[];
}) {
  const [startX, setStartX] = useState<number>(0);

  const { nowPageIdx } = useSelector((state: initialStateProps) => ({
    nowPageIdx: state.nowPageIdx,
  }));

  const dispatch = useDispatch();

  return (
    <Container
      onMouseDown={(e) => {
        setStartX(e.clientX);
      }}
      onMouseUp={(e) => {
        if (Math.abs(startX - e.clientX) > 25) {
          if (startX - e.clientX > 0) {
            dispatch(addPageIdx());
          } else {
            dispatch(minusPageIdx());
          }
        }
      }}
    >
      <PagesWrapper location={nowPageIdx}>
        {pages.map((page) => (
          <Page key={page.idx}>{page.component}</Page>
        ))}
      </PagesWrapper>
    </Container>
  );
}

export default Pages;
