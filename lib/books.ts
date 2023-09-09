import { BookNote } from '@models/BookNote';
import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { BlogPost } from '@models/blogPost';
import { getPostExcerpt } from './utilities';
import { postsPerPage } from './config';

type BookId = {
    params: {
        slug: string
    }
}

const booksDirectory = path.join(process.cwd(), 'content', 'book-notes');

export const getAllBookSlugs = (): BookId[] => {
    const fileNames = fs.readdirSync(booksDirectory);

    return fileNames.map((filename) => {
        const slug = filename.replace(/\.mdx$/, '');

        return ({
            params: {
                slug,
            },
        });
    });
};

export const getBookData = async (slug: string) : Promise<BookNote> => {
    const fullPath = path.join(booksDirectory, `${slug}.mdx`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents);

    const html = marked(content);
    const excerpt = getPostExcerpt(html);

    const mdx = await serialize(content, {
        scope: data,
        mdxOptions: {
            useDynamicImport: true,
        },
    });

    // Combine the data with the id
    return {
        title: data.title,
        author: data.author,
        categories: (data.categories || []),
        links: (data.links || []),
        coverImage: data.coverImage,
        dateFinished: data.dateFinished,
        rating: data.rating,
        slug,
        content: mdx.compiledSource,
        excerpt,
        url: `/books/${slug}`,
        socialImageUrl: `images/social/book-notes/${slug}.jpg`,
    };
};

export const sortBookNotes = (posts: BookNote[]): BookNote[] => posts.sort((a: BookNote, b: BookNote) => {
    if (a.dateFinished < b.dateFinished) {
        return 1;
    }
    return -1;
});

export const getAllBookNotes = (): BookNote[] => {
    const fileNames = fs.readdirSync(booksDirectory);

    const allBooks: BookNote[] = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(booksDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);

        const html = marked(content);
        const excerpt = getPostExcerpt(html);

        const categories = data.categories || [] as string[];

        return {
            slug,
            title: data.title,
            author: data.author,
            categories,
            links: data.links,
            coverImage: data.coverImage,
            dateFinished: data.dateFinished,
            rating: data.rating,
            content,
            excerpt,
            url: `/books/${slug}`,
            socialImageUrl: `images/social/book-notes/${slug}.jpg`,
        };
    });

    return sortBookNotes(allBooks);
};

export const getPaginatedBookNotes = (page: number, count = postsPerPage): { totalPages: number, bookNotes: BookNote[]} => {
    const bookNotes = getAllBookNotes();

    const start = (page - 1) * 10;
    const end = start + count;

    const maxPage = Math.ceil(bookNotes.length / postsPerPage);

    return {
        totalPages: maxPage,
        bookNotes: bookNotes.slice(start, end),
    };
};

export const getBookNoteCount = (): number => {
    const posts = getAllBookNotes();
    return posts.length;
};

export const getBookNotePages = (): { params: { page: string }}[] => {
    const bookNoteCount = getBookNoteCount();

    const maxPage = Math.ceil(bookNoteCount / postsPerPage);

    const paths = [];

    for (let x = 1; x <= maxPage; x += 1) {
        paths.push(x);
    }

    return paths.map((p) => ({
        params: {
            page: p.toString(),
        },
    }));
};

export const convertToPost = (bookNote: BookNote): BlogPost => {
    const note: BlogPost = {
        id: bookNote.slug,
        title: `Book Note - ${bookNote.title} by ${bookNote.author}`,
        date: bookNote.dateFinished,
        isRssOnly: false,
        excerpt: bookNote.excerpt,
        url: bookNote.url,
        content: bookNote.content,
        description: bookNote.excerpt,
        tags: [],
        wordCount: 0,
        readTime: 0,
        socialImageUrl: bookNote.socialImageUrl,
    };

    return note;
};
