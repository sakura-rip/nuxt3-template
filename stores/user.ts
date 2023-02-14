import { defineStore } from 'pinia'
import {User} from "~/types/user";

export const userStore = defineStore('user', {
  state: () => {
    return {
      user: undefined as User | undefined
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    setUser(user: User) {
      this.user = user
    },
  },
})
