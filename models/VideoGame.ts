export interface VideoGame {
    id: string;
    title: string;
    platform: string;
    coverUrl: string;
    rating: number | null;
    thoughts: string | null;
    status: 'current' | 'past';
    completed: 'Yes' | 'No' | 'N/A';
    link: string | null;
}
