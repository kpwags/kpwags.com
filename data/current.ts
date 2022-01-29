import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'January 2022',
    reading: [
        {
            title: 'Leviathan Falls',
            author: 'James S.A. Corey',
            cover: 'leviathanfalls.jpg',
            link: 'https://bookshop.org/books/leviathan-falls-9781705024997/9780316332910',
            rating: null,
            thoughts: null,
        },
    ],
    watching: [
        {
            title: 'Star Trek: Discovery',
            cover: 'discovery.jpg',
        },
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
            title: 'Halo Infinite Multiplayer Beta',
            system: 'Xbox Series X',
            cover: 'halo-infinite-mp.jpg',
            link: 'https://www.xbox.com/en-US/games/halo-infinite',
        },
        {
            title: 'Halo 3',
            system: 'Xbox Series X',
            cover: 'halo3.jpg',
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
