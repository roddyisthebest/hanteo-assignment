import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { SwipeEventListener } from 'swipe-event-listener';
import Pages from './components/Pages';

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Contents = styled.div`
  width: 425px;
  height: 100%;
  display: flex;
`;

const BodySection = styled.div`
  flex: 1;
  background-color: white;
  padding-top: 100px;
  overflow-x: hidden;
`;
const Page = styled.div`
  color: blue;
`;

function App() {
  const target = useRef<any>();

  const [categorys, setCategorys] = useState<{ idx: number; name: string }[]>([
    { idx: 0, name: '차트' },
    { idx: 1, name: '이벤트' },
    { idx: 2, name: '뉴스' },
    { idx: 3, name: '사회' },
    { idx: 4, name: '헬로' },
    { idx: 5, name: '이젠' },
    { idx: 6, name: '굿바이' },
    { idx: 7, name: '끝' },
  ]);

  const [pages, setPages] = useState<any>([
    { idx: 0, component: <Page>차트</Page> },
    { idx: 1, component: <Page>이벤트</Page> },
    { idx: 2, component: <Page>뉴스</Page> },
    { idx: 3, component: <Page>사회</Page> },
    { idx: 4, component: <Page>헬로</Page> },
    { idx: 5, component: <Page>이젠</Page> },
    { idx: 6, component: <Page>굿바이</Page> },
    { idx: 7, component: <Page>끝</Page> },
  ]);

  useEffect(() => {
    const { swipeArea } = SwipeEventListener({
      swipeArea: target.current,
    });

    swipeArea.addEventListener('swipeLeft', () => {
      console.log('swipe left');
    });

    swipeArea.addEventListener('swipeRight', () => {
      console.log('swipe right');
    });
  }, []);

  return (
    <Container className="App">
      <Contents ref={target}>
        <Header categorys={categorys}></Header>
        <BodySection>
          <Pages pages={pages}></Pages>
        </BodySection>
      </Contents>
    </Container>
  );
}

export default App;
