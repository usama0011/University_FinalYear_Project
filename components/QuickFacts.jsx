import styles from "../styles/QuickFact.module.css";
import {
  AcademicCapIcon,
  BookmarkIcon,
  BookOpenIcon,
  HandThumbUpIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import quickFactImage from "../assets/Images/facts.jpg";
const QuickFact = () => {
  const facts = [
    {
      icon: <AcademicCapIcon className={styles.thumbIcon} />,
      percentage: "3,000",
      description: "SUCCESS STORIES",
    },
    {
      icon: <BookmarkIcon className={styles.thumbIcon} />,
      percentage: "320",
      description: "TRUSTED TUTORS",
    },
    {
      icon: <BookOpenIcon className={styles.thumbIcon} />,
      percentage: "1,000",
      description: "SECHEDULERS",
    },
    {
      icon: <HomeModernIcon className={styles.thumbIcon} />,
      percentage: "587",
      description: "Our Courses",
    },
  ];

  return (
    <div className={styles.container}>
      <Image
        className={styles.backgroundImage}
        src={quickFactImage}
        fill
      />
      <div className={styles.gradient_overlay}>
        <div className={styles.layout_Items_Container}>
          {facts.map((item,i)=>(
            <div key={i} className={styles.singleItem}>
              <div className={styles.icon}>
              {item.icon}
              </div>
              <div className={styles.paragraphs}>
                <p>{item.percentage}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFact;
