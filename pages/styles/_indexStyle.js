import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.darkslategray};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;
  font-size: 35px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

export const Loading = styled.div`
  height: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  margin-top: 20px;
`;

export const Progress = styled.div`
  height: 100%;
  width: 5%;
  background-color: ${({ theme }) => theme.colors.white};
`;
