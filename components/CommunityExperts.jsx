import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/community.module.css";
import Carousel from "react-elastic-carousel";
const CommunityExperts = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const communitExpertData = [
    {
      expertName: "Usama Ahmad",
      expertImage:
        "https://media.licdn.com/dms/image/D5603AQF0dyBh0XUblw/profile-displayphoto-shrink_800_800/0/1665475061620?e=1681344000&v=beta&t=jJjch4LUmgQVBwshG1PsmPlheFJOfkfS5OLrTSQkhDg",
      exprtDescriptoin: "Full Stack Developer",
      expertSkills:"#HTML #CSS #JAVASCRIPT #REACT JS #REDUX JS"
    },
    {
      expertName: "Abudl Moiz",
      expertImage:
        "https://media.licdn.com/dms/image/D4D35AQElwE7P226cEg/profile-framedphoto-shrink_800_800/0/1670499565930?e=1677430800&v=beta&t=1fA-fLuKkyzgbFav_hKftOb1O5ysOQ0-3rvG9nXHpT0",
      exprtDescriptoin: "Front End Developer",
      expertSkills:"#HTML #CSS #JAVASCRIPT #REACT JS #REDUX JS"
    },
    {
      expertName: "Haider Ali",
      expertImage:
        "https://media.licdn.com/dms/image/D4D35AQEZKZnJXzxgbw/profile-framedphoto-shrink_800_800/0/1670769503299?e=1677430800&v=beta&t=3UXmvMbyP0NlApmQpigfFiIndsEOPh-ggqDgGb_4Cks",
      exprtDescriptoin: "The automated process all your website tasks",
      expertSkills:"#HTML #CSS #JAVASCRIPT #REACT JS #REDUX JS"
    },
    {
      expertName: "Fabiha Qasim",
      expertImage:
        "https://media.licdn.com/dms/image/C4D03AQGvuYyesrCN9Q/profile-displayphoto-shrink_800_800/0/1667907590999?e=1681344000&v=beta&t=bUdROhug3-ySEwFEtOb2ZVh9S7fjFemNGE2FmhV6Xns",
      exprtDescriptoin: "The Front End Work all your website tasks",
      expertSkills:"#HTML #CSS #JAVASCRIPT #REACT JS #REDUX JS"
    },
    {
      expertName: "Abdullah Bin Saif",
      expertImage:
        "https://media.licdn.com/dms/image/D4D03AQGjOYuujH0VcA/profile-displayphoto-shrink_800_800/0/1672327392674?e=1681344000&v=beta&t=vtNjKlIXl-QVPDe9HnTvQFWXCE_lsb29JcJ6FUaFeVU",
      exprtDescriptoin: "The automated process all your website tasks",
      expertSkills:"#HTML #CSS #JAVASCRIPT #REACT JS #REDUX JS"
    },
    {
      expertName: "Muhammad Haris",
      expertImage:
        "https://media.licdn.com/dms/image/C4D03AQFqDRXJo0Wwvg/profile-displayphoto-shrink_800_800/0/1655315169316?e=1681344000&v=beta&t=MkeEGR62_eev8CbyBHtp8f7YeYHeJbmoHTWkgPb-kMI",
      exprtDescriptoin: "The automated process all your website tasks",
      expertSkills:"#HTML #CSS #JAVASCRIPT #REACT JS #REDUX JS"
    },
  ];
  return (
    <div className={styles.slidercontainer}>
      <section className={styles.sliderSection}>
        <h2 className={styles.mainhead}>Our Community Experts</h2>
        <div className={styles.row}>
          <Carousel breakPoints={breakPoints}>
            {communitExpertData.map((item, i) => (
              <div key={i} className={styles.singleItem}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.myImage}
                    src={item.expertImage}
                    alt={item.expertName}
                    fill
                  />
                </div>
                <div className={styles.expertDetails}>
                  <h2>{item.expertName}</h2>
                  <p>{item.exprtDescriptoin}</p>
                  <div className={styles.hashTags}>
                    <p>{item.expertSkills}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default CommunityExperts;
