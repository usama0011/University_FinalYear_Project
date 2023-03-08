import React from 'react'
import styles from '../styles/banner.module.css';
import BannerImage from '../assets/Images/banner.jpg';
import Image from 'next/image';
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Image className={styles.bannerImage}  src={BannerImage}/>
    </div>
  )
}

export default Banner