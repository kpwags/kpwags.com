import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const PhotosetList = styled.ul`
    margin: 25px 0;
    padding: 15px;
    background: #efefef;
`;

const Photoset = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    line-height: 1;
    margin: 0 0 15px 0;

    &:hover {
        background: #cdcdcd;
    }

    &:last-child {
        margin-bottom: 0px;
    }

    .photoset-info {
        align-self: center;

        h2 {
            margin-bottom: 8px;

            @media all and (max-width: 1023px) {
                font-size: 1.3rem;
            }
        }

        .date {
            margin-bottom: 8px;
        }

        p {
            margin: 0;
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
                <div className="photoset-thumbnail">
                    <Image
                        src={p.thumbnailSrc}
                        alt={`${p.name} (${p.date})`}
                        width={p.width}
                        height={p.height}
                    />
                </div>
                <div className="photoset-info">
                    <h2><Link href={p.link}><a>{p.name}</a></Link></h2>
                    <div className="date"><em>{p.date}</em></div>
                    {p.description ? <p className="description">{p.description}</p> : null}
                </div>
            </Photoset>
        ))}
    </PhotosetList>
);

export default PhotosetListLinks;
