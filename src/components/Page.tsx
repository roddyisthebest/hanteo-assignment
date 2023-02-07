import styled from 'styled-components';

const Container = styled.div`
  width: 425px;
  height: 100%;
  background-color: transparent;
  list-style: none;
  display: flex;
`;
function Page({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default Page;
