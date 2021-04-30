import React from 'react';
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

        @media all and (max-width: 1023px) {
            width: 100px;
            height: 100px;
        }

        @media all and (max-width: 767px) {
            display: none;
        }
    }
`;

const Podcast: React.FC<PodcastProps> = ({ podcastName, link, artwork }) => (
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
