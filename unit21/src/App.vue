<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">Click me!</button>
    <p>{{ user.name }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function increment() {
      num.value++;
    }

    setTimeout(() => {
      user.name = "Perico"
    }, 3000);

    const user = reactive({
      name: 'John',
      age: 20,
    });

    return {
      num,
      increment,
      user,
      ...toRefs(user),
    };
  },
};
</script>
