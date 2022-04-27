import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'April 2022',
    reading: [
        {
            title: 'The Passion Economy: The New Rules for Thriving in the Twenty-First Century',
            author: 'Adam Davidson',
            cover: 'passioneconomy.jpg',
            link: 'https://bookshop.org/books/the-passion-economy-the-new-rules-for-thriving-in-the-twenty-first-century/9780804172776',
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
            title: 'Star Trek: Enterprise',
            cover: 'startrekenterprise.jpg',
        },
        {
            title: 'Halo',
            cover: 'halo.jpg',
        },
        {
            title: 'Star Trek: Picard',
            cover: 'picard.jpg',
        },
        {
            title: 'Challenger: Final Flight',
            cover: 'challengerfinalflight.jpg',
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
            title: 'Mass Effect',
            system: 'Xbox Series X',
            cover: 'masseffect.jpg',
            link: 'https://www.ea.com/games/mass-effect/mass-effect-legendary-edition',
        },
    ],
};

export default current;
