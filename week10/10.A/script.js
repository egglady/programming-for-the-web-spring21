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
 props: ['artwork'] // I make up the props names
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
        responseArray = response.data.objectIDs.slice(9, 19); // take out objects 10-20 of the objectIDs in department 17
        for (let k = 0; k < responseArray.length; k++) {
          axios // second get is for taking the response and adding them into the artObjects array (to display them in the vue component)
            .get(baseUrl + '/' + responseArray[k])
            .then(art => {
              console.log('art', art.data);
              vm.artObjects.push(art.data);
            })
        }
      })
  }
});

// NAME KEY
// in the Vue:
// response: calling the api to get all of the objectIDs in department 17
// responseArray: take all the responses from that first API call, and putting them in this array (all 7150 objects)
// artObjects: the array in data that's going to hold all the objects we sliced out of the response array (the 10 objects) that we're going to render on our page
// art: take the objectIDs retrieved from the second axios GET, and as a promise, console-log it as art and add it to the artObjects array

// in the Vue component:
// medieval-artwork: component name, used in the index html for rendering the component
// artwork: prop name that I assigned, used to v-bind in the index-html
// title, primaryImageSmall, artistDisplayName, artistDisplayBio, medium, period, objectDate, creditLine: key names found in the public api from The Met

// in index html in the div id="museumApp": 
// artwork: the prop defined in the Vue component
// work: self-assigned name, created to v-bind:artwork, then use as v-for to call objects from the artObjects array and render them
// artObjects: see in the Vue, the array in data holding the 10 art objects we sliced out of department 17