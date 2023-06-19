export interface Book {
    id: string;
    title: string;
    author: string;
    link: string;
    coverUrl: string;
    rating: number;
    thoughts: string | null;
    status: 'current' | 'read';
    yearRead: number | null;
}
