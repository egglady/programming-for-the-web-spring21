var llama = new Vue ({
    el: '#llama',
    data: {
        currentRoute: 'big',
        llamaWiki: 'https://en.wikipedia.org/wiki/Llama',
        linkColor: {
            color: 'rgb(52, 97, 209, .7)'
        },
        baseStyle: {
            color: 'rgb(52, 97, 209)'
        }
    }
})

var alpaca = new Vue ({
    el: '#alpaca',
    data: {
        currentRoute: 'big',
        alpacaWiki: 'https://en.wikipedia.org/wiki/Alpaca',
        linkColor: {
            color: 'rgba(194, 77, 27, .7)'
        },
        baseStyle: {
            color: 'rgb(194, 77, 27)',
            'padding-right': '2rem'
        }
    }
})