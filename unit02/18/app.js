let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            selectedColor: '',
            size: 150
        }
    },
    computed:{
        circle_classes() {
            return {purple: this.isPurple}
        },
        circle_style() {
            return { width:this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px'}
        },
        circle_transformation() {
            return {transform: 'rotate(30deg)'}
        }
    }
}).mount('#app')