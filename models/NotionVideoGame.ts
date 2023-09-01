import {
    NotionLink,
    NotionNumber,
    NotionPlainText,
    NotionTitle,
} from './NotionShared';

export interface NotionSelectPlatform {
    id: string;
    select: { name: 'PC' | 'PlayStation' | 'Switch' | 'Xbox' }
}

export interface NotionSelectStatus {
    id: string;
    select: { name: 'Completed' | 'Maybe Later' | 'Current' }
}

export interface NotionSelectCompleted {
    id: string;
    select: { name: 'Yes' | 'No' | 'N/A' }
}

export interface NotionVideoGame {
    id: string;
    properties: {
        Name: NotionTitle;
        CoverUrl: NotionLink;
        Thoughts: NotionPlainText;
        Link: NotionLink;
        Rating: NotionNumber;
        Platform: NotionSelectPlatform;
        Completed: NotionSelectCompleted;
        Status: NotionSelectStatus;
    };
}

export interface NotionVideoGamesApiResponse {
    nextCursor: string | null;
    results: NotionVideoGame[];
}
