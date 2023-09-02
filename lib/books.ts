import { BookPage } from '@models/BookPage';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

type BookId = {
    params: {
        slug: string
    }
}

const booksDirectory = path.join(process.cwd(), 'books');

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

export const getBookData = async (slug: string) : Promise<BookPage> => {
    const fullPath = path.join(booksDirectory, `${slug}.mdx`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents);

    let wordCount = null;
    let readingTime = null;

    if (!data.ignoreWordCount) {
        wordCount = content.split(' ').length - 1;
        readingTime = Math.round(wordCount / 200);

        if (readingTime === 0) {
            readingTime = 1;
        }
    }

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
    };
};
