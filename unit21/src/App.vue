<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click me!</button>
    <p>{{ user.name }}</p>
    <p>{{ name }}</p>
    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversedPhrase }}</p>

    <app-alert :user="user" />

  </div>
</template>

<script>
import {
  ref, reactive, toRefs, watchEffect, computed, 
  onBeforeMount, onMounted,
} from "vue";

import AppAlert from "@/components/Alert.vue";


export default {
  name: "App",
  components: {
    AppAlert,
  },
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount()");
    });

    onMounted(() => {
      console.log("onMounted()");
    });

    let num = ref(0);

    function increment() {
      num.value++;
    }

    const double = computed(() => {
      return num.value * 2;
    });

    setTimeout(() => {
      user.name = "Perico"
    }, 3000);

    const user = reactive({
      name: 'John',
      age: 20,
    });

    const phrase = ref("");
    const reversedPhrase = ref("");

    watchEffect(() => {
       reversedPhrase.value = phrase.value.split("").reverse().join("");
    });

    return {
      num,
      increment,
      user,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
    };
  },
};
</script>
