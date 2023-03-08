import React from "react";
import Image from "next/image";
import styles from "../styles/Acedamic.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
const Acadamic = () => {
  const educationDepartments = [
    {
      departmentName: "Department of Mathematics",
      departmentImage: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      departmentLink: "www.example.com/math",
    },
    {
      departmentName: "Department of English",
      departmentImage: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
      departmentLink: "www.example.com/english",
    },
    {
      departmentName: "Department of Science",
      departmentImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/science",
    },
    {
      departmentName: "Department of History",
      departmentImage: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/history",
    },
    {
      departmentName: "Department of Social Studies",
      departmentImage: "https://images.unsplash.com/photo-1494192785370-e91e091d544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/social-studies",
    },
    {
      departmentName: "Department of Language Arts",
      departmentImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      departmentLink: "www.example.com/language-arts",
    },
    {
      departmentName: "Department of Foreign Languages",
      departmentImage: "https://images.unsplash.com/photo-1512076249812-fd58fb2c8748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      departmentLink: "www.example.com/foreign-languages",
    },
    {
      departmentName: "Department of Physical Education",
      departmentImage: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/pe",
    },
    {
      departmentName: "Department of Music",
      departmentImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/music",
    },
    {
      departmentName: "Department of Art",
      departmentImage: "https://images.unsplash.com/photo-1525278070609-779c7adb7b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80",
      departmentLink: "www.example.com/art",
    },
    {
      departmentName: "Department of Computer Science",
      departmentImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/computer-science",
    },
    {
      departmentName: "Department of Business Education",
      departmentImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/business-education",
    },
    {
      departmentName: "Department of Home Economics",
      departmentImage: "https://images.unsplash.com/photo-1671461550617-ae4967d17cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/home-economics",
    },
    {
      departmentName: "Department of Health Education",
      departmentImage: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/health-education",
    },
    {
      departmentName: "Department of Library Science",
      departmentImage: "https://images.unsplash.com/photo-1552197680-0223a9065fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/library-science",
    },
    {
      departmentName: "Department of Special Education",
      departmentImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80",
      departmentLink: "www.example.com/special-education",
    },
    {
      departmentName: "Department of Physical Science",
      departmentImage: "https://images.unsplash.com/photo-1518181835702-6eef8b4b2113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      departmentLink: "www.example.com/physical-science",
    },
  ];

  return (
    <>
    
    <br />
    <div className={styles.parentContainer}>
      <Image src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="My Image" className={styles.image}  width={900} height={1200}/>
      <button className={styles.button}>This is UMH</button>
    </div>
    <div className={styles.outerContainer}>
        <h1 className={styles.heading}>Our Departments</h1>
    <div className={styles.gridContainer}>
      {educationDepartments.map((department,i) => (
          <div className={styles.gridBox} key={i}>
          <Link href={department.departmentLink}>
              <Image src={department.departmentImage} alt={department.departmentName} className={styles.departmentImage} width={100} height={100}  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
              <div className={styles.departmentName}>{department.departmentName}</div>
          </Link>
        </div>
      ))}
    </div>
      </div>
    <Footer/>
      </>
  );
};

export default Acadamic;
