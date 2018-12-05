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


new Vue({
    el: '#vue-dynamic-css',
    data: {
        available: false,
        nearby: false,
    },
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});


new Vue({
    el: '#vue-conditionals',
    data: {
        error: false,
        success: false,
    }
});


new Vue({
    el: '#vue-loop',
    data: {
        shown: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 46},
            {name: 'Ken', age: 79}
        ]
    },
});

new Vue({
    el: '#vue-game',
    data: {
        health: 100,
        ended: false,
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if(this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    }
});

let one = new Vue({
    el: '#multiple-vue-1',
    data: {
        title: 'Vue App 1'
    },
    computed: {
        greet: function () {
            return 'Hello from app 1'
        }
    }
});

let two = new Vue({
    el: '#multiple-vue-2',
    data: {
        title: 'Vue App 2'
    },
    methods: {
        changeTitle: function () {
            //calls vue one by it's variable name
            one.title = 'Title changed'
        }
    },
    computed: {
        greet: function () {
            return 'Hello from app 2'
        }
    }

});

// can change vues from wherever you want
two.title = "changed from wherever";