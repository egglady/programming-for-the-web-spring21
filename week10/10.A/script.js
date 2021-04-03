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
    let responseArray = []; // holds response from first axios.get
    let baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
    axios
      .get(baseUrl + '?departmentIds=17')
      .then(response => {
        responseArray = response.data.objectIDs.slice(0, 19); // take out first 20 of the objectIDs in department 17
        for(let k = 0; k < responseArray.length; k++) {
          axios
            .get(baseUrl + '/' + responseArray[k])
            .then(art => {
              console.log('art', art.data);
              vm.artObjects.push(art.data);
            })
        }
      })
  }
});