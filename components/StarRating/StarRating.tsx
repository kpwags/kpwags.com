import { FC } from 'react';
import styled from 'styled-components';

const Star = styled.img`
    padding: 0 4px;
    margin: 6px 0;
`;

type StarRatingProps = {
    rating: number
};

const StarRating: FC<StarRatingProps> = ({ rating }) => {
    const getStars = () => {
        const starsHtml = [];

        for (let i = 0; i < rating; i += 1) {
            starsHtml.push(<Star src="/images/rating-star.png" alt="star" />);
        }

        return starsHtml;
    };

    return (<>{getStars()}</>);
};

export default StarRating;
