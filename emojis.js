const emojis = [
    {
        symbol: '๐ฝ',
        letter: 'a',
        name: 'alien',
        categories: [
            'face',
        ],
    },
    {
        symbol:'๐ถ',
        letter: 'b',
        name: 'baby',
        categories: [
            'face',
        ],
    },
    {
        symbol:'๐ต',
        letter: 'c',
        name: 'cactus',
        categories: [
            'plant'
        ],
    },
    {
        symbol: '๐ฉ',
        letter: 'd',
        name: 'doughnut',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐',
        letter: 'e',
        name: 'elephant',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '๐',
        letter: 'f',
        name: 'fries',
        categories: [
            'food'
        ],
    },
    {
        symbol: '๐ป',
        letter: 'g',
        name: 'ghost',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐',
        letter: 'h',
        name: 'heart',
        categories: [],
    },
    {
        symbol: '๐ฆ',
        letter: 'i',
        name: 'ice-cream',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐คน',
        letter: 'j',
        name: 'juggler',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐ฅ',
        letter: 'k',
        name: 'kiwi',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐',
        letter: 'l',
        name: 'ladybug',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '๐',
        letter: 'm',
        name: 'mushroom',
        categories: [],
    },
    {
        symbol: '๐ฐ',
        letter: 'n',
        name: 'news',
        categories: [],
    },
    {
        symbol: '๐',
        letter: 'o',
        name: 'octopus',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '๐ฉ',
        letter: 'p',
        name: 'poop',
        categories: [
            'face',
        ],
    },
    {
        symbol: 'โ',
        letter: 'q',
        name: 'question',
        categories: [],
    },
    {
        symbol: '๐ค',
        letter: 'r',
        name: 'robot',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐',
        letter: 's',
        name: 'die',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐',
        letter: 't',
        name: 'tongue',
        categories: [],
    },
    {
        symbol: '๐ฆ',
        letter: 'u',
        name: 'unicorn',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '๐',
        letter: 'v',
        name: 'volcano',
        categories: [],
    },
    {
        symbol: '๐',
        letter: 'w',
        name: 'whale',
        categories: [
            'animal',
        ],
    },
    {
        symbol: 'โ',
        letter: 'x',
        name: 'exclamation',
        categories: [],
    },
    {
        symbol: 'โฏ',
        letter: 'y',
        name: 'yinyang',
        categories: [],
    },
    {
        symbol: '๐ค',
        letter: 'z',
        name: 'zipper',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐',
        name: 'grin',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐',
        name: 'sunglasses',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐',
        name: 'laugh',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐?',
        name: 'mad',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐ญ',
        name: 'cry',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐',
        name: 'silly',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐ฑ',
        name: 'whoops',
        categories: [
            'face',
        ],
    },
    {
        symbol: '๐ป',
        name: 'code',
        categories: [
            'device',
            'entertainment',
        ],
    },
    {
        symbol: 'โ',
        name: 'check',
        categories: [],
    },
    {
        symbol: '๐',
        name: 'hands',
        categories: [],
    },
    {
        symbol: '๐',
        name: 'heartbreak',
        categories: [],
    },
    {
        symbol: '๐',
        name: 'dog',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '๐',
        name: 'burger',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐น',
        name: 'cocktail',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '๐',
        name: 'pizza',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ฏ',
        name: 'burrito',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ฎ',
        name: 'taco',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐',
        name: 'grapes',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐',
        name: 'strawberry',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐',
        name: 'pineapple',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐',
        name: 'watermelon',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐',
        name: 'banana',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ฃ',
        name: 'sushi',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ฟ',
        name: 'popcorn',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ฑ',
        name: 'bento',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ฐ',
        name: 'cake',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐บ',
        name: 'beer',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '๐ท',
        name: 'wine',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '๐',
        name: 'meat',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ซ',
        name: 'chocolate',
        categories: [
            'food',
        ],
    },
    {
        symbol: '๐ผ',
        name: 'bottle',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '๐พ',
        name: 'champagne',
        categories: [
            'holiday',
        ],
    },
    {
        symbol: '๐ธ',
        name: 'martini',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '๐ฝ',
        name: 'dinner',
        categories: [],
    },
    {
        symbol: '๐',
        name: 'car',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '๐',
        name: 'train',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '๐ซ',
        name: 'plane',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '๐',
        name: 'earth',
        categories: [],
    },
    {
        symbol: 'โต',
        name: 'boat',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '๐ง',
        name: 'rain',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '๐จ',
        name: 'snow',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '๐ฉ',
        name: 'thunderstorm',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '๐',
        name: 'sun',
        categories: [
            'weather',
            'face',
        ],
    },
    {
        symbol: '๐ช',
        name: 'tornado',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '๐ฅ',
        name: 'fire',
        categories: [],
    },
    {
        symbol: '๐',
        name: 'halloween',
        categories: [
            'face',
            'holiday',
        ],
    },
    {
        symbol: '๐',
        name: 'christmas',
        categories: [
            'holiday',
            'plant',
        ],
    },
    {
        symbol: '๐บ',
        name: 'tv',
        categories: [
            'device',
            'entertainment',
        ],
    },
    {
        symbol: '๐ถ',
        name: 'music',
        categories: [
            'entertainment',
        ],
    },
    {
        symbol: '๐ฌ',
        name: 'movie',
        categories: [
            'entertainment',
        ],
    },
    {
        symbol: '๐',
        name: 'birthday',
        categories: [
            'holiday',
        ],
    },
    {
        symbol: '๐',
        name: 'book',
        categories: [
            'entertainment',
        ],
    },
    {
        symbol: '๐',
        name: 'notebook',
        categories: [],
    },
    {
        symbol: '๐',
        name: 'key',
        categories: [
            'device',
        ],
    },
    {
        symbol: '๐?',
        name: 'fix',
        categories: [
            'device',
        ],
    },
    {
        symbol: '๐ฑ',
        name: 'phone',
        categories: [
            'device',
            'entertainment',
        ],
    },
    {
        symbol: '๐',
        name: 'call',
        categories: [
            'device',
        ],
    },
]


module.exports = emojis;