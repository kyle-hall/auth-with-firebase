import * as fb from '../firebase'
import router from '../router'

export default {
  async login({ dispatch }, form) {
    const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

    dispatch('fetchUserProfile', user)
  },
  async logout({ commit }) {
    await fb.auth.signOut()

    commit('setUserProfile', {})

    router.push('/login')
  },
  async fetchUserProfile({ commit }, user) {
    const userProfile = await fb.usersCollection.doc(user.uid).get()

    commit('setUserProfile', userProfile.data())

    router.push('/')
  },
  async signup({ dispatch }, form) {
    const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

    await fb.usersCollection.doc(user.uid).set({
      name: form.name,
      title: form.title,
    })

    dispatch('fetchUserProfile', user)
  },
}
