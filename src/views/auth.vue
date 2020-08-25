<template>
  <div v-if="showLoginForm" @submit.prevent>
    <login />
    <a @click="toggleForm()">Not a member? Create an Account!</a>
  </div>
  <div v-else @submit.prevent>
    <signup />
    <a @click="toggleForm()">I have an account. I'll login.</a>
  </div>
</template>

<script>
import Login from './login'
import Signup from './signup'

export default {
  data: () => {
    return {
      showLoginForm: true,
    }
  },
  methods: {
    toggleForm: function() {
      this.showLoginForm = !this.showLoginForm
    },
  },
  components: {
    Signup,
    Login,
  },
}
</script>
