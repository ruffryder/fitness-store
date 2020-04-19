import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  @media screen and (min-width: 500px) {
    padding: 20px 15px;
  }
  @media screen and (min-width: 920px) {
    padding: 25px 40px;
  }
`;

export default HomePageContainer;
