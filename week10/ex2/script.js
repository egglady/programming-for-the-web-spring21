const vm = new Vue ({
  el: '#musicApp',
  data: {
    tracks: []
  },
  mounted () {
       // think of this kind of like draw from p5.js
    axios
      .get('./data/music-list.json')// start with ./ for start in the directory you're currently in
      // Promise syntax is the following .then
      .then(response => {
        console.log('response', response);
      });
  }
})