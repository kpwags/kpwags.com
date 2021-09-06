import styled from 'styled-components';

export const Photoset = styled.main`
    width: min(100ch, 100vw - 2rem);
        margin: 0 auto;
        padding: 0 10px;

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
