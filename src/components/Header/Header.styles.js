import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-areas:
      "logoimg tmdblogoimg"
      "logoimg tmdblogoimg"
      "user tmdblogoimg"
      "user logbtn";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  grid-area: logoimg;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 460px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  grid-area: tmdblogoimg;

  @media screen and (max-width: 800px) {
    width: 140px;
  }
  @media screen and (max-width: 460px) {
    width: 80px;
  }
`;

export const LogBtn = styled.button`
  display: block;
  background: var(--lightGrey);
  width: 12%;
  min-width: 90px;
  height: 30px;
  border-radius: 15px;
  color: var(--darkGrey);
  border: 0;
  font-size: var(--fontMed);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  grid-area: logbtn;

  :hover {
    opacity: 0.8;
  }
`;

export const User = styled.span`
  grid-area: user;

  @media screen and (max-width: 800px) {
    font-size: var(--fontBig);
  }
  @media screen and (max-width: 460px) {
    font-size: var(--fontMed);
  }
`;
