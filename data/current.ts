import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'April 2022',
    reading: [
        {
            title: 'Project Hail Mary',
            author: 'Andy Weir',
            cover: 'projecthailmary.jpg',
            link: 'https://bookshop.org/books/project-hail-mary/9780593135204',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Unit Testing Principles, Practices, and Patterns',
            author: 'Vladimir Khorikov',
            cover: 'unittesting.jpg',
            link: 'https://www.manning.com/books/unit-testing',
            rating: null,
            thoughts: null,
        },
    ],
    watching: [
        {
            title: 'The Expanse',
            cover: 'expanse.jpg',
        },
        {
            title: 'Obi-Wan Kenobi',
            cover: 'kenobi.jpg',
        },
        {
            title: 'Star Trek: Strange New Worlds',
            cover: 'strangenewworlds.jpg',
        },
        {
            title: 'Designated Survivor',
            cover: 'designatedsurvivor.jpg',
        },
    ],
    playing: [
        {
            title: 'Destiny 2',
            system: 'Xbox Series X',
            cover: 'destiny2.jpg',
            link: 'https://www.bungie.net/7/en/Destiny/WitchQueen',
        },
        {
            title: 'Lego Star Wars: The Skywalker Saga',
            system: 'PS5',
            cover: 'legostarwars.jpg',
            link: 'https://www.playstation.com/en-us/games/lego-star-wars-the-skywalker-saga/',
        },
        {
            title: 'Super Mario Odyssey',
            system: 'Nintendo Switch',
            cover: 'marioodyssey.jpg',
            link: 'https://www.nintendo.com/store/products/super-mario-odyssey-switch/',
        },
    ],
};

export default current;
