<template>
  <div class="outerMenu">
    <link rel="stylesheet" href="https://use.typekit.net/bre5ozt.css">
    <div class="innerMenu">
        <ul class="menuSections">
            <li><NuxtLink to="/" class="menuText">ABOUT</NuxtLink></li>
            <li><NuxtLink to="/" class="menuText underline">CONTACT US</NuxtLink></li>
        </ul>
        <ul class="middleSection">
            <li><NuxtLink to="/" class="menuText specialText">BOTSITIVITY</NuxtLink></li>
        </ul>
        <ul class="menuSections">
            <li v-if="!session"><NuxtLink to="/" class="menuText">SIGN UP</NuxtLink></li>
            <li v-if="!session"><NuxtLink to="/login" class="menuText">LOGIN</NuxtLink></li>
            <li v-if="session"><NuxtLink to="/" class="menuText">MAIN SITE</NuxtLink></li>
            <li v-if="session"><a @click="handleLogout()" class="menuText logout">LOGOUT</a></li>
        </ul>
        <ul class="menuSections" id="hamburgerOuter">
            <div class="hamburger" id="hamburger">
                <div class="hamburgerLine"></div>
            </div>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtMenu",
  computed: {
    session () {
      return this.$store.state.sessionID
    }
  },
  methods: {
    handleLogout() {
        this.$store.dispatch('logout')
        this.$router.push('/')
    }
  }
};
</script>
<style scoped>
 @import url("https://p.typekit.net/p.css?s=1&k=bre5ozt&ht=tk&f=34872.34873.34871&a=76201545&app=typekit&e=css");
.outerMenu{
    margin: 0;
    z-index: 10;
    position: relative;
}

.innerMenu{
    display: flex;
    justify-content: space-around;
    background-color: #EEEEEE;
    padding: 16px 0 16px 0;
}

.menuSections{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.middleSection{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.middleSection li{
    padding: 2px;
}

.menuSections li{
    transition: 1s all ease;
    border-top: 3px solid #ffb63f;
    border-bottom: 3px solid #ffb63f;
    float: left;
    padding: 12.5px;
}

.menuSections li:hover{
    transition: 1s all ease;
    border-top: 3px solid #ff653f;
    border-bottom: 3px solid #ff653f;
}

.menuText{
    font-size: 0.9rem;
    text-decoration: none;
    color: black;
    margin-right: 0.50rem;
    margin-left: 0.2rem;
}

.specialText{
  margin-top: auto;
  margin-bottom: auto;
    font-family: Arbotek,sans-serif;
    font-style: normal;
    font-weight: 0;
    font-size: 28px;
}

.hamburger{
    position: relative;
    top: -15%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .5 ease;
    text-align:justify;
    z-index: 111;
}

.hamburgerLine{
    height: 6px;
    width: 45px;
    background-color: black;
    border-radius: 5px;
    overflow: hidden;
    transition: all 1s ease;
}

.hamburgerLine::after,
.hamburgerLine::before{
    content: "";
    position: absolute;
    width: 45px;
    height: 6px;
    border-radius: 5px;
    background-color: black;
    transition: .5 all ease;
}

.hamburgerLine::after{
    transform: translateY(16px);
    transition: 0.5s all ease;

}

.hamburgerLine::before{
    transform: translateY(-16px);
    transition: 0.5s all ease;

}

.hamburger.openMenu .hamburgerLine{
    transition: 1s all ease;
}


.hamburger.openMenu .hamburgerLine::before{
    transition: 0.5s all ease;
    width: 30px;
    transform: rotate(45deg) translate(6px,9px);
}

.hamburger.openMenu .hamburgerLine::after{
    transition: 0.5s all ease;
    width: 30px;
    transform: rotate(-45deg) translate(6px,-9px);
}

#hamburgerOuter{
    display: none;
}

.hamburgerMenu{
    position:fixed;
    padding:0;
    margin:0;

    top:0;
    left:100%;

    width: 100%;
    height: 100%;
    background:white;

    z-index: 100;

    transition: 0.5s all ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: left;
}

.hamburgerMenu.openHamburger {
    transform: translateX(-100%);
}

.hamburgerSections li{
    font-size: 5vw;
    font-family: "ubuntu";
    padding: 13px;
}

.logout {
    cursor: pointer;
}
@media only screen and (max-width: 810px){
    .outerMenu{
        display: none;
    }
}
</style>