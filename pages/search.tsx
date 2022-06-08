import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { BlogPost } from '@models/BlogPost';
import { useEffect, useState } from 'react';
import { getAllPosts } from '@lib/Posts';
import PostListing from '@components/PostListing';
import { GetStaticProps } from 'next';
import SearchForm from '@components/SearchForm';

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

interface SearchProps {
    posts: BlogPost[];
}

const Search = ({ posts }: SearchProps): JSX.Element => {
    const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const { query } = useRouter();

    const search = (keywords: string) => {
        const results: BlogPost[] = [];

        posts.forEach((p) => {
            if (p.content.toLowerCase().includes(keywords.toLowerCase()) || p.title.toLowerCase().includes(keywords.toLowerCase())) {
                results.push(p);
            }
        });

        setSearchResults(results);
        setHasSearched(true);
    };

    useEffect(() => {
        if (query.q) {
            const q = query.q.toString();
            const searchTerms = decodeURI(q);
            search(searchTerms);

            const searchField = document.getElementById('main-search') as HTMLInputElement;
            searchField.value = searchTerms;
        }
    }, [query.q]);

    return (
        <>
            <Head><title>Search - Keith Wagner</title></Head>
            <h1>Search</h1>

            <SearchContainer>
                <SearchForm
                    id="main-search"
                    onSearch={search}
                />
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
        </>
    );
};

export default Search;
