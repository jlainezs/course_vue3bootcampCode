<template>
    <button type="button" @click="onClickAge">Update age</button>
   <p>The user is {{ age }} years old.</p>
   <p> {{ ageDoubled }}</p>
</template>
<script>
export default {
    name: "User",
    emits: ["age-change"],
    props: ["age"],
    methods: {
        onClickAge() {
            this.$emit("age-change", 3)
        }
    },
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    }
}
</script>