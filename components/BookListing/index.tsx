import { Book } from '@models/book';
import { FC } from 'react';
import styled from 'styled-components';

type BookListingProps = {
    book: Book
}

const Item = styled.div`
    font-size: 1.25rem;
    width: 250px;
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
`;

const BookListing: FC<BookListingProps> = ({ book }) => (
    <Item>
        <a href={book.link} target="_blank" rel="noreferrer">
            <picture>
                <source srcSet={`/images/books/${book.cover}`} media="(min-width: 767px)" />
                <img src="/images/1x1.png" alt={book.title} />
            </picture>
        </a>

        <a href={book.link} target="_blank" rel="noreferrer">
            {book.title}
        </a>
    </Item>
);

export default BookListing;
