import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router/routes.js"

import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persistedstate"

import { createI18n } from "vue-i18n"

import Aura from "@primevue/themes/aura"
import PrimeVue from "primevue/config"
import ConfirmationService from "primevue/confirmationservice"
import ToastService from "primevue/toastservice"
import "@/assets/styles.scss"
import "@/assets/tailwind.css"
import "@/style.scss"

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersist)
app.use(pinia)

// i18n config
const messages = Object.fromEntries(
    Object.entries(import.meta.glob("../locales/*.yaml", { eager: true })).map(([key, value]) => {
        return [key.slice(11, -5), value.default]
    }),
)
const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: "en",
    messages,
})

app.use(router)
app.use(i18n)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: ".app-dark",
        },
    },
})
app.use(ToastService)
app.use(ConfirmationService)
app.mount("#app")
