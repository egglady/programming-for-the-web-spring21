Vue.component('medieval-artwork', {
  template: `<div class="artwork">
        <h3 class="artwork-title">{{artwork.title}}</h3>
        <div><img v-bind:src="artwork.primaryImageSmall" alt="" /></div>
        <div class="artwork-metadata">
        <p class="artist">{{artwork.artistDisplayName}}</p>
        <p class="artist">{{artwork.artistDisplayBio}}</p>
        <p>Medium: {{artwork.medium}}</p>
        <p>{{artwork.period}}</p>
        <p>Date: {{artwork.objectDate}}</p>
        <p>Credit Line: {{artwork.creditLine}}</p>
        </div>
   </div>`,
   props: ['artwork'] // I make these ones up
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
        responseArray = response.data.objectIDs.slice(9, 19); // take out objects 11-20 of the objectIDs in department 17
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