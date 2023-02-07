import { useEffect, useRef, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Pages from './components/Pages';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './components/Slide';
import { initialStateProps, setMaxPageIdx, setPageIdx } from './store/slice';
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

const Dummy = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`;

function App() {
  const target = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const { nowPageIdx } = useSelector((state: initialStateProps) => ({
    nowPageIdx: state.nowPageIdx,
  }));
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
          <Slide data={slideData} time={5000}></Slide>
          <Scroll></Scroll>
        </Page>
      ),
      name: '차트',
    },
    {
      idx: 1,
      component: (
        <Page>
          <Dummy>이벤트</Dummy>
        </Page>
      ),
      name: '이벤트',
    },
    {
      idx: 2,
      component: (
        <Page>
          <Dummy>뉴스</Dummy>
        </Page>
      ),
      name: '뉴스',
    },
    {
      idx: 3,
      component: (
        <Page>
          <Dummy>사회</Dummy>
        </Page>
      ),
      name: '사회',
    },
    {
      idx: 4,
      component: (
        <Page>
          <Dummy>경제</Dummy>
        </Page>
      ),
      name: '경제',
    },
    {
      idx: 5,
      component: (
        <Page>
          <Dummy>스포츠</Dummy>
        </Page>
      ),
      name: '스포츠',
    },
    {
      idx: 6,
      component: (
        <Page>
          <Dummy>교양</Dummy>
        </Page>
      ),
      name: '교양',
    },
    {
      idx: 7,
      component: (
        <Page>
          <Dummy>끝</Dummy>
        </Page>
      ),
      name: '끝',
    },
    {
      idx: 8,
      component: (
        <Page>
          <Dummy>추가</Dummy>
        </Page>
      ),
      name: '추가',
    },
  ]);

  useEffect(() => {
    dispatch(setPageIdx(pages[0].idx));
    dispatch(setMaxPageIdx(pages[pages.length - 1].idx));
  }, [dispatch, pages]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nowPageIdx]);

  return (
    <Container className="App">
      <Contents ref={target}>
        <Header categorys={pages}></Header>
        <BodySection>
          <Pages pages={pages}></Pages>
        </BodySection>
      </Contents>
    </Container>
  );
}

export default App;
