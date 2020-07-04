import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px 20px;
`;

export const Content = styled.section`
  max-width: 400px;

  @media only screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageProfile = styled.img`
  height: 120px;
  width: 120px;
  border: 2px solid black;
  border-radius: 50%;
  padding: 5px;
`;

export const Name = styled.h3`
  margin-bottom: 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  line-height: 40px;
  height: 40px;

  @media only screen and (min-width: 768px) {
    margin: 60px 0 0 10px;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  line-height: 23px;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Icon = styled.img`
  margin-right: 10px;
`;
