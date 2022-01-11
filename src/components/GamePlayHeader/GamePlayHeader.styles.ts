import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

import { secondaryFont } from "../../styles/common.styles";

const GamePlayHeaderContainer = styled.article`
  grid-area: question_timebar;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${secondaryFont};
  color: ${({ theme }) => theme.tertiary};

  margin-bottom: 1rem;

  padding: 0.5rem;

  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const QuitButton = styled.button`
  display: flex;
  align-items: center;

  height: fit-content;
  width: fit-content;

  background-color: transparent;

  font-size: 1rem;
  color: ${({ theme }) => theme.tertiary};

  margin: 0;

  padding: 0.5rem;

  border: 0;

  cursor: pointer;
`;

const TimeLabel = styled.span`
  display: block;
  padding: 0.5rem;
`;

const ScoreIcon = styled(FaCheck)`
  font-size: 1rem;
`;

const TimeIcon = styled(MdWatchLater)`
  font-size: 1rem;
`;

const QuitIcon = styled(AiFillCloseCircle)`
  font-size: 1rem;
`;

const CommonWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const ScoreLabel = styled.span`
  display: block;
  padding: 0.5rem;
`;

const NumberLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.tertiary};
  padding: 0 2rem;
`;

export {
  GamePlayHeaderContainer,
  QuitButton,
  TimeLabel,
  ScoreIcon,
  TimeIcon,
  QuitIcon,
  CommonWrapper,
  ScoreLabel,
  NumberLabel,
};
