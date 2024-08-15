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

    <button type="button" ref="btn">Button!</button>

  </div>
</template>

<script setup>
  import {
    ref, reactive, toRefs,
    onBeforeMount, onMounted,
  } from "vue";

  import AppAlert from "@/components/Alert.vue";
  import { useNumber } from "@/hooks/number";
  import { usePhrase } from "@/hooks/phrase";

  const btn = ref(null); //initial value for template reference must be null.

  onBeforeMount(() => {
    console.log("onBeforeMount()");
  });

  onMounted(() => {
    console.log("onMounted()");

    //add the event listener to the btn ref.
    btn.value.addEventListener("click", () => {
      console.log("Button clicked.");
    });
  });

  setTimeout(() => {
    user.name = "Perico"
  }, 3000);

  const user = reactive({
    name: 'John',
    age: 20,
  });

  const { num, increment, double } = useNumber();
  const { phrase, reversedPhrase, num: phraseNum } = usePhrase();
  const { name } = toRefs(user);
</script>
