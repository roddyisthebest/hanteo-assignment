import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addPageIdx, initialStateProps, minusPageIdx } from '../store/slice';
import { SwipeEventListener } from 'swipe-event-listener';
import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

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

const Page = styled.li`
  width: 425px;
  height: 100%;
  background-color: transparent;
  list-style: none;
  display: flex;
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

  const target = useRef<any>(null);
  const handlers = useSwipeable({ onSwiped: () => console.log('swiped') });

  const dispatch = useDispatch();

  const refPassthrough = (el: any) => {
    // call useSwipeable ref prop with el
    handlers.ref(el);

    // set myRef el so you can access it yourself
    target.current = el;
  };
  //   useEffect(() => {
  //     const { swipeArea } = SwipeEventListener({
  //       swipeArea: target.current,
  //     });

  //     swipeArea.addEventListener('swipeLeft', () => {
  //       console.log('swipe left');
  //       dispatch(minusPageIdx());
  //     });

  //     swipeArea.addEventListener('swipeRight', () => {
  //       console.log('swipe right');
  //       dispatch(addPageIdx());
  //     });
  //   }, [dispatch]);
  return (
    <Container
      {...handlers}
      ref={refPassthrough}
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
