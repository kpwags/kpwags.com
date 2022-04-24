import { TVShow } from '@models/tvShow';
import styled from 'styled-components';

type TVListingProps = {
    tvShow: TVShow
}

const Item = styled.div`
    font-size: 1.25rem;
    width: 250px;
    text-align: center;
    vertical-align: top;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.blue};

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

const TVListing = ({ tvShow }: TVListingProps): JSX.Element => (
    <Item>
        <picture>
            <source srcSet={`/images/tv/${tvShow.cover}`} media="(min-width: 767px)" />
            <img src="/images/1x1.png" alt={tvShow.title} />
        </picture>

        <span>{tvShow.title}</span>
    </Item>
);

export default TVListing;
