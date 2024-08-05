<template>
    <button type="button" @click="onClickAge">Update age event</button>
    <button type="button" @click="ageChangeFn(3)">Update age CB</button>
   <p>The user is {{ age }} years old.</p>
   <p> {{ ageDoubled }}</p>
</template>
<script>
export default {
    name: "User",
    emits: ["age-change"],
    props: {
        age: {
            type: Number,
            // required: true,
            // default: 20,
            validator(value){
                return value < 130
            }
        },
        ageChangeFn: Function
    },
    methods: {
        onClickAge() {
            this.$emit("age-change", 1)
        }
    },
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    }
}
</script>