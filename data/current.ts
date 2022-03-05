import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'March 2022',
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
            title: 'Star Trek: Discovery',
            cover: 'discovery.jpg',
        },
        {
            title: 'Star Trek: Picard',
            cover: 'picard.jpg',
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
            title: 'Halo 5',
            system: 'Xbox Series X',
            cover: 'halo5.jpg',
            link: 'https://www.xbox.com/en-us/games/store/halo-5-guardians/brrc2bp0g9p0',
        },
        {
            title: 'Elden Ring',
            system: 'PS5',
            cover: 'eldenring.jpg',
            link: 'https://www.playstation.com/en-us/games/elden-ring/',
        },
    ],
};

export default current;
