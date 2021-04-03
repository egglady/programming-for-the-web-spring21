Vue.component('medieval-artwork', {
  template: `<div class="artwork">
        <h3>{{artwork.title}}</h3>
        <div><img v-bind:src="artwork.primaryImageSmall" alt="" /></div>
        <p>{{artwork.artistDisplayName}}</p>
        <p>{{artwork.artistDisplayBio}}</p>
        <p>{{artwork.medium}}</p>
        <p>{{artwork.period}}</p>
        <p>{{artwork.objectDate}}</p>
        <p>{{artwork.creditLine}}</p>
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
        responseArray = response.data.objectIDs.slice(10, 19); // take out objects 11-20 of the objectIDs in department 17
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