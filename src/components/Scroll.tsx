import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const Contents = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  padding: 20px;
  margin: 0;
  width: 100%;
  /* height: 100%; ; */
`;

const Item = styled.li`
  list-style: none;
  height: 80px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
`;

const ItemRank = styled.div`
  flex: 1;
  background-color: #3a2f2a;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemTitle = styled.div`
  flex: 3.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemRankText = styled.span`
  color: #ffe742;
  font-size: 25px;
  font-weight: 600;
`;

const ItemTitleText = styled.div`
  color: #3a2f2a;
  font-size: 18px;
  font-weight: 500;
`;
function Scroll() {
  useEffect(() => {
    document.addEventListener('scroll', infiniteScroll);
    return () => {
      document.addEventListener('scroll', infiniteScroll);
    };
  }, []);

  const [data, setData] = useState<string[]>([
    '새로운 컨텐츠 제목',
    '새로운 컨텐츠 제목',
    '새로운 컨텐츠 제목',
    '새로운 컨텐츠 제목',
  ]);

  const infiniteScroll = () => {
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;
    if (scrollTop >= scrollHeight - clientHeight) {
      setData((prev) => [
        ...prev,
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
        '새로운 컨텐츠 제목',
      ]);
    }
  };

  return (
    <Container>
      <Contents>
        {data.map((d, index) => (
          <Item key={index}>
            <ItemRank>
              <ItemRankText>{index + 1}</ItemRankText>
            </ItemRank>
            <ItemTitle>
              <ItemTitleText>{d}</ItemTitleText>
            </ItemTitle>
          </Item>
        ))}
      </Contents>
    </Container>
  );
}

export default Scroll;
