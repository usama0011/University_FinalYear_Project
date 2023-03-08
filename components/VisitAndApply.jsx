import styles from '../styles/VisitAndApply.module.css';

const VisitAndApply = () => {
  return (
    <div className={styles.container} style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundSize: 'cover' }}>
      <div className={styles.contentWrapper}>
        <span className={styles.getStarted}>GET STARTED</span>
        <h1 className={styles.heading} style={{ color: 'red' }}>VISIT & APPLY</h1>
        <p className={styles.paragraph}>Think Redeemer is right for you? The best way to experience Redeemer is to come for a visit! And when you’re ready, the Admissions team will walk you through each step of the application process.</p>
        <button className={styles.button}>Visit & Apply</button>
      </div>
    </div>
  );
}

export default VisitAndApply;
