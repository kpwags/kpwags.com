import { CurrentlyDoing } from '@models/currentlyDoing';

const now: CurrentlyDoing = {
    lastUpdate: 'January 2023',
    reading: [
        {
            title: 'The Bond King: How One Man Made a Market, Built an Empire, and Lost it All',
            author: 'Mary Childs',
            cover: 'bondking.jpg',
            link: 'https://bookshop.org/p/books/the-bond-king-how-one-man-made-a-market-built-an-empire-and-lost-it-all-mary-childs/15873505?ean=9781250120847',
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
        {
            title: 'Pokemon: Violet',
            system: 'Nintendo Switch',
            cover: 'pokemonviolet.jpg',
            link: 'https://scarletviolet.pokemon.com/en-us/',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default now;
