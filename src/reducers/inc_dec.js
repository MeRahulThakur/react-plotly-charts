import { ACTIONS } from "../actions/inc_dec_action";

const initialState = {count:0};

export default function incDecReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count+1}
    case ACTIONS.DECREMENT:
      return {count: state.count-1}
    default:
      return state;
  }
}