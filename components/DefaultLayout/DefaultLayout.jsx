import Head from 'next/head';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>kpwags</title>
            </Head>
            <main>{children}</main>
        </div>
    );
};

export default DefaultLayout;
