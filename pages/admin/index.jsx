import {
  faDiamond,
  faListAlt,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import MenuItem from "../../components/MenuItem";
import withAuth from "../../components/protectiveRoute";
import styles from "../../styles/admin.module.css";
const index = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  console.log(openSideBar);
  return (
    <div className={styles.adminContainer}>
      <aside
        className={
          openSideBar
            ? `${styles.asideContainerOpen}`
            : `${styles.asideContainer}`
        }
      >
        <button
          onClick={() => setOpenSideBar(!openSideBar)}
          className={styles.butttonStyles}
        >
          close
        </button>
        <div className={styles.asideHeader}>
          <MenuItem
            menuLink="/admin/programsoffers"
            menuName="Offer Programs"
            menuIcon={faDiamond}
          />
          <MenuItem
            menuLink="/admin/programsoffers"
            menuName="Add Teacher"
            menuIcon={faUserEdit}
          />
          <MenuItem
            menuLink="/admin/programsoffers"
            menuName="Registered Students"
            menuIcon={faListAlt}
          />
        </div>
      </aside>
      <main
        className={
          openSideBar ? `${styles.mainContainerr}` : `${styles.mainContainer}`
        }
      >
        <nav className={styles.myNavigation}>
          <button
            className={
              openSideBar
                ? `${styles.myCustumButtonn}`
                : `${styles.myCustumButton}`
            }
            onClick={() => setOpenSideBar(!openSideBar)}
          >
            open
          </button>{" "}
          <div>Welcome to the Admin Dashboard</div>
        </nav>
        <div className={styles.mainContent}>
          
        </div>
      </main>
    </div>
  );
};

export default withAuth(index);
