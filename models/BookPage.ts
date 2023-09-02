export interface BookPage {
    title: string;
    author: string;
    categories: string[];
    links: { title: string; url: string; }[]
    coverImage: string;
    dateFinished: Date;
    rating: number;
    slug: string;
    content: string;
}
