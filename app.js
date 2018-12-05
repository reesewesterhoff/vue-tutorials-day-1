console.log('app.js connected');

new Vue({
    el: '#vue-app',
    data: {
        name: 'Jeff',
        job: 'Developer',
        website: 'https://google.com',
        websiteTag: `<a href="https://google.com">Google</a>`
    },
    methods: {
        greet: function (time) {  
            return `Good ${time} ${this.name}. You are a ${this.job}.`; 
        }
    }
});