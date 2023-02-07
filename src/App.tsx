import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { SwipeEventListener } from 'swipe-event-listener';
import Pages from './components/Pages';
import { Provider, useDispatch } from 'react-redux';
import Slide from './components/Slide';
import { setMaxPageIdx, setPageIdx } from './store/slice';
import Scroll from './components/Scroll';
const Container = styled.div`
  /* height: 100vh; */
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
  background-color: #ebebeb;
`;

const BodySection = styled.div`
  flex: 1;
  padding-top: 100px;
  overflow-x: hidden;
`;
const Page = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;

function App() {
  const target = useRef<any>();
  const dispatch = useDispatch();

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

  const [slideData, setSlideData] = useState<
    {
      imgUrl: string;
      title: string;
      time: string;
      idx: number;
      url: string;
    }[]
  >([
    {
      imgUrl:
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1673244803%2Fkh6olrfdpw20givwdc8h.jpg',
      title: 'Mancity VS Manutd',
      time: '2022.08.10(kst)',
      idx: 0,
      url: 'https://www.naver.com',
    },
    {
      imgUrl:
        'https://www.thesun.co.uk/wp-content/uploads/2022/10/Offplat-ManUtd-Chelsea.jpg?strip=all&quality=100&w=1920&h=1080&crop=1',
      title: 'chelsea VS Manutd',
      time: '2022.08.10(kst)',
      idx: 1,
      url: 'https://www.naver.com',
    },
    {
      imgUrl:
        'https://icdn.strettynews.com/wp-content/uploads/2022/11/Manchester-United-vs-Barcelona.jpg',
      title: 'barcelona VS Manutd',
      time: '2022.08.10(kst)',
      idx: 2,
      url: 'https://www.naver.com',
    },
    {
      imgUrl:
        'https://icdn.strettynews.com/wp-content/uploads/2022/11/Manchester-United-vs-Barcelona.jpg',
      title: 'barcelona VS Manutd',
      time: '2022.08.10(kst)',
      idx: 3,
      url: 'https://www.naver.com',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1673244803%2Fkh6olrfdpw20givwdc8h.jpg',
      title: 'Mancity VS Manutd',
      time: '2022.08.10(kst)',
      idx: 4,
      url: 'https://www.naver.com',
    },
  ]);

  const [pages, setPages] = useState<any>([
    {
      idx: 0,
      component: (
        <Page>
          <Slide data={slideData}></Slide>
          <Scroll></Scroll>
        </Page>
      ),
    },
    { idx: 1, component: <Page>이벤트</Page> },
    { idx: 2, component: <Page>뉴스</Page> },
    { idx: 3, component: <Page>사회</Page> },
    { idx: 4, component: <Page>헬로</Page> },
    { idx: 5, component: <Page>이젠</Page> },
    { idx: 6, component: <Page>굿바이</Page> },
    { idx: 7, component: <Page>끝</Page> },
  ]);

  useEffect(() => {
    dispatch(setPageIdx(pages[0].idx));
    dispatch(setMaxPageIdx(pages[pages.length - 1].idx));
  }, [dispatch, pages]);

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
