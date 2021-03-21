// defining globally (therefore don't have to add it as component: artwork component in the Vue instance below
Vue.component('artwork-component', {
  template:
        `<tr>
        <td>{{title}}</td>
        <td>{{artist}}</td>
        <td>{{medium}}</td>
        <td>{{date}}</td>
        <td>{{image}}</td>
        </tr>`,
  props: ['title', 'artist', 'medium', 'date', 'image', 'link']
});

var vm = new Vue ({
  el: '#art-list',
  data: {
    newShinyObj: {
      title: '',
      artist: '',
      medium: '',
      date: 'e.g. 1650, early 14th century',
      image: '',
      link: ''
    },
    artworks: [
      {
        title: 'Knife, from a two-piece cutlery set',
        artist: 'Unknown artist',
        medium: 'coral, brass, niello, silver, iron, gold',
        date: 'late 16th century',
        image: 'images/knife-400.jpg',
        imageAlt: 'A knife and spear set with ornate floral inlaid designs on the hilt and sides of the knife, with large spiky red coral handles on a black background.',
        onView: true,
        link: 'https://collections.artsmia.org/art/109578/knife-italy'
      },
      {
        title: 'Tatra T87 four door sedan',
        artist: 'Hans Ledwinka',
        medium: 'all-metal construction',
        date: '1948, designed 1936',
        image: 'images/tatra-400.jpg',
        imageAlt: 'A silver car with distinctive rear dorsal fins with no passengers in a museum gallery.',
        onView: true,
        link: 'https://collections.artsmia.org/art/98653/tatra-t87-four-door-sedan-hans-ledwinka'
      },
      {
        title: 'Teapot',
        artist: 'William Grigg',
        medium: 'silver and wood',
        date: 'c. 1791 - 1794',
        image: 'images/teapot-400.jpg',
        imageAlt: 'An oval silver teapot with a black handle and an engraved design of a crest on its body.',
        onView: true,
        link: 'https://collections.artsmia.org/art/745/teapot-willliam-grigg'
      },
      {
        title: 'Pambadam Earrings',
        artist: 'Unknown artist',
        medium: 'gold',
        date: '19th - 20th century',
        image: 'images/pambadam-earrings-400.jpg',
        imageAlt: 'Two geometric gold earrings in the abstract shape of a cobray laying eggs on her nest.',
        onView: true,
        link: 'https://collections.artsmia.org/art/4380/pambadam-earrings-india'
      },
      {
        title: '\"Nocturne\" radio',
        artist: 'Walter Dorwin Teague',
        medium: 'mirrored glass, chrome, painted wood, electrical components',
        date: 'c. 1937',
        image: 'images/nocturne-radio-400.jpg',
        imageAlt: 'A furniture-sized futuristic circular radio with a bright blue mirrored glass facade.',
        onView: true,
        link: 'https://collections.artsmia.org/art/6783/nocturne-radio-walter-dorwin-teague'
      }
    ]
  },
  methods: {
    submitHandler: () => {
      console.log('submitted new artwork');
      // var self= this; -  change the vms by adding a varialble called self and then referencing it in the call back, ie, replace vm with self?
      vm.artworks = vm.artworks.concat(vm.newShinyObj);
      vm.resetForm();
      vm.validateText();
    },
    resetForm: () => {
      vm.newShinyObj = {
        title: '',
        artist: '',
        medium: '',
        date: '',
        image: '',
        link: ''
      }
    },
    removeItem: item => {
      vm.artworks = vm.artworks.filter(artwork => {
        return artwork !== item;
      });
    },
    validateText: function () {
      if (this.link !== "") {
        window.alert ('Add a link to your artwork from collections.artsmia.org');
      } else {
        window.alert ('Thank you!');
      }
    }
  }
});