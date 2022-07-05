import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'July 2022',
    reading: [
        {
            title: 'The End of Everything (Astrophysically Speaking)',
            author: 'Katie Mack',
            cover: 'endofeverything.jpg',
            link: 'https://bookshop.org/books/the-end-of-everything-astrophysically-speaking/9781982103552',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
        {
            title: 'Unit Testing Principles, Practices, and Patterns',
            author: 'Vladimir Khorikov',
            cover: 'unittesting.jpg',
            link: 'https://www.manning.com/books/unit-testing',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
    ],
    watching: [
        {
            title: 'Designated Survivor',
            cover: 'designatedsurvivor.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Yellowstone',
            cover: 'yellowstone.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Challenger: Final Flight',
            cover: 'challengerfinalflight.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
    ],
    playing: [
        {
            title: 'Destiny 2',
            system: 'Xbox',
            cover: 'destiny2.jpg',
            link: 'https://www.bungie.net/7/en/Destiny/WitchQueen',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'WoW Burning Crusade Classic',
            system: 'PC',
            cover: 'wow_tbc_classic.jpg',
            link: 'https://worldofwarcraft.com/en-us/wowclassic',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Star Wars: Battlefront II',
            system: 'PS5',
            cover: 'battlefront2.jpg',
            link: 'https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Super Mario Odyssey',
            system: 'Nintendo Switch',
            cover: 'marioodyssey.jpg',
            link: 'https://www.nintendo.com/store/products/super-mario-odyssey-switch/',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default current;
