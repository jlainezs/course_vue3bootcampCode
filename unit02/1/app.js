const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods:{
        updateMiddleName(){
            this.middleName = event.target.value
        },
        increment(){
            this.age++
        },
        updateLastName(message, event){
            console.log(message);
            this.lastName = event.target.value;
        }
    },
    computed: {
        fullName(){
            console.log("Full name computed property called.")
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20
            }, 3000);
        }
    }
}).mount('#app1');

//setTimeout(() => {
//    vm.firstName = 'Bob';
//}, 2000);

//Vue.createApp({
//    data(){
//        return {
//            firstName: 'Perico',
//            lastName: 'Palotes'
//        }
//    }
//}).mount('#app2')