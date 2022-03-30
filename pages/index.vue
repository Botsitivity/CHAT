<template>
<div class="chat">
<Menu />
<h2 class="top">CHAT WITH BOPY!</h2>
        <div id="form-input"> 
            <input type="text" id="text" placeholder="Send Bopy a Message!">
        </div>
<button class="send"></button>
<div class="circle1"></div>
<div class="circle2"></div>
<div class="circle3"></div>
</div>

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
.top{
  font-family: 'Staatliches', cursive;
  margin-top: 3rem;
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 80px;
text-align: center;
}
.send{
  color: white;
border-radius: 40rem;
position: absolute;
width: 61px;
height: 61px;
left: 1326px;
bottom: 2rem;
background: #FF653F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
#form-input{
  z-index: 1;
  position: absolute;
width: 1231px;
height: 61px;
left: 68px;
bottom: 2rem;
background: #DCDCDC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 45px;
}
#text{
  color: black;
background-color: transparent;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-weight: bolder;
font-size: 24px;
width: 1100px;
margin-left: 2rem;
margin-top: .8rem;
  vertical-align: middle;
}
.circle1{
  position: absolute;
width: 776.23px;
height: 783.37px;
left: -348.26px;
top: 450.35px;
background: rgba(255, 163, 132, 0.75);
transform: rotate(0.57deg);
border-radius: 40rem;
}
.circle2{
  position: absolute;
width: 438.86px;
height: 470.15px;
left: 180.16px;
top: 700px;
background: rgba(246, 147, 141, 0.85);
transform: rotate(0.57deg);
border-radius: 40rem;
}
.circle3{
  position: absolute;
width: 272.23px;
height: 281.41px;
left: 81.78px;
top: 580px;
background: rgba(255, 182, 63, 0.75);
transform: rotate(0.57deg);
border-radius: 40rem;
}

</style>