import {
    NotionLink,
    NotionPlainText,
    NotionTitle,
    NotionNumber,
    NotionDate,
} from './NotionShared';

export interface NotionSelectStatus {
    id: string;
    select: { name: 'Completed' | 'In Progress' }
}

export interface NotionBook {
    id: string;
    properties: {
        Name: NotionTitle;
        Author: NotionPlainText;
        CoverUrl: NotionLink;
        Thoughts: NotionPlainText;
        Link: NotionLink;
        Rating: NotionNumber;
        Status: NotionSelectStatus;
        DateFinished: NotionDate;
        ReviewUrlSlug: NotionPlainText;
    };
}

export interface NotionBooksApiResponse {
    nextCursor: string | null;
    results: NotionBook[];
}
