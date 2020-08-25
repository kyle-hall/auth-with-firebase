<template>
  <form @submit.prevent>
    <h1>Get Started</h1>
    <div>
      <label for="name">Name</label>
      <input v-model.trim="signupForm.name" type="text" placeholder="Enter name here" id="name" />
    </div>
    <div>
      <label for="title">Title</label>
      <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />
    </div>
    <div>
      <label for="email2">Email</label>
      <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
    </div>
    <div>
      <label for="password2">Password</label>
      <input
        v-model.trim="signupForm.password"
        type="password"
        placeholder="min 12 characters"
        id="password2"
      />
    </div>
    <button @click="signup()" class="button">Sign Up</button>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    signup: function() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title,
      })
    },
  },
}
</script>
