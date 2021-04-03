Vue.component('medieval-artwork', {
   template: `<div class="artwork">
        <h3>{{artwork.title}}</h3>
        <div><img v-bind:src="artwork.primaryImageSmall" alt=""></div>
   </div>`,
   props: ['artwork']
});


var vm = new Vue({
    el: '#museumCollection',
    data: {
        artworks: []
    },
    mounted () {
        axios
        // .get('https://collectionapi.metmuseum.org/public/collection/v1/objects/321669')
        .get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=17')
        .then(response => {
            console.log('response', response);
            vm.artworks = response.data;
            console.log(vm.artworks);
        })
    }
});