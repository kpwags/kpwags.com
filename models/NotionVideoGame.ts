import {
    NotionFile,
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
        Cover: NotionFile;
        Thoughts: NotionPlainText;
        Link: NotionLink;
        Rating: NotionNumber;
        Platform: NotionSelectPlatform;
        Completed: NotionSelectCompleted;
        Status: NotionSelectStatus;
    };
}

export interface NotionVideoGamesApiResponse {
    hasMore: boolean;
    nextCursor: string | null;
    results: NotionVideoGame[];
}
