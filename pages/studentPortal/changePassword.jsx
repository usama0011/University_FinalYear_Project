import React, { useState } from "react";
import styles from "../../styles/setting.module.css";
import Image from "next/image";
import MenuItem from "../../components/MenuItem";
import {
  faAngleRight,
  faBars,
  faBarsProgress,
  faBookOpen,
  faClipboard,
  faHome,
  faKey,
  faPrint,
  faReceipt,
  faSearch,
  faUserTie,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import withAuth from "../../components/protectiveRoute";
const ChangePasswords = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className={styles.portalContainer}>
      <aside
        className={
          openSideBar
            ? `${styles.asideContinerleft}`
            : `${styles.asideContainer}`
        }
      >
        <div
          onClick={() => setOpenSideBar((p) => p == false)}
          className={styles.crossIconContainer}
        >
          <FontAwesomeIcon className={styles.crossIcon} icon={faXmark} />
        </div>
        <div className={styles.brand}>
          <Image
            src={require("../../assets/Images/myLogo.jpg")}
            layout="fill"
            className={styles.largeImage}
            alt="userImage"
          />
        </div>
        <div className={styles.asideNavs}>
          <MenuItem
            menuLink="/studentPortal"
            menuName="Dashboard"
            menuIcon={faHome}
          />
          <MenuItem
            menuLink="/studentPortal/instruction"
            menuName="Our Instruction"
            menuIcon={faClipboard}
          />
          <MenuItem
            menuLink="/studentPortal/personalInformation"
            menuName="Personal Information"
            menuIcon={faUserTie}
          />
          <MenuItem
            menuLink="/studentPortal/academics"
            menuName="Academics"
            menuIcon={faBookOpen}
          />
           <MenuItem
            menuLink="/studentPortal/programsOffers"
            menuName="Programs Offers"
            menuIcon={faBarsProgress}
          />
          <MenuItem
            menuLink="/studentPortal/challans"
            menuName="Print Challans"
            menuIcon={faReceipt}
          />
          <MenuItem
            menuLink="/studentPortal/printApplication"
            menuName="Print Applicatoin"
            menuIcon={faPrint}
          />
          <MenuItem
            menuLink="/studentPortal/changePassword"
            menuName="Change Passwords"
            menuIcon={faKey}
          />
        </div>
      </aside>
      <main className={styles.mainContainer}>
        <div className={styles.navContainer}>
          <div className={styles.navItemLeft}>
            <div
              onClick={() => setOpenSideBar((p) => !p)}
              className={styles.barIonDiv}
            >
              <FontAwesomeIcon icon={faBars} className={styles.bars} />
            </div>
            <div className={styles.search_Container}>
              <FontAwesomeIcon className={styles.serch} icon={faSearch} />
              <input type="search" placeholder="search" name="" id="" />
            </div>
          </div>
          <div className={styles.navItemRight}>
            <div className={styles.rightItemSingle}>
              <FontAwesomeIcon className={styles.rightNavIcon} icon={faBell} />
            </div>
            <div className={styles.rightItemSingle}>
              <FontAwesomeIcon
                className={styles.rightNavIcon}
                icon={faEnvelopeOpen}
              />
            </div>
            <div
              onClick={() => setOpenUser((prev) => !prev)}
              className={`${styles.rightItemSingle} ${styles.nPluse}`}
            >
              U
              {openUser ? (
                <div className={styles.userIntroDiv}>
                  <div className={styles.upperContainerIntro}>
                    <p>Profession</p>
                    <h2>Dr.Usama Ahmad</h2>
                  </div>
                  <ul>
                    <li>My Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.pageHeader}>
            <ul className={styles.breadcrumb}>
              <li className={styles.breadcrumb_Item}>
                <Link className={styles.breadcurmLink} href="/studentPortal">
                  Dashboard
                </Link>
              </li>
              <FontAwesomeIcon icon={faAngleRight} className={styles.angle} />
              <li className={styles.breadcrumb_Item}>
                <Link
                  className={styles.breadcurmLink}
                  href="/studentPortal/changePassword"
                >
                  Change Passwords
                </Link>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withAuth(ChangePasswords);
