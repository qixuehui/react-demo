//store方法

let methods = {
  Getquestions: function (state, action) {
    // content传的content
    // console.log(state);
    state.topiclist = action.content;
    return state;
  },
  add: function (state, action) {
    state.num++;
    return state;
  },
};

export default methods;
