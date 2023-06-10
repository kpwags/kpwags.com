/* eslint-disable camelcase */
import {
    NotionFile,
    NotionMutliSelect,
    NotionPlainText,
    NotionTitle,
} from './NotionShared';

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

interface NotionNumberedListItem {
    rich_text: { plain_text: string }[];
}

export interface NotionPageBlocks {
    numbered_list_item: NotionNumberedListItem;
}

export interface NotionMusicApiResponse {
    hasMore: boolean;
    nextCursor: string | null;
    results: NotionMusic[];
}
