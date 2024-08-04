import { createApp } from 'vue'
import App from './App.vue'
// import Greeting from "@/components/greeting/Greeting.vue"

let vm = createApp(App)

// register the component globally
// vm.component("Greeting", Greeting)

vm.mount('#app')
