import styled from 'styled-components';

export const Photoset = styled.main`
    width: 1280px;
    margin: 0 auto;
    padding: 0 10px;

    @media all and (max-width: 1280px) {
        width: 1024px;
    }

    @media all and (max-width: 1060px) {
        width: 960px;
    }

    @media all and (max-width: 1023px) {
        width: 100%;
        padding: 0 20px;
        margin: 0;
    }

    .meta {
        margin: 8px 0 25px;
        font-size: 1.2rem;
        font-style: italic;
    }
`;

export const PhotosetDescription = styled.div`
    margin: 25px 0;

    p {
        font-size: 1.15rem;
    }
`;
