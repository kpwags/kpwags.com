import { MusicAlbum } from '@models/MusicAlbum';
import { VideoGame } from '@models/VideoGame';
import {
    NotionMusicApiResponse,
    NotionMusic,
} from '@models/NotionMusic';
import { NotionVideoGame, NotionVideoGamesApiResponse } from '@models/NotionVideoGame';
import { Client } from '@notionhq/client';
import { NotionBook, NotionBooksApiResponse } from '@models/NotionBook';
import { Book } from '@models/Book';
import { NotionTv, NotionTvApiResponse } from '@models/NotionVideoTv';
import { TV } from '@models/tv';
import { Current } from '@models/Current';
import { Movie } from '@models/movie';
import { NotionMovie, NotionMovieApiResponse } from '@models/NotionMovie';
import dayjs from 'dayjs';

const getSortedName = (val: string): string => {
    if (val.startsWith('The ')) {
        return val.substring(4);
    }

    return val;
};

const fetchMusicFromNotion = async (cursor?: string): Promise<NotionMusicApiResponse> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.MUSIC_DB_ID,
        start_cursor: cursor,
    });

    const hasMore = response.has_more;
    let nextCursor: string | null = null;

    if (hasMore) {
        nextCursor = response.next_cursor;
    }

    const music = response.results as unknown as NotionMusic[];

    return {
        nextCursor,
        results: music,
    };
};

const fetchVideoGamesFromNotion = async (cursor?: string): Promise<NotionVideoGamesApiResponse> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.VIDEOGAMES_DB_ID,
        start_cursor: cursor,
        filter: {
            or: [
                {
                    property: 'Status',
                    select: {
                        equals: 'Current',
                    },
                },
                {
                    property: 'Status',
                    select: {
                        equals: 'Completed',
                    },
                },
                {
                    property: 'Status',
                    select: {
                        equals: 'Maybe Later',
                    },
                },
            ],
        },
        sorts: [
            { property: 'Date Completed', direction: 'descending' },
        ],
    });

    const hasMore = response.has_more;
    let nextCursor: string | null = null;

    if (hasMore) {
        nextCursor = response.next_cursor;
    }

    const games = response.results as unknown as NotionVideoGame[];

    return {
        nextCursor,
        results: games,
    };
};

const fetchCurrentVideoGamesFromNotion = async (): Promise<NotionVideoGame[]> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.VIDEOGAMES_DB_ID,
        filter: {
            property: 'Status',
            select: {
                equals: 'Current',
            },
        },
        sorts: [
            { property: 'Date Completed', direction: 'descending' },
        ],
    });

    const games = response.results as unknown as NotionVideoGame[];

    return games;
};

const fetchBooksFromNotion = async (cursor?: string): Promise<NotionBooksApiResponse> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.BOOKS_DB_ID,
        start_cursor: cursor,
        filter: {
            property: 'Status',
            select: {
                equals: 'Completed',
            },
        },
        sorts: [
            { property: 'DateFinished', direction: 'descending' },
        ],
    });

    let nextCursor: string | null = null;

    if (response.has_more) {
        nextCursor = response.next_cursor;
    }

    const books = response.results as unknown as NotionBook[];

    return {
        nextCursor,
        results: books,
    };
};

const fetchMoviesFromNotion = async (cursor?: string): Promise<NotionMovieApiResponse> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.MOVIE_DB_ID,
        start_cursor: cursor,
        filter: {
            property: 'Status',
            select: {
                equals: 'Watched',
            },
        },
        sorts: [
            { property: 'DateWatched', direction: 'descending' },
        ],
    });

    let nextCursor: string | null = null;

    if (response.has_more) {
        nextCursor = response.next_cursor;
    }

    const movies = response.results as unknown as NotionMovie[];

    return {
        nextCursor,
        results: movies,
    };
};

const fetchCurrentBooksFromNotion = async (): Promise<NotionBook[]> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.BOOKS_DB_ID,
        filter: {
            property: 'Status',
            select: {
                equals: 'In Progress',
            },
        },
    });

    const books = response.results as unknown as NotionBook[];

    return books;
};

const fetchTvFromNotion = async (cursor?: string): Promise<NotionTvApiResponse> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.TV_DB_ID,
        start_cursor: cursor,
        filter: {
            or: [
                {
                    property: 'Status',
                    select: {
                        equals: 'In Progress',
                    },
                },
                {
                    property: 'Status',
                    select: {
                        equals: 'Completed',
                    },
                },
                {
                    property: 'Status',
                    select: {
                        equals: 'Between Seasons',
                    },
                },
            ],
        },
    });

    let nextCursor: string | null = null;

    if (response.has_more) {
        nextCursor = response.next_cursor;
    }

    const tvShows = response.results as unknown as NotionTv[];

    return {
        nextCursor,
        results: tvShows,
    };
};

const fetchCurrentTvFromNotion = async (cursor?: string): Promise<NotionTv[]> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.TV_DB_ID,
        start_cursor: cursor,
        filter: {
            property: 'Status',
            select: {
                equals: 'In Progress',
            },
        },
    });

    const tvShows = response.results as unknown as NotionTv[];

    return tvShows;
};

const mapResultToMusic = (m: NotionMusic): MusicAlbum => ({
    id: m.id,
    artist: m.properties.Artist.rich_text[0].plain_text,
    title: m.properties.Album.title[0].plain_text,
    coverUrl: m.properties.CoverUrl.url,
    genres: m.properties.Genre.multi_select.map((i) => i.name),
    formats: m.properties.Format.multi_select.map((i) => i.name),
    sortedName: getSortedName(m.properties.Artist.rich_text[0].plain_text),
});

export const getMusic = async (): Promise<MusicAlbum[]> => {
    const albums: MusicAlbum[] = [];

    let nextCursor;

    do {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetchMusicFromNotion(nextCursor) as NotionMusicApiResponse;

        nextCursor = response.nextCursor;

        response.results.forEach((m) => {
            albums.push(mapResultToMusic(m));
        });
    } while (nextCursor);

    return albums
        .sort((a, b) => {
            if (a.sortedName.toLowerCase() > b.sortedName.toLowerCase()) { return 1; }
            if (a.sortedName.toLowerCase() < b.sortedName.toLowerCase()) { return -1; }
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }

            return 0;
        });
};

const mapResultToVideoGame = (result: NotionVideoGame): VideoGame => ({
    id: result.id,
    title: result.properties.Name.title[0].plain_text,
    coverUrl: result.properties.CoverUrl.url,
    rating: result.properties.Rating.number,
    // eslint-disable-next-line camelcase
    thoughts: result.properties.Thoughts.rich_text[0]?.plain_text ?? null,
    status: result.properties.Status.select.name === 'Current' ? 'current' : 'past',
    platform: result.properties.Platform.select.name,
    completed: result.properties.Completed.select.name,
    link: result.properties.Link.url,
});

export const getVideoGames = async (): Promise<VideoGame[]> => {
    const games: VideoGame[] = [];

    let nextCursor;

    do {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetchVideoGamesFromNotion(nextCursor) as NotionVideoGamesApiResponse;

        nextCursor = response.nextCursor;

        response.results.forEach((vg) => {
            games.push(mapResultToVideoGame(vg));
        });
    } while (nextCursor);

    return games;
};

const mapResultToBook = (result: NotionBook): Book => ({
    id: result.id,
    title: result.properties.Name.title[0].plain_text,
    author: result.properties.Author.rich_text[0].plain_text,
    coverUrl: result.properties.CoverUrl.url,
    rating: result.properties.Rating.number,
    // eslint-disable-next-line camelcase
    thoughts: result.properties.Thoughts.rich_text[0]?.plain_text ?? null,
    status: result.properties.Status.select.name === 'In Progress' ? 'current' : 'read',
    link: result.properties.Link.url,
    yearRead: result.properties.DateFinished.date ? new Date(result.properties.DateFinished.date.start).getFullYear() : null,
});

export const getBooks = async (): Promise<Book[]> => {
    const books: Book[] = [];

    let nextCursor;

    do {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetchBooksFromNotion(nextCursor) as NotionBooksApiResponse;

        nextCursor = response.nextCursor;

        response.results.forEach((b) => {
            books.push(mapResultToBook(b));
        });
    } while (nextCursor);

    return books;
};

const getStatus = (name: 'Completed' | 'In Progress' | 'Between Seasons'): 'current' | 'completed' | 'between-seasons' => {
    switch (name) {
        case 'Completed':
            return 'completed';
        case 'Between Seasons':
            return 'between-seasons';
        case 'In Progress':
        default:
            return 'current';
    }
};

const mapResultToTvShow = (result: NotionTv): TV => ({
    id: result.id,
    title: result.properties.Name.title[0].plain_text,
    coverUrl: result.properties.CoverUrl.url,
    rating: result.properties.Rating.number,
    // eslint-disable-next-line camelcase
    thoughts: result.properties.Thoughts.rich_text[0]?.plain_text ?? null,
    status: getStatus(result.properties.Status.select.name),
    link: result.properties.Link.url,
    sortedName: getSortedName(result.properties.Name.title[0].plain_text),
});

export const getTvShows = async (): Promise<TV[]> => {
    const tvShows: TV[] = [];

    let nextCursor;

    do {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetchTvFromNotion(nextCursor) as NotionTvApiResponse;

        nextCursor = response.nextCursor;

        response.results.forEach((tv) => {
            tvShows.push(mapResultToTvShow(tv));
        });
    } while (nextCursor);

    return tvShows
        .sort((a, b) => a.sortedName.localeCompare(b.sortedName));
};

export const getCurrentActions = async (): Promise<Current> => {
    const books: Book[] = [];
    const games: VideoGame[] = [];
    const tvShows: TV[] = [];

    const reading = await fetchCurrentBooksFromNotion();

    reading.forEach((b) => {
        books.push(mapResultToBook(b));
    });

    const videoGames = await fetchCurrentVideoGamesFromNotion();

    videoGames.forEach((vg) => {
        games.push(mapResultToVideoGame(vg));
    });

    const tv = await fetchCurrentTvFromNotion();

    tv.forEach((t) => {
        tvShows.push(mapResultToTvShow(t));
    });

    return {
        reading: books.filter((b) => b.status === 'current').sort((a, b) => a.title.localeCompare(b.title)),
        watching: tvShows.filter((t) => t.status === 'current').sort((a, b) => a.title.localeCompare(b.title)),
        playing: games.filter((vg) => vg.status === 'current').sort((a, b) => a.title.localeCompare(b.title)),
    };
};

const mapResultToMovie = (result: NotionMovie): Movie => ({
    id: result.id,
    title: result.properties.Name.title[0].plain_text,
    cover: result.properties.CoverUrl.url,
    rating: result.properties.Rating.number,
    // eslint-disable-next-line camelcase
    thoughts: result.properties.Thoughts.rich_text[0]?.plain_text ?? null,
    link: result.properties.ImdbLink.url,
    dateWatched: result.properties.DateWatched.date ? dayjs(result.properties.DateWatched.date.start).format('MMMM D, YYYY') : null,
    yearWatched: result.properties.DateWatched.date ? dayjs(result.properties.DateWatched.date.start).year() : null,
});

export const getMovies = async (): Promise<Movie[]> => {
    const movies: Movie[] = [];

    let nextCursor;

    do {
        // eslint-disable-next-line no-await-in-loop
        const response = await fetchMoviesFromNotion(nextCursor) as NotionMovieApiResponse;

        nextCursor = response.nextCursor;

        response.results.forEach((m) => {
            movies.push(mapResultToMovie(m));
        });
    } while (nextCursor);

    return movies;
};
