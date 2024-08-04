<template>
<p>hello</p>
<greeting></greeting>
</template>

<script>
// register the component localy
import Greeting from "@/components/Greeting.vue"

export default {
  name: 'App',
  components: {
    Greeting: Greeting
  }
}
</script>