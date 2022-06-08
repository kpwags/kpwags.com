import styled from 'styled-components';
import Link from 'next/link';

const PhotoLink = styled.div`
    position: relative;
    width: 100%;
    margin: 25px 0;

    .overlay {
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
    }

    .title {
        position: absolute;
        width: 100%;
        text-align: center;

        h2 {
            font-weight: bold;
            font-size: 2.4rem;
            text-shadow: 2px 2px  hsla(0, 0%, 0%,1);
        }

        h3 {
            text-shadow: 2px 2px  hsla(0, 0%, 0%,1);
        }
    }
`;

interface PhotosetLinkProps {
    name: string
    date: string
    photoSource: string
    width?: number | string
    height?: number | string
    link: string
    titleColor?: string
    titlePosition?: 'top' | 'bottom'
}

const LargePhotosetLink = ({
    name,
    date,
    photoSource,
    width,
    height,
    link,
    titlePosition = 'bottom',
    titleColor = '#FFF',
}: PhotosetLinkProps): JSX.Element => {
    const altText = `${name} (${date})`;

    return (
        <PhotoLink>
            <Link href={link}>
                <a>
                    <img
                        src={photoSource}
                        alt={altText}
                        width={width}
                        height={height}
                    />
                    <div className="overlay">
                        <div className="title" style={titlePosition === 'top' ? { top: 15 } : { bottom: 15 }}>
                            <h2 style={{ color: titleColor }}>
                                <span style={{ color: titleColor }}>{name}</span>
                            </h2>
                            <h3 style={{ color: titleColor }}>{date}</h3>
                        </div>
                    </div>
                </a>
            </Link>
        </PhotoLink>
    );
};

export default LargePhotosetLink;
