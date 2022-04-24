<template>
<div class="chat">
<Menu />
<h2 class="top">CHAT WITH BOPY!</h2>
        <div id="form-input"> 
            <input type="text" id="text" placeholder="Send Bopy a Message!">
        </div>
<button type="submit" form="form-input" value="Submit" class="send">↑</button>

<div class="circle1"></div>
<div class="circle2"></div>
<div class="circle3"></div>
<div class="usermessage">whats up bro</div>
<div class="bopymessage">whats up bro</div>

    <div id="form-input"> 
      <input type="text" id="text" placeholder="Send Bopy a Message!" v-model="currentMessage">
    </div>
    <button class="send" @click="sendMessage(currentMessage)"></button>

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
    }
  },
  methods: {
    sendMessage (message) {
      this.$store.dispatch('sendMessage', message)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
.usermessage{
  margin-top: 2rem;
  background-color: #FFDDA6;
  border-radius: 20rem;
position: absolute;
right: 5%;
padding: 0.5rem;
padding-left: .75rem;
padding-right: .75rem;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.bopymessage{
  margin-top: 7rem;
  background-color: #E1E1E1;
  border-radius: 20rem;
position: absolute;
left: 5%;
padding: 0.5rem;
padding-left: .75rem;
padding-right: .75rem;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
#text:active {
  border: none;
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
</style>