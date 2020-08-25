<template>
  <div>
    <h1>Hello, {{ user.name }}!</h1>

    <button v-on:click="logout()">Log Out</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
  computed: {
    user() {
      return this.$store.state.userProfile
    },
  },
}
</script>
