import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'February 2022',
    reading: [
        {
            title: 'Nudge: The Final Edition',
            author: 'Richard Thaler & Cass Sunstein',
            cover: 'nudge.jpg',
            link: 'https://bookshop.org/books/nudge-the-final-edition/9780143137009',
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
            title: 'The Middle',
            cover: 'themiddle.jpg',
        },
        {
            title: 'Challenger: Final Flight',
            cover: 'challengerfinalflight.jpg',
        },
    ],
    playing: [
        {
            title: 'Halo Infinite',
            system: 'Xbox Series X',
            cover: 'halo-infinite-mp.jpg',
            link: 'https://www.xbox.com/en-US/games/halo-infinite',
        },
        {
            title: 'Halo 3 ODST',
            system: 'Xbox Series X',
            cover: 'odst.jpg',
            link: 'https://www.xbox.com/en-us/games/store/halo-the-master-chief-collection/9ntm9hxnlszx',
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
