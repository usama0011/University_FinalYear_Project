import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faContactCard,
  faEarthEurope,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerFooterContainer}>
        <div className={styles.footerUpperPart}>
          <div className={styles.footerItem}>
            <div className={styles.top}>
              <FontAwesomeIcon
                className={styles.footerIcon}
                icon={faBookOpen}
              />{" "}
              <h2>UMH Skyline</h2>
            </div>
            <div className={styles.description}>
              The automated process starts as soon as your clothes go into the
              machine
            </div>
            <div className={styles.icons_div}>
              <div className={styles.item}>
                <FontAwesomeIcon
                  className={styles.miniIcon}
                  icon={faContactCard}
                />
                <p>+923161682644</p>
              </div>
              <div className={styles.item}>
                <FontAwesomeIcon
                  className={styles.miniIcon}
                  icon={faEnvelope}
                />
                <p>za5232208@gmail.com</p>
              </div>
              <div className={styles.item}>
                <FontAwesomeIcon
                  className={styles.miniIcon}
                  icon={faEarthEurope}
                />
                <p>https://UMHSkyline.com</p>
              </div>
            </div>
          </div>
          <div className={styles.footerItem}>
            <ul className={styles.Ul}>
              <li className={styles.li}>Support</li>
              <li className={styles.li}>Desing & createives</li>
              <li className={styles.li}>Telecommunication</li>
              <li className={styles.li}>Restaurent</li>
              <li className={styles.li}>Programming</li>
              <li className={styles.li}>Architecture</li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <ul className={styles.Ul}>
              <li className={styles.li}>Company</li>
              <li className={styles.li}>Desing & createives</li>
              <li className={styles.li}>Telecommunication</li>
              <li className={styles.li}>Restaurent</li>
              <li className={styles.li}>Programming</li>
              <li className={styles.li}>Architecture</li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <ul className={styles.Ul}>
              <li className={styles.li}>Our Solution</li>
              <li className={styles.li}>Desing & createives</li>
              <li className={styles.li}>Telecommunication</li>
              <li className={styles.li}>Restaurent</li>
              <li className={styles.li}>Programming</li>
              <li className={styles.li}>Architecture</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLowerPart}>
          <p>
            Copyright ©2023 All rights reserved | This template is made with❤️by
            UMH Skyline
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
