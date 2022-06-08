import Head from 'next/head';

const About = (): JSX.Element => (
    <div className="about">
        <Head><title>About - Keith Wagner</title></Head>
        <div className="cover about hide-on-mobile" />
        <h1>About Me</h1>

        <p>
            My name is Keith, I&apos;m a 30-something year old web developer living in the suburbs of Philadelphia, Pennsylvania. I graduated
            from Drexel University in 2007 with my Bachelor&apos;s Degree in Computer Science and have since spent my career working on both
            front-end and back-end development. I am fortunate to have found a career where I can do what I love doing. Seeing websites
            and applications come to life is such an awesome thing, even more so when you&apos;re the one building them.
        </p>
        <p>
            I have a wide variety of interests which always keeps me busy. Some of them include: software development, photography,
            writing, hockey, running, cooking, drawing, video games, and more. In reality, it&apos;s too much to constantly keep up with,
            but I stumble through.
        </p>
    </div>
);

export default About;
