import StarRating from '@components/StarRating';
import { Game } from '@models/Game';
import { useState } from 'react';
import styled from 'styled-components';

type VideoGameListingProps = {
    game: Game;
}

const Item = styled.div`
    font-size: 1.1rem;
    text-align: center;
    vertical-align: top;
    line-height: 1.3;

    @media all and (max-width: 767px) {
        text-align: left;
        font-size: 1.3rem;
        display: block;
        margin: 30px 0;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1.5rem;
    }

    img.cover {
        border: 1px solid #bcbcbc;
        margin: 0 auto 1rem;
        display: block;
        max-height: 300px;

        :hover {
            animation: pulse-animation 2s infinite;
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

    a {
        font-size: 1.25rem;
    }

    .meta {
        margin: 0.6rem 0;
        color: var(--meta);
        font-style: italic;

        @media all and (max-width: 767px) {
            font-size: 1.1rem;
        }
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
            color: var(--green-1);
        }

        .thoughts {
            line-height: 1.5;
            margin: 10px 0;
            border: 1px solid var(--green-2);
            padding: 10px;
            border-radius: 6px;
            background: rgba(200, 200, 200, 0.2);
        }
    }
`;

const VideoGameListing = ({ game }: VideoGameListingProps): JSX.Element => {
    const [showThoughts, setShowThoughts] = useState(false);

    const getPlayedIcon = (g: Game): string | null => {
        switch (g.finished) {
            case 'yes':
                return ' ✅';
            case 'no':
                return ' ❌';
            case 'n/a':
            default:
                return null;
        }
    };

    return (
        <Item>
            <div>
                <a href={game.link} target="_blank" rel="noreferrer">
                    <img src={`/images/${game.imageFolder}/${game.cover}`} alt={game.title} className="cover" />
                </a>
            </div>
            <div>
                <a href={game.link} target="_blank" rel="noreferrer">
                    {game.title}
                </a>

                {getPlayedIcon(game)}

                {game.author ? <div className="meta">{game.author}</div> : null}

                {game.dateWatched ? <div className="meta">{game.dateWatched}</div> : null}

                {game.system ? <div className="meta">{game.system}</div> : null}

                {(game.rating !== null || game.thoughts !== null) ? (
                    <>
                        {game.rating !== null ? <StarRating rating={game.rating} /> : null}

                        {game.thoughts !== null && (
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
                                <div className="thoughts" hidden={!showThoughts}>{game.thoughts}</div>
                            </div>
                        )}
                    </>
                ) : null}
            </div>
        </Item>
    );
};

export default VideoGameListing;
