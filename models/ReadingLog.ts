import { BlogTag } from './BlogTag';

export interface ReadingLog {
    id: string;
    title: string;
    number: number;
    date: Date;
    url: string;
    tags: BlogTag[];
    commentIssueNumber: number;
    content: string;
    excerpt: string;
    socialImageUrl?: string;
    readTime?: number;
    description: string;
}
