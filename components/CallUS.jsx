import React from 'react';
import style from '../styles/CallUS.module.css';

const CallUS = () => {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <h2>Contact Us</h2>
        <p>We are here to help you with any questions or concerns. Please reach out to us and we will get back to you as soon as possible.</p>
      </div>
      <div className={style.curve} />
      <div className={style.rightContainer}>
        <h2>Call Us</h2>
        <p>Phone: 555-555-5555</p>
      </div>
    </div>
  );
};

export default CallUS;
