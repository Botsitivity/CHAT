<template>
  <nav>
    <button @click="route('')">Home</button>
    <button @click="route('login')">Login</button>
  </nav>
</template>

<script>
export default {
  name: 'NuxtMenu',
  methods: {
    route (path) {
      this.$router.push(`/${path}`)
    }
  }
}
</script>
<style scoped>

</style>