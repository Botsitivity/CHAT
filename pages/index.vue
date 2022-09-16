<template>
  <div class="chat">
    <LiabilityWaiver/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
    <div ref="menu"><Menu  /></div>
    <div ref="options">
      <h2 class="top">CHAT WITH BOPY!</h2>
      <div class="buttons">
        <button @click="getMessages" v-if="!session || !session.startsWith('anonymous')">Restore Messages</button>
        <button @click="endChat" v-if="messages.length != 0">
          End This Chat
        </button>
      </div>
    </div>


    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>

    <div class="chat-space" ref="chat_space">
      <section id="chatbox" ref="chatbox">
        <div
          v-for="message in messages"
          :key="message.timestamp"
          class="message"
          :class="{ bopymessage: message.isBopy, usermessage: !message.isBopy }"
        >
          {{ message.message }}
        </div>
      </section>
  
      <div id="form-input">
        <input
          type="text"
          id="text"
          placeholder="Send Bopy a Message!"
          v-model="currentMessage"
          autocomplete="off"
          class="inputbox"
        />
        <button class="send" @click="sendMessage(currentMessage)" ref="send">
          <img src="~assets/images/send.png" class="w-8"/>
        </button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      currentMessage: null,
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    session() {
      return this.$store.state.sessionID;
    },
  },
  methods: {
    sendMessage(message) {
      if (!message) return;
      this.$store.dispatch("sendMessage", message);
      this.currentMessage = null;
    },
    getMessages() {
      this.$store.dispatch("getMessageHistory");
    },
    endChat() {
      this.$store.dispatch("endChat");
    },
    resize(){
      this.$refs.chat_space.style.height = `${window.innerHeight - this.$refs.menu.offsetHeight - this.$refs.options.offsetHeight}px`
    }
  },
  mounted() {
    if (window.location.hostname === 'localhost') {
      this.$store.dispatch('setDomain')
      console.log('domain changed to undefined')
    }
    if (!this.session) this.$router.push('/login')
    this.resize()
    window.addEventListener("resize", this.resize)
    window.addEventListener("keydown", (key) => {
      if (key.code == "Enter") this.sendMessage(this.currentMessage);
    });
  },
  updated() {
    this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
  },
};
</script>

<style>

.chat-space {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 0.2fr;
}
#chatbox {
  display: flex;
  flex-flow: column nowrap;
  /* width: 90vw; */
  width: 100%;
  margin: 0 auto;
  z-index: 99;
  overflow: auto;
}
.buttons {
  display: flex;
  justify-content: space-around;
  width: 25vw;
  margin: 0 auto;
}
.usermessage {
  background-color: #ffdda6;
  align-self: flex-end;
  margin-right: 1rem;
  z-index: 12;
}
.bopymessage {
  background-color: #e1e1e1;
  align-self: flex-start;
  margin-left: 1rem;
  z-index: 12;
}
.message {
  border-radius: 30px;
  padding: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 2;
  display: block;
  width: fit-content;
  margin-bottom: 1rem;
}
.top {
  font-family: "Staatliches", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
}
.send {
  font-size: 2rem;
  z-index: 1;
  color: white;
  border-radius: 40rem;
  width: 61px;
  height: 61px;
  background: #ff653f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
}
.send:active {
  animation: press 0.2s 1 linear;
}
@keyframes press {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
}
#form-input {
  outline-width: 0;
  outline-style: none;
  border: none;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#text {
  color: black;
  background: rgb(218, 218, 218);
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-weight: bolder;
  font-size: 24px;
  height: 45%;
  padding: 10px;
  width: 85%;
  margin-left: 2rem;
  margin-top: 0.8rem;
  vertical-align: middle;
  border-radius: 10px;
}
#text:focus {
  outline: none;
}
.circle1 {
  position: absolute;
  width: 20rem;
  height: 20rem;
  left: 15rem;
  top: 19rem;
  background: rgba(255, 163, 132, 0.75);
  transform: rotate(0.57deg);
  border-radius: 40rem;
}
.circle2 {
  position: absolute;
  width: 330px;
  height: 330px;
  left: 15px;
  top: 400px;
  background: rgba(246, 147, 141, 0.85);
  transform: rotate(0.57deg);
  border-radius: 40rem;
}
.circle3 {
  position: absolute;
  width: 272.23px;
  height: 281.41px;
  left: 180px;
  top: 535px;
  background: rgba(255, 182, 63, 0.75);
  transform: rotate(0.57deg);
  border-radius: 40rem;
}

::-webkit-scrollbar {
  margin-left: 6rem;
  width: 10px;
  border-radius: 40rem;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #ffb63f;
  border-radius: 40rem;
}
@media only screen and (max-width: 810px) {
  #chatbox {
    display: flex;
    flex-flow: column nowrap;
    /* width: 94vw; */
    margin: 0 auto;
    z-index: 99;
    overflow: auto;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    width: 20rem;
    padding-bottom: 2rem;
    margin: 0 auto;
  }
  .usermessage {
    background-color: #ffdda6;
    align-self: flex-end;
    margin-right: 1rem;
    z-index: 11;
  }
  .bopymessage {
    background-color: #e1e1e1;
    align-self: flex-start;
    margin-left: 1rem;
    z-index: 11;
  }
  .message {
    border-radius: 20px;
    padding: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 11;
    display: block;
    width: fit-content;
    margin-bottom: 1rem;
  }
  .top {
    font-family: "Staatliches", cursive;
    margin-top: 0.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 5rem;
    text-align: center;
  }
  .send {
    z-index: 10;
    font-size: 2rem;
    color: white;
    border-radius: 40rem;
    width: 3rem;
    height: 3rem;
    background: #ff653f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .send:active {
    animation: press 0.2s 1 linear;
  }
  @keyframes press {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.92);
    }
    to {
      transform: scale(1);
    }
  }

  #text {
    color: black;
    background-color: transparent;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-weight: bolder;
    font-size: 20px;
    width: 85%;
    margin-left: 2rem;
    margin-top: 0.5rem;
    vertical-align: middle;
  }
  #text:focus {
    outline: none;
  }
  .circle1 {
    position: absolute;
    width: 11.5rem;
    height: 11.5rem;
    left: 8.5rem;
    top: 30rem;
    background: rgba(255, 163, 132, 0.75);
    transform: rotate(0.57deg);
    border-radius: 40rem;
    z-index: 2;
  }
  .circle2 {
    position: absolute;
    width: 14rem;
    height: 14rem;
    left: 3.5rem;
    top: 24rem;
    background: rgba(246, 147, 141, 0.8);
    transform: rotate(0.57deg);
    border-radius: 40rem;
    z-index: 1;
  }
  .circle3 {
    z-index: 3;
    position: absolute;
    width: 10rem;
    height: 10rem;
    left: 2rem;
    top: 32.5rem;
    background: rgba(255, 182, 63, 0.76);
    transform: rotate(0.57deg);
    border-radius: 40rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 40rem;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffb63f;
    border-radius: 40rem;
  }
}
</style>