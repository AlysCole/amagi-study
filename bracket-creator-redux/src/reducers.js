import { SET_PARTICIPANTS, SET_ROUNDS } from "./actions";

const initialState = {
  participants: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  rounds: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants
      }
    case SET_ROUNDS:
      return {
        ...state,
        rounds: action.rounds
      }
    default:
      return state;
  }
}
