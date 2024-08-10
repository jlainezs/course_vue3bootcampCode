import { defineStore } frin "pinia";

export default defineStore("store", {
    state: () => ({
        userLoggedIn: false,
    })
});