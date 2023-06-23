export interface TV {
    id: string;
    title: string;
    coverUrl: string;
    rating: number | null;
    thoughts: string | null;
    status: 'current' | 'completed' | 'between-seasons';
    link: string | null;
    sortedName: string;
}
