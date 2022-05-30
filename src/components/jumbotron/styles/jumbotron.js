import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Header = styled.h1`
font-size: 50px;
text-align: center;
font-weight: normal;
line-height: normal;
@media (max-width: 600px) {
  font-size: 30px;
  position: relative;
  margin-bottom: -30px;
}
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  margin-left: -10px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  margin-left: -10px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 10%;
  overflow: hidden;
`;

export const Container = styled.div`
  background-color: #f5f5f5;
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
