<template>
<div class="chat">
<Menu />
<h2 class="top">CHAT WITH BOPY!</h2>

<div class="buttons">
  <button @click="getMessages">Restore Messages</button>
  <button @click="endChat" v-if="messages.length != 0">End This Chat</button>
</div>

<section id="chatbox" ref="chatbox">
  <div v-for="message in messages" :key="message.timestamp" class="message" :class="{bopymessage: message.isBopy, usermessage: !message.isBopy}">{{ message.message }}</div>
</section>


  <div id="form-input"> 
    <input type="text" id="text" placeholder="Send Bopy a Message!" autocomplete="false" aria-autocomplete="both">
  </div>

<div class="circle1"></div>
<div class="circle2"></div>
<div class="circle3"></div>

    <div id="form-input"> 
      <input type="text" id="text" placeholder="Send Bopy a Message!" v-model="currentMessage">
    </div>
    <button class="send" @click="sendMessage(currentMessage)" ref="send">↑</button>

    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      currentMessage: null
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    },
    session () {
      return this.$store.state.sessionID
    }
  },
  methods: {
    sendMessage (message) {
      if (!message) return
      this.$store.dispatch('sendMessage', message)
      this.currentMessage = null
    },
    getMessages(){
      this.$store.dispatch('getMessageHistory')
    },
    endChat () {
      this.$store.dispatch('endChat')
    }
  },
  mounted(){
    window.addEventListener("keydown", (key)=>{
      if (key.code=="Enter") this.sendMessage(this.currentMessage)
    })
  },
  updated(){
    this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
#chatbox {
  display: flex;
  flex-flow: column nowrap;
  width: 90vw;
  margin: 0 auto;
  height: 60vh;
  z-index: 99;
  overflow: auto;
}
.buttons {
  display: flex;
  justify-content: space-around;
  width: 25vw;
  margin: 0 auto;
}
.usermessage{
  background-color: #FFDDA6;
  align-self: flex-end;
  margin-right: 1rem;
    z-index: 12;
}
.bopymessage{
  background-color: #E1E1E1;
  align-self: flex-start;
  margin-left: 1rem;
  z-index: 12;
}
.message {
  border-radius: 30px;
  padding: 0.5rem;
  padding-left: .75rem;
  padding-right: .75rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 2;
  display: block;
  width: fit-content;
  margin-bottom: 1rem;
}
.top{
font-family: 'Staatliches', cursive;
  margin-top: 1rem;
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 80px;
text-align: center;
}
.send{ 
  font-size: 2rem;
  z-index: 1;
color: white;
border-radius: 40rem;
position: absolute;
width: 61px;
height: 61px;
left: 92%;
bottom: 2rem;
background: #FF653F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.send:active{
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
#form-input{
  outline-width: 0;
  outline-style: none;
  border: none;
  z-index: 1;
  position: absolute;
  width: 85%;
  height: 61px;
  left: 68px;
  bottom: 2rem;
  background: #DCDCDC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
}
#text {
  color: black;
  background-color: transparent;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-weight: bolder;
  font-size: 24px;
  width: 85%;
  margin-left: 2rem;
  margin-top: .8rem;
  vertical-align: middle;
}
#text:focus {
  outline: none
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
  background: #ffb63f ;
  border-radius: 40rem;
}
@media only screen and (max-width: 810px){
  #chatbox {
  display: flex;
  flex-flow: column nowrap;
  width: 94vw;
  margin: 0 auto;
  height: 69vh;
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
.usermessage{
  background-color: #FFDDA6;
  align-self: flex-end;
  margin-right: 1rem;
z-index: 11;
}
.bopymessage{
  background-color: #E1E1E1;
  align-self: flex-start;
  margin-left: 1rem;
z-index:11;
}
.message {
  border-radius: 20px;
  padding: 0.5rem;
  padding-left: .75rem;
  padding-right: .75rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 11;
  display: block;
  width: fit-content;
  margin-bottom: 1rem;
}
.top{
font-family: 'Staatliches', cursive;
  margin-top: 0.5rem;
font-style: normal;
font-weight: 400;
font-size: 2.5rem;
line-height: 5rem;
text-align: center;
}
.send{ 
  z-index: 10;
  font-size: 2rem;
color: white;
border-radius: 40rem;
position: absolute;
width: 3rem;
height: 3rem;
left: 85.5%;
bottom: 2rem;
background: #FF653F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.send:active{
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
#form-input{
  outline-width: 0;
  outline-style: none;
  border: none;
  z-index: 9;
  position: absolute;
  width: 80%;
height: 3rem;
  left: 1rem;
  bottom: 2rem;
  background: #DCDCDC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
}
#text {
  color: black;
  background-color: transparent;
  font-family: 'Inter', sans-serif;
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
  outline: none
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
  background: rgba(246, 147, 141, 0.80);
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
  background: #ffb63f ;
  border-radius: 40rem;
}
}
</style>