import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'April 2022',
    reading: [
        {
            title: 'Dark Pools: The Rise of the Machine Traders and the Rigging of the U.S. Stock Market',
            author: 'Scott Patterson',
            cover: 'darkpools.jpg',
            link: 'https://bookshop.org/books/dark-pools-the-rise-of-the-machine-traders-and-the-rigging-of-the-u-s-stock-market/9780307887184',
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
            title: 'Elden Ring',
            system: 'PS5',
            cover: 'eldenring.jpg',
            link: 'https://www.playstation.com/en-us/games/elden-ring/',
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
