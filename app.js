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


new Vue({
    el: '#vue-computed-properties',
    data: {
        age: 20,
        a: 0,
        b: 0,
    },
    // methods: {
    //     addToA: function(){
    //         console.log('add to a');
            
    //         return this.a + this.age;
    //     },
    //     addToB: function(){
    //         console.log('add to b');
            
    //         return this.b + this.age;
    //     }
    // },
    computed: {
        addToA: function(){
            console.log('add to a');
            
            return this.a + this.age;
        },
        addToB: function(){
            console.log('add to b');
            
            return this.b + this.age;
        }
    }
});