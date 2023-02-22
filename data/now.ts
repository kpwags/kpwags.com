import { CurrentlyDoing } from '@models/currentlyDoing';

const now: CurrentlyDoing = {
    lastUpdate: 'February 2023',
    reading: [
        {
            title: 'American Gods',
            author: 'Neil Gaiman',
            cover: 'american_gods.jpg',
            link: 'https://bookshop.org/p/books/american-gods-neil-gaiman/6438874?ean=9780063081918',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
    ],
    watching: [
        {
            title: 'Star Trek: Picard',
            cover: 'picard.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt8806524/',
            imageFolder: 'tv',
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
