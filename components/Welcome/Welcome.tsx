import styles from './Welcome.module.css';

const Welcome = (): JSX.Element => (
    <section className={styles.welcome}>
        <div className={styles.content}>
            <div className={styles.hello}>
                <img src="/images/keith.png" alt="Keith Wagner" />
            </div>
            <div>Hi! I&apos;m Keith Wagner, a software developer in the Philadelphia area. I am always learning and building new things.</div>
        </div>
    </section>
);

export default Welcome;
