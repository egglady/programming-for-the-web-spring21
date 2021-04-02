Vue.component('streaming-track', {
  template: `<div v-bind:class="['track', trending]'>
    <h3>{{track.title}}</h3>
    <div><img v-bind:src="track.cover" alt=""</div>
    <small>{{track.artist}}</small>
  </div>`,
  props: ['track'],
  computed: {
  // not using es6 function here
    trending: function () {
      const delta = this.track.rank - this.track.position // change in rank
      if (delta > 0) {
        return 'up'
      } else if (delta < 0) {
        return 'down'
      } else { // if just zero, not greater than or less than
        return 'no-change'
      }
    }
}
});

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
        console.log(vm.tracks);
      });
  }
})

       // think of this kind of like draw from p5.js

       // start with ./ for start in the directory you're currently in
      // Promise syntax is the following .then