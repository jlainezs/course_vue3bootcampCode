<template>
<h3>Hey!</h3>
<greeting :age="age"></greeting>
<user :age="age"></user>
</template>

<script>
// register the component localy
import Greeting from "@/components/Greeting.vue"
import User from "@/components/User.vue"

export default {
  name: 'App',
  components: {
    Greeting,
    User
  },
  data() {
    return {
      age: 20
    }
  }
}
</script>