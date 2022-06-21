<template>
    <div id="body">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Ubuntu:wght@300&display=swap" rel="stylesheet">
        <Menu />
        <h1>Login Page</h1>
        <form @submit.prevent="handleSubmit">
            <label class="labeltext" for="email"> Email : </label>
            <input id="input" type="email" v-model="email" placeholder="E-mail">
            <label class="labeltext" for="password"> Password : </label>
            <input id="input" type="password" v-model="password" placeholder="Password">
            <input id="button" type="submit">
        </form>
        <p>{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },
    methods: {
        async handleSubmit() {
            try {
                await this.$store.dispatch('login', { email: this.email, password: this.password })  
                this.$router.push('/chat')
            } catch (err) {
                this.error = err
            }
        }
    }
}
</script>

<style scoped>

#body{
    background-color:  #eee;
    height: 100vh;
}
.labeltext{
    text-align: left;
    position: relative;
    bottom: -10%;
    left: 0;
    margin-bottom: -2%;
    font-size: 3vmin;
    font-weight: bolder;
    font-family: "Ubuntu",sans-serif;
}
h1{
    text-align: center;
    margin-top: 4rem;
    font-size: 2rem;
    font-family: "Ubuntu",sans-serif;
    font-weight: bolder;

}
#input{
    display: inline;
    margin: 2rem;
    padding: .5rem;
    transition: all .3s ease;
    margin-top: 5%;
    outline: none;
    color: #000;
    border: none;
    border-bottom: 5px solid #ff653f;
    background-color: rgb(232, 240, 254);
}
#button{
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    display: block;
    cursor: pointer;
    background-color: #ffb63f;
    text-decoration: none;
    font-family: "Oswald",sans-serif;
    font-size: 20px;
    font-weight: bolder;
    outline: none;
    width: 200px;
    height: 56px;
    border: none;
    border-radius: 15px;
        font-family: Nunito, sans-serif;
    color: rgb(51, 71, 86);
}
p{
text-align: center;
margin-top: 2%;

}
form{
    text-align: center;
    
}
@media only screen and (max-width: 810px){
    #body{
    background-color:  #eee;
    height: 500vw;
}
.labeltext{
    font-family: "Ubuntu",sans-serif;
    display: block;
text-align: center;
margin-top: 3rem;
}
h1{
    padding-top: 8rem;
    margin-top: 0;
}
#input{
    width: 18rem;
}
}
</style>