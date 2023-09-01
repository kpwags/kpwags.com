import {
    NotionLink,
    NotionPlainText,
    NotionTitle,
    NotionNumber,
    NotionDate,
} from './NotionShared';

export interface NotionMovie {
    id: string;
    properties: {
        Name: NotionTitle;
        CoverUrl: NotionLink;
        Thoughts: NotionPlainText;
        ImdbLink: NotionLink;
        Rating: NotionNumber;
        DateWatched: NotionDate;
    };
}

export interface NotionMovieApiResponse {
    nextCursor: string | null;
    results: NotionMovie[];
}
