import { GamePlayTypes, QuestionType } from "../../common";
import { ACTIONS } from "../../helpers";
import { ACTIONTYPE } from "./useGamePlay.hook";

function gameplayReducer(questions: QuestionType[]) {
  return (state: GamePlayTypes, action: ACTIONTYPE): GamePlayTypes => {
    switch (action.type) {
      case ACTIONS.NEXT_QUESTION:
        return {
          ...state,
          questionNumber:
            state.questionNumber < questions.length - 1
              ? state.questionNumber + 1
              : state.questionNumber,
        };
      case ACTIONS.PREV_QUESTION:
        return {
          ...state,
          questionNumber:
            state.questionNumber > 0
              ? state.questionNumber - 1
              : state.questionNumber,
        };
      case ACTIONS.REDIRECT_TO:
        const { to } = action.payload;
        return {
          ...state,
          questionNumber:
            to < 0 || to > questions.length - 1 ? state.questionNumber : to,
        };
      case ACTIONS.SUBMIT_ANSWER:
        const { questionNumber, userAnswer, isCorrect } = action.payload;
        return {
          ...state,
          points: isCorrect ? state.points + 1 : state.points,
          negativePoints: !isCorrect
            ? state.negativePoints + 1
            : state.negativePoints,
          attended: {
            ...state.attended,
            [questionNumber]: { isVisited: true, userAnswer },
          },
        };
      case ACTIONS.FINISH_ATTEMPT:
        return { ...state, isSubmitted: true };
      default:
        return state;
    }
  };
}

export { gameplayReducer };