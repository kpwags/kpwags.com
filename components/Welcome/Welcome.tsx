import styles from './Welcome.module.css';

const Welcome = (): JSX.Element => (
    <section className={styles.welcome}>
        <p>
            Hi! I&apos;m <span className="primary-color">Keith Wagner</span>, a software developer
            in the Philadelphia area. I have a wide variety of interests and will often write about
            them here.
        </p>
    </section>
);

export default Welcome;
