import { CurrentlyDoing } from '@models/currentlyDoing';

const now: CurrentlyDoing = {
    lastUpdate: 'May 2023',
    reading: [
        {
            title: 'The Conquering Tide: War in the Pacific Islands, 1942-1944',
            author: 'Ian W. Toll',
            cover: 'conquering_tide.jpg',
            link: 'https://bookshop.org/p/books/the-conquering-tide-war-in-the-pacific-islands-1942-1944-ian-w-toll/8758811?ean=9780393353204',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
    ],
    watching: [
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
        {
            title: 'Elementary',
            cover: 'elementary.jpg',
            rating: 5,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt2191671/',
            imageFolder: 'tv',
        },
        {
            title: 'American Gods',
            cover: 'american_gods.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt1898069/',
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
            title: 'Halo Infinite: Multiplayer',
            system: 'Xbox',
            cover: 'halo-infinite-mp.jpg',
            link: 'https://www.halowaypoint.com/halo-infinite',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Star Trek: Online',
            system: 'PC',
            cover: 'star_trek_online.jpg',
            link: 'https://www.playstartrekonline.com/en/',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default now;
