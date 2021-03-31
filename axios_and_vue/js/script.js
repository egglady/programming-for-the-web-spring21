var base URL= "http://universities.hipolabs.com"; // any request you make will be off of that
var vm = new Vue({
    el: '#app',
    data: {
        universities: []


    },
    methods: {
        getUniversity: function() {
            axios.get(baseURL + 'path goes here')
            // promise. axios.get is going to return an object that has a .then property, that .then() property is going to fire when the data comes back successfully as:
            // .then(function(response){
            //     console.log(response);
            //        vm. universities = response.data;
            // })

            // after checking that this works in the Network part of the Console thingy, getting that 200 status, then we have to tap into the lifecycle hooks (created below)
        },
        created: function() {
            this.getUniversity();
        }
    }
});