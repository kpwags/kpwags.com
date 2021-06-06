import { Movie } from '@models/movie';
import { FC, useState } from 'react';
import styled from 'styled-components';

type MovieListingProps = {
    movie: Movie
}

const Item = styled.div`
    font-size: 1.25rem;
    text-align: center;
    vertical-align: top;
    line-height: 1.3;

    @media all and (max-width: 1023px) {
        width: 150px;
    }

    @media all and (max-width: 767px) {
        text-align: left;
        display: block;
        margin: 20px 0 20px 0;
        width: 100%;
    }

    img {
        border: 1px solid #bcbcbc;
        margin: 0 auto 5px;
        max-height:200px;
        display: block;

        :hover {
            animation: pulse-animation 2s infinite;
        }

        @media all and (max-width: 1023px) {
            max-height: 100px;
        }

        @media all and (max-width: 767px) {
            display: none;
        }

        @keyframes pulse-animation {
            0% {
                box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
            }
            100% {
                box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
            }
        }
    }

    .dateWatched {
        font-style: italic;
        margin: 5px 0;
        font-size: 1.05rem;
        color: ${({ theme }) => theme.colors.darkGray};
    }

    .viewThoughts {
        margin: 8px 0;
        font-size: 1.05rem;

        button {
            background: none !important;
            color: inherit;
            border: none;
            padding: 0 !important;
            font: inherit;
            cursor: pointer;
            color: ${({ theme }) => theme.colors.blue};
        }

        .thoughts {
            line-height: 1.5;
            margin: 10px 0;
            border: 1px solid ${({ theme }) => theme.colors.mediumBlue};
            padding: 10px;
            border-radius: 6px;
            background: rgba(200, 200, 200, 0.2);
        }
    }
`;

const MovieListing: FC<MovieListingProps> = ({ movie }) => {
    const [showThoughts, setShowThoughts] = useState(false);

    return (
        <Item>
            <a href={movie.link} target="_blank" rel="noreferrer">
                <picture>
                    <source srcSet={`/images/movies/${movie.cover}`} media="(min-width: 767px)" />
                    <img src="/images/1x1.png" alt={movie.title} />
                </picture>
            </a>

            <a href={movie.link} target="_blank" rel="noreferrer">
                {movie.title}
            </a>

            <div className="dateWatched">
                {movie.dateWatched}
            </div>

            {movie.thoughts !== null && (
                <div className="viewThoughts">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowThoughts(!showThoughts);
                        }}
                    >
                        {showThoughts ? 'Hide Thoughts' : 'View Thoughts'}
                    </button>
                    <div className="thoughts" hidden={!showThoughts}>{movie.thoughts}</div>
                </div>
            )}
        </Item>
    );
};

export default MovieListing;
