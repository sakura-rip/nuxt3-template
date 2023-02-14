import {userStore} from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const localePath = useLocalePath()

  if (!userStore().isAuthenticated) {
    return navigateTo(localePath('/login'))
  }
});
