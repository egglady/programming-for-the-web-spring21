const artArray = [
    {   
        title: 'Knife, from a two-piece cutlery set',
        artist: 'Unknown artist',
        medium: 'coral, brass, niello, silver, iron, gold',
        date: 'late 16th century',
        onView: true
    },
    {
        title: 'Tatra T87 four door sedan',
        artist: 'Hans Ledwinka',
        medium: 'all-metal construction',
        date: '1948, designed 1936',
        onView: true
    },
    {
        title: 'Teapot',
        artist: 'William Grigg',
        medium: 'silver and wood',
        date: 'c. 1791 - 1794',
        onView: true
    },
    {
        title: 'Pambadam Earrings',
        artist: 'Unknown artist',
        medium: 'gold',
        date: '19th - 20th century',
        onView: true
    },
    {
        title: '\"Nocturne\" radio',
        artist: 'Walter Dorwin Teague',
        medium: 'mirrored glass, chrome, painted wood, electrical components',
        date: 'c. 1937',
        onView: true
    }
];

var vm = new Vue ({
    el: '#art-list',
    data: {
        works: artArray
    }
})
