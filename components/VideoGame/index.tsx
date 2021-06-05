import { Game } from '@models/game';
import { FC } from 'react';
import styled from 'styled-components';

type GameProps = {
    game: Game
}

const Item = styled.div`
    font-size: 1.1rem;
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

const VideoGame: FC<GameProps> = ({ game }) => (
    <Item>
        <a href={game.link} target="_blank" rel="noreferrer">
            <picture>
                <source srcSet={`/images/games/${game.cover}`} media="(min-width: 767px)" />
                <img src="/images/1x1.png" alt={game.title} />
            </picture>
        </a>

        <a href={game.link} target="_blank" rel="noreferrer">
            {game.title}
            <br />
            <span>
                (
                {game.system}
                )
            </span>
        </a>
    </Item>
);

export default VideoGame;
