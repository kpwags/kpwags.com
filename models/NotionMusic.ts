/* eslint-disable camelcase */
interface NotionTitle {
    id: string;
    title: { plain_text: string; }[];
}

interface NotionMutliSelect {
    id: string;
    multi_select: { id: string; name: string; }[];
}

interface NotionPlainText {
    id: string;
    rich_text: {
        plain_text: string;
    }[];
}

interface NotionFile {
    id: string;
    files: {
        name: string;
        file: {
            url: string,
        }
    }[];
}

export interface NotionMusic {
    id: string;
    properties: {
        AlbumArt: NotionFile;
        Artist: NotionPlainText;
        Genre: NotionMutliSelect;
        Format: NotionMutliSelect;
        Album: NotionTitle;
    };
}
