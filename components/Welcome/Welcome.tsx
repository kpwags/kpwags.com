import styles from './Welcome.module.css';

const Welcome = (): JSX.Element => (
    <section className={styles.welcome}>
        <div className={styles.content}>
            <div className={styles.hello}>
                <img src="/images/keith.png" alt="Keith Wagner" />
            </div>
            <div>
                Hi! I&apos;m <span className="primary-color">Keith Wagner</span>, a software developer in the Philadelphia area.
            </div>
        </div>
    </section>
);

export default Welcome;
