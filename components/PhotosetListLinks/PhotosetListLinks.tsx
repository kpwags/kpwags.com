import styled from 'styled-components';
import Link from 'next/link';

const PhotosetList = styled.ul`
    margin: 25px 0;
    padding: 15px;
    background: var(--photoset-list-bg);
`;

const Photoset = styled.li`
    list-style-type: none;
    margin: 0 0 15px 0;

    &:last-child {
        margin-bottom: 0;
    }

    a {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 20px;
        grid-row-gap: 0px;
        line-height: 1;

        &:hover {
            background: var(--photoset-list-hover-bg);
            text-decoration: none;
        }

        &:last-child {
            margin-bottom: 0px;
        }

        .photoset-info {
            align-self: center;

            h2 {
                margin-bottom: 8px;
                color: var(--primary-color-1);

                @media all and (max-width: 1023px) {
                    font-size: 1.3rem;
                }
            }

            .date {
                margin-bottom: 8px;
                color: var(--text);
            }

            p {
                margin: 0;
                color: var(--text);
            }
        }
    }
`;

interface PhotosetListLinksProps {
    photosets: {
        name: string
        date: string
        link: string
        thumbnailSrc: string
        width: number
        height: number
        description?: string
    }[]
}

const PhotosetListLinks = ({ photosets }: PhotosetListLinksProps): JSX.Element => (
    <PhotosetList>
        {photosets.map((p) => (
            <Photoset key={`${p.name} (${p.date})`}>
                <Link href={p.link}>
                    <a>
                        <div className="photoset-thumbnail">
                            <img
                                src={p.thumbnailSrc}
                                alt={`${p.name} (${p.date})`}
                                width="100%"
                            />
                        </div>
                        <div className="photoset-info">
                            <h2>{p.name}</h2>
                            <div className="date"><em>{p.date}</em></div>
                            {p.description ? <p className="description">{p.description}</p> : null}
                        </div>
                    </a>
                </Link>
            </Photoset>
        ))}
    </PhotosetList>
);

export default PhotosetListLinks;
