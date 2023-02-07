import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { initialStateProps, setPageIdx } from '../store/slice';
const Container = styled.div`
  width: 425px;
  position: fixed;
  height: 100px;
  background-color: #ffe742;
  overflow-x: hidden;
  flex: 1;
  display: flex;
`;

const ItemWrapper = styled.ul<{ location: number }>`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flexbox;
  transition: all 250ms ease;
  transform: ${(props) =>
    `translateX(calc((425px / 3) * ${-1 * props.location}))`};
  flex: 1;
  display: flex;
`;

const Item = styled.li`
  width: calc(425px / 3);
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
function Header({ categorys }: { categorys: { idx: number; name: string }[] }) {
  const [location, setLocation] = useState<number>(0);
  const dispatch = useDispatch();

  const { nowPageIdx } = useSelector((state: initialStateProps) => ({
    nowPageIdx: state.nowPageIdx,
  }));

  const onClicked = (index: number) => {
    if (index !== 0 && index !== categorys.length - 1) {
      setLocation(index - 1);
    }

    dispatch(setPageIdx(index));
  };

  return (
    <Container>
      <ItemWrapper location={location}>
        {categorys.map((category, index) => (
          <Item key={category.idx}>
            <Button
              onClick={() => onClicked(index)}
              isSelected={category.idx === nowPageIdx}
            >
              {category.name}
            </Button>
          </Item>
        ))}
      </ItemWrapper>
    </Container>
  );
}

export default Header;
