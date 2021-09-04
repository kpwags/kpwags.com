import Head from 'next/head';
import styled from 'styled-components';
import { BlogPost } from '@models/blogPost';
import { FormEvent, useState } from 'react';
import { getAllPosts } from '@lib/posts';
import PostListing from '@components/PostListing';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();

    return {
        props: {
            posts: blogPosts,
        },
    };
};

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 25px 0;
`;

const SearchForm = styled.form`
    input {
        padding: 10px;
        border-radius: 2px;
        width: 300px;
        border: 1px solid ${({ theme }) => theme.colors.darkGray};
        margin-right: 15px;
    }

    button {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: #fefefe;
        border:none;
        padding: 10px 15px;
        font-weight: normal;
        cursor: pointer;

        &:hover {
            background: ${({ theme }) => theme.colors.blue};
        }
    }
`;

interface SearchProps {
    posts: BlogPost[];
}

const Search = ({ posts }: SearchProps): JSX.Element => {
    const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const keywordsField = document.getElementById('keywords') as HTMLInputElement;
        const keywords = keywordsField.value.toLowerCase();

        const results: BlogPost[] = [];

        posts.forEach((p) => {
            if (p.content.toLowerCase().includes(keywords) || p.title.toLowerCase().includes(keywords)) {
                results.push(p);
            }
        });

        setSearchResults(results);
        setHasSearched(true);
    };

    return (
        <>
            <Head><title>Search - Keith Wagner</title></Head>
            <main>
                <h1>Search</h1>

                <SearchContainer>
                    <SearchForm onSubmit={search}>
                        <input
                            id="keywords"
                            name="keywords"
                            type="text"
                            placeholder="Search"
                            aria-label="Search Keywords"
                            required
                        />
                        <button type="submit">Search</button>
                    </SearchForm>
                </SearchContainer>

                {hasSearched && searchResults.length === 0 ? (
                    <>
                        <h2>Search Results</h2>
                        <p><em>No Results</em></p>
                    </>
                ) : null}

                {hasSearched && searchResults.length > 0
                    ? (
                        <>
                            <h2>Search Results</h2>
                            {searchResults.map((p) => (<PostListing key={p.id} post={p} />))}
                        </>
                    ) : null}
            </main>
        </>
    );
};

export default Search;
