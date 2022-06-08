import StarRating from '@components/StarRating';
import { Media } from '@models/media';
import { useState } from 'react';
import styled from 'styled-components';

type MediaListingProps = {
    media: Media,
    includeReview?: boolean,
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

const MediaListing = ({ media, includeReview = false }: MediaListingProps): JSX.Element => {
    const [showThoughts, setShowThoughts] = useState(false);

    return (
        <Item>
            <div>
                <a href={media.link} target="_blank" rel="noreferrer">
                    <img src={`/images/${media.imageFolder}/${media.cover}`} alt={media.title} className="cover" />
                </a>
            </div>
            <div>
                <a href={media.link} target="_blank" rel="noreferrer">
                    {media.title}
                </a>

                {media.author ? <div className="meta">{media.author}</div> : null}

                {media.dateWatched ? <div className="meta">{media.dateWatched}</div> : null}

                {media.system ? <div className="meta">{media.system}</div> : null}

                {includeReview && media.rating !== null && (
                    <>
                        <StarRating rating={media.rating} />

                        {media.thoughts !== null && (
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
                                <div className="thoughts" hidden={!showThoughts}>{media.thoughts}</div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Item>
    );
};

export default MediaListing;
