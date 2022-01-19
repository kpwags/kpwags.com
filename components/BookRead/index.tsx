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
}

const BookBlock = styled.div`
    display: grid;
    margin: 25px 0;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 12px;

    div.book-description {
        h2 {
            margin-top: 0;
            padding-top: 0;
        }

        em {
            display: block;
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
}: BookReadProps): JSX.Element => (
    <BookBlock>
        <div>
            <Image
                src={coverImageSrc}
                alt={`${title} by ${author}`}
                width={width}
                height={height}
            />
        </div>
        <div className="book-description">
            <h2>{title}</h2>
            <em>by {author}</em>
            <p className="thoughts">{thoughts}</p>
        </div>
    </BookBlock>
);

export default BookRead;
