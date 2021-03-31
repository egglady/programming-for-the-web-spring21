const vm = new Vue({
  el: '#musicApp',
  data: {
    tracks: []
  },
  mounted () {
    axios
      .get('./data/music-list.json')
      .then((response) => {
        console.log('response', response);
        vm.tracks = response.data;
      });
  }
})

       // think of this kind of like draw from p5.js

       // start with ./ for start in the directory you're currently in
      // Promise syntax is the following .then