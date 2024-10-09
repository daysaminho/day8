
new Vue({
    el: '#app',
    data: {
        message: 'The current time is: ' 
    },
    methods: {
        getCurrentTime() {
            const now = new Date(); 
            const hours = String(now.getHours()).padStart(2, '0'); 
            const minutes = String(now.getMinutes()).padStart(2, '0'); 
            return `${hours}:${minutes}`; 
        }
    },
    created() {
        
        this.message += this.getCurrentTime(); 
    }
});
