import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/MenuItem.module.css";
const MenuItem = ({ menuIcon, menuName, menuLink }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Link className={styles.menuLink} href={menuLink}>
      <div style={router.pathname === menuLink ?{color:'black',backgroundColor:'#f2f8f9'}: {color:'black',backgroundColor:'white'}} className={styles.menuContainer}>
        <FontAwesomeIcon icon={menuIcon} className={styles.menuIcon} />
        <p className={styles.menuName}>{menuName}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
