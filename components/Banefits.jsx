import Image from "next/image";
import React from "react";
import styles from "../styles/Banefits.module.css";
import girlImage from "../assets/images/girl.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
const Banefits = () => {
  return (
    <div className={styles.banefitsContainer}>
      <div className={styles.gird_Container}>
        <div className={styles.gridItemOne}>
          <Image
            className={styles.largeImage}
            src={girlImage}
            fill
            alt="userImage"
          />
        </div>
        <div className={styles.gridItemTwo}>
          <div className={styles.inner_GridMargin}>
            <p>Learning Anything</p>
            <h2 className={styles.head}>Benefits About Online <br /> Learning Expertise</h2>
            <div className={styles.courseItem}>
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className={styles.fontIcon}
                />
              </div>
              <div className={styles.titleDescription}>
                <h3>Online Courses</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className={styles.courseItem}>
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className={styles.fontIcon}
                />
              </div>
              <div className={styles.titleDescription}>
                <h3>Online Courses</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>{" "}
            <div className={styles.courseItem}>
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className={styles.fontIcon}
                />
              </div>
              <div className={styles.titleDescription}>
                <h3>Online Courses</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banefits;
