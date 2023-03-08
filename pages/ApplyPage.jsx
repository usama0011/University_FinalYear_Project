import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import styles from '../styles/Apply.module.css'
import ApplyImage from '../assets/Images/apply.jpg';
import { ArrowDownRightIcon, ArrowLeftIcon, ArrowRightIcon, ArrowRightOnRectangleIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const ApplyPage = () => {
  return (
    <>
    <div className={styles.container}>
      <Image className={styles.largeImage} src={ApplyImage} width={500} height={800}/>
      <div className={styles.applytitleContainer}>
        <h1>Apply to <br /> UMH Skyline University</h1>
        <div className="yellowLine"></div>
        <p>You’ve made the right decision to apply to Redeemer! You take your faith and education seriously—so do we. Start your application today!

</p>
      </div>
    </div>  
    <div className={styles.AcademicContainer}>
      <div className={styles.academicLife}>
        <h1>Academic life</h1>
        <div className={styles.yellowLine}></div>
        <p className={styles.boldParagraph}>
          Make the most of your academic life here at Keele, with a whole host of additional opportunities that we offer to help you develop your skills and expertise.
        </p>
        <p className={styles.smallerParagraph}>
          Whether you want to develop your academic skills, develop your digital skills, or develop your career, we're here to provide you with the support you need. There are also lots of additional academic opportunities that you can pursue at Keele; you could learn a second language, study abroad, or gain a qualification to teach English as a foreign language.
        </p>
        <p className={styles.smallerParagraph}>
          You'll find lots of information and guidance on these pages, along with links to other areas of academic and professional development that you might be interested in, including careers and employability, library training, and links to useful pages such as exams and assessment, changing your course, modules, and academic conduct.
        </p>
      </div>
    </div>
    <div className={styles.signUpLoginContainer}>
      <div className={styles.signUpContainer}>
        <Link href="/SignUp">
        <p>First time applicants:</p>
        <h2 className={styles.bigTitle}>Start Your <br /> Application <ArrowRightIcon className={styles.smallIcon}/></h2>
        <div className={styles.curveLineShap}></div>
        </Link>
      </div>
      <div className={styles.loginContainer}>
        <Link href="/login">
        <p>Returning Users</p>
        <div className={styles.login_face}>
        <h2 className={styles.bigTitle}>Login </h2>
        <ArrowRightIcon className={styles.smallIcon}/>
        </div>
        <p>to continue your application</p>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ApplyPage