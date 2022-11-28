import { BlogContext } from '@contexts/BlogContext';
import { useContext } from 'react';
import styled from 'styled-components';

const Rating = styled.div`
    margin: 0.6rem 0;
`;

const Star = styled.img`
    padding: 0 4px;
    display: inline;
`;

type StarRatingProps = {
    rating: number
};

const StarRating = ({ rating }: StarRatingProps): JSX.Element => {
    const { currentTheme, currentColor } = useContext(BlogContext);

    const getStars = () => {
        const starsHtml = [];

        for (let i = 0; i < rating; i += 1) {
            starsHtml.push(<Star src={`/images/rating-star-${currentTheme}-${currentColor}.png`} alt="star" key={i} />);
        }

        return starsHtml;
    };

    return (<Rating>{getStars()}</Rating>);
};

export default StarRating;
