import styled from "styled-components";
import { primaryFont } from "../../styles/common.styles";

const LevelCard = styled.article`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  font-family: ${primaryFont};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1rem;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 1rem;
  margin: 1rem;

  @media (min-width: 568px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;

const CardImg = styled.img`
  width: 100%;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem;
  width: fit-content;
  border-radius: 40%;
  border: 3px solid ${({ theme }) => theme.tertiary};
  background-color: transparent;
  margin: 0.5rem 0;
  cursor: pointer;
  color: ${({ theme }) => theme.tertiary};

  @media (min-width: 568px) {
    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const LevelLabel = styled.p`
  font-size: 0.8rem;
`;

const LevelName = styled.p`
  margin: 0;
  font-weight: 800;
  font-size: 1.5rem;
`;

export {
  LevelCard,
  PlayButton,
  LevelLabel,
  LevelName,
  ContentWrapper,
  CardImg,
};
