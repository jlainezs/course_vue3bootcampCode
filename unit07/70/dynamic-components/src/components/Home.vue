<template>
    <h1>Home page</h1>
</template>
<script>
export default {
    unmounted(){
        console.log("Unmounted home")
    },
    activated(){
        console.log("Activated home")
    },
    deactivated(){
        console.log("Deativated home")
    }
}
</script>