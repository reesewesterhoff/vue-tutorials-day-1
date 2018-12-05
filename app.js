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

new Vue({
    el: '#vue-events',
    data: {
        age: 23,
        x: 0,
        y: 0,
        name: '',
        ageTwoWay: '',
    },
    methods: {
        add: function(increment){
            this.age += increment;
        },
        subtract: function(decrement){
            this.age -= decrement;
        },
        updateXY: function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        click: function(){
            alert('Google was clicked!');
        },
        logName: function(){
            console.log('entered name');
            
        },
        logAge: function(){
            console.log('entered age');
        }
    }
});