import { ReactNode } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type BookReadProps = {
    title: string
    author: string
    coverImageSrc: string
    width: number
    height: number
    thoughts: string | ReactNode
    link?: string
}

const BookBlock = styled.div`
    display: grid;
    margin: 25px 0;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 25px;

    div.book-description {
        h2 {
            margin-top: 0;
            padding-top: 0;

            a {
                color: var(--primary-color-2);

                &:hover {
                    color: var(--primary-color-1);
                }
            }
        }

        p.meta {
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
    }

    @media all and (max-width: 767px) {
        display: block;

        div.book-image {
            display: none;
        }
    }
`;

const BookRead = ({
    title,
    author,
    coverImageSrc,
    width,
    height,
    thoughts,
    link,
}: BookReadProps): JSX.Element => (
    <BookBlock>
        <div className="book-image">
            <Image
                src={coverImageSrc}
                alt={`${title} by ${author}`}
                width={width}
                height={height}
            />
        </div>
        <div className="book-description">
            <h2>{link ? <a href={link} target="_blank" rel="noreferrer" title="Buy on bookshop.org">{title}</a> : <>{title}</>}</h2>
            <p className="meta">by {author}</p>
            <p className="thoughts">{thoughts}</p>
        </div>
    </BookBlock>
);

export default BookRead;
