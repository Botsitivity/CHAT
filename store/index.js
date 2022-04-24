export const state = () => ({
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
  async nuxtServerInit({ commit, dispatch }) {
    if (this.$cookies.get("session")) {
      commit("addSession", this.$cookies.get("session"));
    }
  },
  async getMessageHistory(context) {
    console.log("get message history");
    context.commit("clearMessages");
    // post request
    let postURL = `${window.location.protocol}//api.botsitivity.org/getallmessages`;
    if (window.location.hostname === "localhost") {
      postURL = `${window.location.protocol}//localhost:2000/getallmessages`;
    }
    let messages = await this.$axios.$post(postURL, {
      sessionID: this.$cookies.get("session"),
    });
    if (messages.code == 200) {
      messages.payload.forEach((message) => {
        context.commit("addMessage", message);
      });
    }
  },
  async login(context, { email, password }) {
    console.log({ email, password });

    // post request
    let postURL = `${window.location.protocol}//api.botsitivity.org/login`;
    if (window.location.hostname === "localhost") {
      postURL = `${window.location.protocol}//localhost:2000/login`;
    }
    let login = await this.$axios.$post(postURL, {
      email: email,
      password: password,
    });
    if (login.code == 200) {
      context.commit("addSession", login.session);
      this.$cookies.set("session", login.session);
      await context.dispatch("getMessageHistory");
    } else if (login.code == 403) {
      throw new Error("User suspended");
    } else {
      throw new Error(login.message);
    }
  },
  async logout(context) {
    context.commit("addSession", null);
    this.$cookies.remove("session");
  },
  async sendMessage(context, message) {
    console.log(message);
    console.log(this.state);
    const timestamp = Date.now();
    const payload = { message: message, timestamp: timestamp };
    context.commit("addMessage", payload);

    // post request
    let postURL = `${window.location.protocol}//api.botsitivity.org/chat`;
    if (window.location.hostname === "localhost") {
      postURL = `${window.location.protocol}//localhost:2000/chat`;
    }
    let bopyResponse = await this.$axios.$post(postURL, {
      message: message,
      timestamp: timestamp,
      sessionID: this.state.sessionID,
      end: false,
    });
    await context.commit("addMessage", bopyResponse.payload.bopyRes);
  },
  async endChat(context) {
    console.log("chat ended");
    // post request
    let postURL = `${window.location.protocol}//api.botsitivity.org/chat`;
    if (window.location.hostname === "localhost") {
      postURL = `${window.location.protocol}//localhost:2000/chat`;
    }
    let bopyResponse = await this.$axios.$post(postURL, {
      message: null,
      timestamp: null,
      sessionID: this.state.sessionID,
      end: true,
    });
    if (bopyResponse.code === 200) {
      context.commit("clearMessages");
    }
  },
};
