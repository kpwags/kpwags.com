import styled from 'styled-components';

type PodcastProps = {
    podcastName: string;
    link: string;
    artwork: string;
};

const Item = styled.div`
    font-size: 1.1rem;
    width: 150px;
    text-align: center;
    vertical-align: top;
    line-height: 1.3;

    @media all and (max-width: 1023px) {
        width: 100px;
    }

    @media all and (max-width: 767px) {
        text-align: left;
        display: block;
        margin: 20px 0 20px 0;
        width: 100%;

        a {
            padding-left: 12px;
        }
    }

    img {
        border: 1px solid #bcbcbc;
        margin-bottom: 5px;
        width: 150px;
        height: 150px;

        :hover {
            animation: pulse-animation 2s infinite;
        }

        @media all and (max-width: 1023px) {
            width: 100px;
            height: 100px;
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

const Podcast = ({ podcastName, link, artwork }: PodcastProps): JSX.Element => (
    <Item>
        <a href={link} title={podcastName} target="_blank" rel="noreferrer">
            <picture>
                <source srcSet={`/images/podcasts/${artwork}`} media="(min-width: 767px)" />
                <img src="/images/1x1.png" alt={podcastName} />
            </picture>
        </a>
        <a href={link} title={podcastName} target="_blank" rel="noreferrer">
            {podcastName}
        </a>
    </Item>
);

export default Podcast;