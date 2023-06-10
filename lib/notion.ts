import { MusicAlbum } from '@models/MusicAlbum';
import { VideoGame } from '@models/VideoGame';
import {
    NotionMusicApiResponse,
    NotionMusic,
    NotionPageBlocks,
} from '@models/NotionMusic';
import { NotionVideoGame, NotionVideoGamesApiResponse } from '@models/NotionVideoGame';
import { Client } from '@notionhq/client';

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
        hasMore,
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
        hasMore,
        nextCursor,
        results: games,
    };
};

export const getMusic = async (): Promise<MusicAlbum[]> => {
    const albums: MusicAlbum[] = [];

    let hasMore = false;
    let nextCursor;

    const response = await fetchMusicFromNotion();

    hasMore = response.hasMore;
    nextCursor = response.nextCursor;

    response.results.forEach((m) => {
        albums.push({
            id: m.id,
            artist: m.properties.Artist.rich_text[0].plain_text,
            title: m.properties.Album.title[0].plain_text,
            coverUrl: m.properties.AlbumArt.files[0].file.url,
            genres: m.properties.Genre.multi_select.map((i) => i.name),
            formats: m.properties.Format.multi_select.map((i) => i.name),
            sortedName: getSortedName(m.properties.Artist.rich_text[0].plain_text),
        });
    });

    while (hasMore) {
        // eslint-disable-next-line no-await-in-loop
        const resp = await fetchMusicFromNotion(nextCursor) as NotionMusicApiResponse;

        hasMore = resp.hasMore;
        nextCursor = resp.nextCursor;

        resp.results.forEach((m) => {
            albums.push({
                id: m.id,
                artist: m.properties.Artist.rich_text[0].plain_text,
                title: m.properties.Album.title[0].plain_text,
                coverUrl: m.properties.AlbumArt.files[0].file.url,
                genres: m.properties.Genre.multi_select.map((i) => i.name),
                formats: m.properties.Format.multi_select.map((i) => i.name),
                sortedName: getSortedName(m.properties.Artist.rich_text[0].plain_text),
            });
        });
    }

    return albums
        .sort((a, b) => {
            if (a.sortedName.toLowerCase() > b.sortedName.toLowerCase()) { return 1; }
            if (a.sortedName.toLowerCase() < b.sortedName.toLowerCase()) { return -1; }
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }

            return 0;
        });
};

type AlbumId = {
    params: {
        id: string
    }
}

export const getAllAlbumIds = async (): Promise<AlbumId[]> => {
    const albumIds: string[] = [];

    let hasMore = false;
    let nextCursor;

    const response = await fetchMusicFromNotion();

    hasMore = response.hasMore;
    nextCursor = response.nextCursor;

    response.results.forEach((m) => {
        albumIds.push(m.id);
    });

    while (hasMore) {
        // eslint-disable-next-line no-await-in-loop
        const resp = await fetchMusicFromNotion(nextCursor) as NotionMusicApiResponse;

        hasMore = resp.hasMore;
        nextCursor = resp.nextCursor;

        resp.results.forEach((m) => {
            albumIds.push(m.id);
        });
    }

    return albumIds.map((id) => ({
        params: {
            id,
        },
    }));
};

const getTracks = (trackListing: NotionPageBlocks[]): string[] => {
    const tracks: string[] = [];

    trackListing.forEach((tl) => {
        if (tl.numbered_list_item && tl.numbered_list_item.rich_text.length > 0) {
            tracks.push(tl.numbered_list_item.rich_text[0].plain_text);
        }
    });

    return tracks;
};

export const getAlbumDetails = async (id: string): Promise<MusicAlbum> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.pages.retrieve({ page_id: id });

    const albumDetails = response as unknown as NotionMusic;

    const pageBlocksResponse = await notion.blocks.children.list({
        block_id: id,
        page_size: 75,
    });

    const trackListing = pageBlocksResponse.results as unknown as NotionPageBlocks[];
    const tracks = getTracks(trackListing);

    return {
        id: albumDetails.id,
        artist: albumDetails.properties.Artist.rich_text[0].plain_text,
        title: albumDetails.properties.Album.title[0].plain_text,
        coverUrl: albumDetails.properties.AlbumArt.files[0].file.url,
        genres: albumDetails.properties.Genre.multi_select.map((i) => i.name),
        formats: albumDetails.properties.Format.multi_select.map((i) => i.name),
        sortedName: getSortedName(albumDetails.properties.Artist.rich_text[0].plain_text),
        tracks,
    };
};

const mapResultToVideoGame = (result: NotionVideoGame): VideoGame => ({
    id: result.id,
    title: result.properties.Name.title[0].plain_text,
    coverUrl: result.properties.Cover.files[0].file.url,
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

    let hasMore = false;
    let nextCursor;

    const response = await fetchVideoGamesFromNotion();

    hasMore = response.hasMore;
    nextCursor = response.nextCursor;

    response.results.forEach((vg) => {
        games.push(mapResultToVideoGame(vg));
    });

    while (hasMore) {
        // eslint-disable-next-line no-await-in-loop
        const resp = await fetchVideoGamesFromNotion(nextCursor) as NotionVideoGamesApiResponse;

        hasMore = resp.hasMore;
        nextCursor = resp.nextCursor;

        resp.results.forEach((vg) => {
            games.push(mapResultToVideoGame(vg));
        });
    }

    return games;
};
