export const state = () => ({
  uid: null,
  messages: [],
  sessionID: null,
});

export const mutations = {
  addMessage(state, message) {
    state.messages.push(message);
  },
  clearMessages(state) {
    state.messages = [];
  },
  addSession(state, id) {
    state.sessionID = id;
  },
};

export const actions = {
  async sendMessage(context, message) {
    console.log(message);
    console.log(this.state);
    const timestamp = Date.now();
    const payload = { message: message, timestamp: timestamp };
    context.commit("addMessage", payload);

    if (this.state.sessionID === null) {
      const time = new Date();
      const newID = `${time.getSeconds()}${time.getMilliseconds()}${time.getUTCSeconds()}${time.getMinutes()}`;
      console.log(newID);
      context.commit("addSession", newID);
      console.log("session added");
    }

    // post request
    let postURL = `${window.location.protocol}//api.botsitivity.org/chat`;
    if (window.location.hostname === "localhost") {
      postURL = `${window.location.protocol}//localhost:2000/chat`;
    }
    let bopyResponse = await this.$axios.$post(postURL, {
      message: message,
      timestamp: timestamp,
      sessionID: this.state.sessionID,
      uid: 123456,
    });
    await context.commit("addMessage", bopyResponse.payload);
  },
};
