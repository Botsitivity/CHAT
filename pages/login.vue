<template>
    <div>
        <Menu />
        <h1>Login Page</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" v-model="email">
            <input type="password" v-model="password">
            <input type="submit">
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
                this.$router.push('/')
            } catch (err) {
                this.error = err
            }
        }
    }
}
</script>

<style scoped>
input {
    outline: 2px solid;
}
</style>