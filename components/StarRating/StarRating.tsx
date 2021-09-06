import styled from 'styled-components';

const Star = styled.img`
    padding: 0 4px;
    margin: 6px 0;
`;

type StarRatingProps = {
    rating: number
};

const StarRating = ({ rating }: StarRatingProps): JSX.Element => {
    const getStars = () => {
        const starsHtml = [];

        for (let i = 0; i < rating; i += 1) {
            starsHtml.push(<Star src="/images/rating-star.png" alt="star" key={i} />);
        }

        return starsHtml;
    };

    return (<div>{getStars()}</div>);
};

export default StarRating;
