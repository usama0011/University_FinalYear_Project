import styles from '../styles/Education.module.css'

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>Education: The Whole Person</h1>
        </div>
        <div className={styles.description}>
          <div className={styles.yellowLine}></div>
          <p>
            At Redeemer, education is about understanding a complex global world, thinking critically from a kingdom perspective, and following Christ’s call to transform culture and communities. Rooted in a distinctly Christ-centred Core Curriculum, a degree in one of 34 majors and streams offers experiential learning opportunities and a cross-functional set of knowledge. Wrapped in a spiritually vibrant campus community, your education will provide invaluable skills and prepare you for a rapidly changing future, wherever God calls you.
          </p>
        </div>
        <div className={styles.button}>
          <button>More About Academics</button>
        </div>
      </div>
    </div>
  )
}

export default Education
