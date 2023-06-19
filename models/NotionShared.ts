/* eslint-disable camelcase */
export interface NotionTitle {
    id: string;
    title: { plain_text: string; }[];
}

export interface NotionMutliSelect {
    id: string;
    multi_select: { id: string; name: string; }[];
}

export interface NotionLink {
    id: string;
    url: string | null;
}

export interface NotionDate {
    id: string;
    date: {
        start: string | null
    } | null;
}

export interface NotionNumber {
    id: string;
    number: number | null;
}

export interface NotionSelect {
    id: string;
    select: { name: string }
}

export interface NotionPlainText {
    id: string;
    rich_text: {
        plain_text: string | null;
    }[];
}

export interface NotionFile {
    id: string;
    files: {
        name: string;
        file: {
            url: string,
        }
    }[];
}
