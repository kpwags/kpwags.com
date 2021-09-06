import StarRating from '@components/StarRating/StarRating';
import { Book } from '@models/book';
import { FC, useState } from 'react';
import styled from 'styled-components';

type BookListingProps = {
    book: Book,
    includeReview?: boolean,
}

const Item = styled.div`
    font-size: 1.1rem;
    text-align: center;
    vertical-align: top;
    line-height: 1.3;

    @media all and (max-width: 1023px) {
        width: 150px;
    }

    @media all and (max-width: 767px) {
        text-align: left;
        font-size: 1.3rem;
        display: block;
        margin: 30px 0;
        width: 100%;
    }

    img.cover {
        border: 1px solid #bcbcbc;
        margin: 0 auto 5px;
        max-height:300px;
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

const BookListing: FC<BookListingProps> = ({ book, includeReview = false }) => {
    const [showThoughts, setShowThoughts] = useState(false);

    return (
        <Item>
            <a href={book.link} target="_blank" rel="noreferrer">
                <picture>
                    <source srcSet={`/images/books/${book.cover}`} media="(min-width: 767px)" />
                    <img src="/images/1x1.png" alt={book.title} className="cover" />
                </picture>
            </a>

            <a href={book.link} target="_blank" rel="noreferrer">
                {book.title}
            </a>

            {includeReview && book.rating !== null && (
                <>
                    <StarRating rating={book.rating} />

                    {book.thoughts !== null && (
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
                            <div className="thoughts" hidden={!showThoughts}>{book.thoughts}</div>
                        </div>
                    )}
                </>
            )}
        </Item>
    );
};

export default BookListing;
