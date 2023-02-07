import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  position: relative;
  overflow: hidden;
  width: 425px;
  padding-top: 50px;
  background-color: white;
`;

const Contents = styled.ul<{ location: number }>`
  height: 300px;
  padding: 0;
  display: flex;
  transition: all 250ms ease;
  transform: ${(props) => `translateX(calc((425px) * ${-1 * props.location}))`};
  top: 0;
  position: absolute;
  height: 100%;
`;

const Dots = styled.div`
  height: 50px;
  background-color: transparent;
  margin-top: 240px;
  z-index: 100;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
`;

const Dot = styled.button<{ isItNow: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${(props) => (props.isItNow ? '#FFE742' : '#ECECEC')};
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

const ItemWrapper = styled.div`
  width: 100%;
  height: 330px;
  margin: 40px 20px 0 20px;
  color: white;
`;

const Item = styled.a`
  height: 250px;
  background-color: black;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0px 0px 15px #00000041;
  border: none;
  text-decoration: none;
`;

const ItemBkg = styled.div<{ url: string }>`
  flex: 3.5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const ItemInfo = styled.div`
  flex: 1;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  box-sizing: content-box;
`;

const ItemTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitleText = styled.span`
  color: black;
  font-size: 17px;
  font-weight: 600;
`;

const ItemTitleButton = styled.button`
  border-radius: 7px;
  border: 1px solid #0082d2;
  background-color: white;
  color: #0082d2;
  font-size: 10px;
  padding: 3px 5px;
`;
const ItemSubTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ItemSubTitleText = styled.span`
  color: #7e7e7e;
  font-size: 12px;
  font-weight: 600;
`;

function Slide({
  data,
}: {
  data: {
    url: string;
    imgUrl: string;
    title: string;
    time: string;
    idx: number;
  }[];
}) {
  const [location, setLocation] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = setInterval(() => {
      if (location === data.length - 1) {
        setLocation(0);
      } else {
        setLocation((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(unsubscribe);
  }, [data, location]);

  const onClickedDot = useCallback((index: number) => {
    setLocation(index);
  }, []);

  //   console.log(location);
  return (
    <Container>
      <Contents location={location}>
        {data.map((d) => (
          <Page key={d.idx}>
            <ItemWrapper>
              <Item href={d.url} target="_blank">
                <ItemBkg url={d.imgUrl}></ItemBkg>
                <ItemInfo>
                  <ItemTitle>
                    <ItemTitleText>{d.title}</ItemTitleText>
                    <ItemTitleButton>투표중</ItemTitleButton>
                  </ItemTitle>
                  <ItemSubTitle>
                    <ItemSubTitleText>{d.time}</ItemSubTitleText>
                  </ItemSubTitle>
                </ItemInfo>
              </Item>
            </ItemWrapper>
          </Page>
        ))}
      </Contents>
      <Dots>
        {data.map((d, index) => (
          <Dot
            isItNow={location === index}
            key={d.idx}
            onClick={() => onClickedDot(index)}
          ></Dot>
        ))}
      </Dots>
    </Container>
  );
}

export default Slide;
