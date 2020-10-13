//创建store
import { createStore } from "redux";
import methods from "./methods";
import state from "./state";
let data = state;
// 规则
const reducer = function (state = data, action) {
  if (action.type.indexOf("redux") === -1) {
    state = methods[action.type](state, action);
    return { ...state };
  } else {
    return state;
  }
};

//创建

let store = createStore(reducer);

export default store;
