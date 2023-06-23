import {
    NotionLink,
    NotionNumber,
    NotionPlainText,
    NotionTitle,
} from './NotionShared';

export interface NotionSelectTvStatus {
    id: string;
    select: { name: 'Completed' | 'In Progress' | 'Between Seasons' }
}

export interface NotionTv {
    id: string;
    properties: {
        Name: NotionTitle;
        CoverUrl: NotionLink;
        Thoughts: NotionPlainText;
        Link: NotionLink;
        Rating: NotionNumber;
        Status: NotionSelectTvStatus;
    };
}

export interface NotionTvApiResponse {
    hasMore: boolean;
    nextCursor: string | null;
    results: NotionTv[];
}
