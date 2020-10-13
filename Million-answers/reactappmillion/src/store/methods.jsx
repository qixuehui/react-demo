//store方法

let methods = {
  Getquestions: function (state, action) {
    let arr = [];
    arr.push(...action.content);
    // console.log(arr);
    // console.log(arr === action.content);
    // state.topiclist.concat(action.content);
    state.topiclist = [...state.topiclist, ...arr];
    return state;
  },
  add: function (state, action) {
    state.num++;
    return state;
  },
};

export default methods;
