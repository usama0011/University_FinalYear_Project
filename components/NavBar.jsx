import {
  faBars,
  faChevronDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import myLogo from "../assets/Images/mylogo.jpg";
import styles from "../styles/NavBarl.module.css";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className={styles.navContainer}>
      <div className={styles.innerNavContainer}>
        <div className={styles.navItemLeft}>
          <div className={styles.imageContainer}>
            <Image
              src={myLogo}
              alt="adminLogo"
              fill
              className={styles.myImage}
            />
          </div>
          <span className={styles.heading}>UMH SkyLine</span>
          <div className={styles.navLinks}>
            <span className={styles.span}>Home</span>
            <span className={styles.span}>About</span>
            <span className={styles.span}>Blogs</span>
            <span className={`${styles.span} ${styles.mySpan}`}>
              Pages{" "}
              <div className={styles.spanAbsoulte}>
                <div className={styles.navLinksContainer}>
                  <ul>
                    <h2>Pages</h2>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Individual Coruses</li>
                    <li>Blogs</li>
                  </ul>
                  <ul>
                    <h2>Related links</h2>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Individual Coruses</li>
                    <li>Blogs</li>
                  </ul>
                  <ul>
                    <h2>Related Links</h2>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Individual Coruses</li>
                    <li>Blogs</li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className={styles.navItemRight}>
          <div className={styles.seachContainer}>
            <FontAwesomeIcon className={styles.seach} icon={faSearch} />
          </div>
          <button className={styles.myButton}>Get started</button>
        </div>
        <button onClick={() => setOpenNav(!openNav)} className={styles.menuNavf}>
          {openNav ? <FontAwesomeIcon className={styles.navbuttonIcon} icon={faXmark}/>:<FontAwesomeIcon className={styles.navbuttonIcon} icon={faBars}/>}
        </button>
      </div>
      {openNav && (
        <>
          <div className={styles.listItemms}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Individual Course</li>
              <li>Posts</li>
              <button>Get Started</button>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
