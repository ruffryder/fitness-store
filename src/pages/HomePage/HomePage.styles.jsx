import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  @media screen and (max-width: 1024px) {
    padding: 25px 40px;
  }
`;

export default HomePageContainer;
