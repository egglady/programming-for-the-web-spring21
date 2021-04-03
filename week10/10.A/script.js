Vue.component('medieval-artwork', {
   template: `<div class="artwork">
        <h3>{{title}}</h3>
        <div><img v-bind:src="primaryImageSmall" alt=""></div>
   </div>`
});


var vm = new Vue({
    el: '#museumApp',
    data: {
       artObjects: []
    },
    mounted: function() {
        let responseArray = [] // holds response from first axios.get
        let baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
        axios
        .get(baseUrl + '?departmentIds=17')
        .then(response => {
            console.log('response', response);
            vm.artworks = response.data;
            console.log(vm.artworks);
        })
    }
});