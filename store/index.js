export const state = () => ({
  messages: [],
});

export const mutations = {
  addMessage(state, message) {
    state.messages.push(message);
  },
  clearMessages(state) {
    state.messages = [];
  },
};

export const actions = {
  sendMessage(context, message) {
    console.log(message);
    const timeStamp = Date.now();
    const payload = { content: message, time: timeStamp };
    context.commit("addMessage", payload);
    // post request
  },
};
