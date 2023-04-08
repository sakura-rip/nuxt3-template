import {createVuetify} from 'vuetify'
import {aliases, mdi} from "vuetify/iconsets/mdi-svg";
import {md3} from 'vuetify/blueprints'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,
    blueprint: md3,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
