import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from '../styles/Contact.module.css'
import Image from "next/image";
const Contact = () => {
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <Image src="https://img.freepik.com/free-photo/empty-office-architects-with-computer-desk_482257-9527.jpg?w=996&t=st=1674826348~exp=1674826948~hmac=086a59b234725b550463c2145cf9527a8b9394a094ef2f7c601ab73dda48bfbb" width={700} height={500}/>
      <form className={styles.formContainer}>
        <label className={styles.label}>
          Name:
          <input type="text" name="name" className={styles.input} />
        </label>
        <br />
        <label className={styles.label}>
          Email:
          <input type="email" name="email" className={styles.input} />
        </label>
        <br />
        <label className={styles.label}>
          Message:
          <textarea name="message" className={styles.textarea} />
        </label>
        <br />
        <input type="submit" value="Submit" className={styles.submitBtn} />
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;
