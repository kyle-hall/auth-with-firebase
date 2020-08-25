<template>
  <div id="login">
    <section>
      <form @submit.prevent>
        <h1>Welcome Back</h1>
        <div>
          <label for="email1">Email</label>
          <input
            v-model.trim="loginForm.email"
            type="text"
            placeholder="you@email.com"
            id="email1"
          />
        </div>
        <div>
          <label for="password1">Password</label>
          <input
            v-model.trim="loginForm.password"
            type="password"
            placeholder="******"
            id="password1"
          />
        </div>
        <button @click="login()" class="button">Log In</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password,
      })
    },
  },
}
</script>
