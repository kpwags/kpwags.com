import { CurrentlyDoing } from '@models/currentlyDoing';

const now: CurrentlyDoing = {
    lastUpdate: 'February 2023',
    reading: [
        {
            title: "Liar's Poker",
            author: 'Michael Lewis',
            cover: 'liars_poker.jpg',
            link: 'https://bookshop.org/p/books/liar-s-poker-michael-lewis/8855267?ean=9780393338690',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
    ],
    watching: [
        {
            title: 'Yellowstone',
            cover: 'yellowstone.jpg',
            imageFolder: 'tv',
            link: 'https://www.imdb.com/title/tt4236770/',
            rating: null,
            thoughts: null,
        },
        {
            title: "It's Always Sunny in Philadelphia",
            cover: 'always_sunny.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0472954/',
            imageFolder: 'tv',
        },
        {
            title: 'Star Trek: Voyager',
            cover: 'voyager.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0112178/',
            imageFolder: 'tv',
        },
        {
            title: 'Daria',
            cover: 'daria.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0118298/',
            imageFolder: 'tv',
        },
        {
            title: '1883',
            cover: '1883.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt13991232/',
            imageFolder: 'tv',
        },
    ],
    playing: [
        {
            title: 'Horizon Zero Dawn',
            system: 'PS5',
            cover: 'horizonzerodawn.jpg',
            link: 'https://www.playstation.com/en-us/games/horizon-zero-dawn/',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default now;
