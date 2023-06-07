import { MusicAlbum } from '@models/MusicAlbum';
import { NotionMusic } from '@models/NotionMusic';
import { Client } from '@notionhq/client';

const getSortedName = (val: string): string => {
    if (val.startsWith('The ')) {
        return val.substring(4);
    }

    return val;
};

export const getMusic = async (): Promise<MusicAlbum[]> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.MUSIC_DB_ID,
    });

    // console.log({ resp: JSON.stringify(response.results) });

    const music = response.results as unknown as NotionMusic[];

    const albums: MusicAlbum[] = [];

    music.forEach((m) => {
        albums.push({
            id: m.id,
            artist: m.properties.Artist.rich_text[0].plain_text,
            title: m.properties.Album.title[0].plain_text,
            coverUrl: m.properties.AlbumArt.files[0].file.url,
            genre: m.properties.Genre.multi_select.map((i) => i.name),
            formats: m.properties.Format.multi_select.map((i) => i.name),
            sortedName: getSortedName(m.properties.Artist.rich_text[0].plain_text),
        });
    });

    return albums
        .sort((a, b) => {
            if (a.sortedName.toLowerCase() > b.sortedName.toLowerCase()) { return 1; }
            if (a.sortedName.toLowerCase() < b.sortedName.toLowerCase()) { return -1; }
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }

            return 0;
        });
};
