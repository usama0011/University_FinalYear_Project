import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import Image from "next/image";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";

const AboutUs = () => {
  const relatedLinkData = [
    {
      relatedLink: "#",
      relatedLinkName: "Carrers",
    },
    {
      relatedLink: "",
      relatedLinkName: "Mission & Visions",
    },
    {
      relatedLink: "",
      relatedLinkName: "Quick Facts",
    },
    {
      relatedLink: "",
      relatedLinkName: "Presendent Office's",
    },
    {
      relatedLink: "",
      relatedLinkName: "History",
    },
    {
      relatedLink: "",
      relatedLinkName: "Publication",
    },
    {
      relatedLink: "",
      relatedLinkName: "Affilations",
    },
    {
      relatedLink: "",
      relatedLinkName: "Governace",
    },
    {
      relatedLink: "",
      relatedLinkName: "Services & Information",
    },
  ];
  return (
    <>
      <NavBar />
      <div className={styles.images_container}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutLeft}>
            <div>
              <span>About</span>
              <h1>About Learnify</h1>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <p>
              Convallis vivamus at cras porta nibh velit aliquam eget in
              faucibus mi tristique aliquam ultrices sit cras nascetur in
              elementum placerat sed viverra risus in turpis vitae sed est
              tincidunt vitae.
            </p>
          </div>
        </div>
        <div className={styles.innerImageContainer}>
          <div className={styles.imageContainerOne}>
            <Image
              className={styles.imageOne}
              src="https://assets.website-files.com/628803debd8bd083a9354388/628d1ff3335abe88bf347fd0_about-hero-image-1-top-learnbook-webflow-ecommerce-template-p-800.jpeg"
              fill
            />
          </div>
          <div className={styles.imageContainerTwo}>
            <Image
              className={styles.imageTwo}
              src="https://assets.website-files.com/628803debd8bd083a9354388/628d1ff3d01d22710f9a7957_about-hero-image-2-learnbook-webflow-ecommerce-template-p-800.jpeg"
              fill
            />
          </div>
        </div>
        <div className={styles.largeImageContainer}>
          <Image
            fill
            className={styles.backgroundImage}
            src="https://assets.website-files.com/628803debd8bd083a9354388/628d1ff3da99076226745d1d_about-hero-bottom-image-learnbook-webflow-ecommerce-template.svg"
            alt="userImage"
          />
        </div>
      </div>
      <div className={styles.missionContainer}>
        <div className={styles.innerMissionContainer}>
          <div className={styles.missionLeftContainer}>
            <span>OUR MISSION</span>
            <h1>The mission behind Learnify platform</h1>
            <div className={styles.missionLeftImageContainer}>
              <Image
                src="https://assets.website-files.com/628803debd8bd083a9354388/628d2928bebf16fc4275a8a0_our-story-image-1-learnbook-webflow-ecommerce-template-p-800.jpeg"
                alt="mission Image"
                fill
                className={styles.leftImageMission}
              />
            </div>
            <div className={styles.smallImage}>
              <Image
                src="https://assets.website-files.com/628803debd8bd083a9354388/628d2928b83e5adbf38315bf_our-story-image-1-bg-shape-learnbook-webflow-ecommerce-template.svg"
                fill
                className={styles.jj}
              />
            </div>
          </div>
          <div className={styles.missionRightContainer}>
            <p>
              Convallis vivamus at cras porta nibh velit aliquam eget in
              faucibus mi tristique aliquam ultrices sit cras nascetur in
              elementum placerat sed viverra risus in turpis vitae sed est
              tincidunt vitae.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className={styles.missionRightImageContainer}>
              <Image
                className={styles.rightImageMission}
                src="https://assets.website-files.com/628803debd8bd083a9354388/628d29283c07b870f4e870e2_our-story-image-2-learnbook-webflow-ecommerce-template-p-800.jpeg"
                fill
                alt="userImage"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Our Wok Value */}
      <div className={styles.workContaine}>
        <div className={styles.innerWorkContainer}>
          <div className={styles.workOne}>
            <span>OUR VALUES</span>
            <h1>Our work values</h1>
            <p>
              Convallis vivamus at cras porta nibh velit aliquam eget in
              faucibus mi tristique aliquam ultrices sit cras nascetur in
              elementum placerat sed.
            </p>
            <button>Explore courses</button>
          </div>
          <div className={styles.workTwo}>
            <div className={styles.singlegridbox}>
              <div className={styles.iconImageContainer}>
                <Image
                  className={styles.iconImage}
                  src="https://assets.website-files.com/628803debd8bd083a…ent-icon-learnbook-webflow-ecommerce-template.svg"
                  alt="iconIage"
                  fill
                />
              </div>
              <h2>Commitment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className={styles.singlegridbox}>
              <div className={styles.iconImageContainer}>
                <Image
                  className={styles.iconImage}
                  fill
                  src="https://assets.website-files.com/628803debd8bd083a…ity-icon-learnbook-webflow-ecommerce-template.svg"
                  alt="iconIage"
                />
              </div>
              <h2>Commitment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className={styles.singlegridbox}>
              <div className={styles.iconImageContainer}>
                <Image
                  className={styles.iconImage}
                  fill
                  src="https://assets.website-files.com/628803debd8bd083a…ess-icon-learnbook-webflow-ecommerce-template.svg"
                  alt="iconIage"
                />
              </div>
              <h2>Commitment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className={styles.singlegridbox}>
              <div className={styles.iconImageContainer}>
                <Image
                  className={styles.iconImage}
                  fill
                  src="https://assets.website-files.com/628803debd8bd083a…ion-icon-learnbook-webflow-ecommerce-template.svg"
                  alt="iconIage"
                />
              </div>
              <h2>Commitment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className={styles.singlegridbox}>
              <div className={styles.iconImageContainer}>
                <Image
                  className={styles.iconImage}
                  fill
                  src=""
                  alt="iconIage"
                />
              </div>
              <h2>Commitment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className={styles.singlegridbox}>
              <div className={styles.iconImageContainer}>
                <Image
                  className={styles.iconImage}
                  fill
                  src="	https://assets.website-files.com/628803debd8bd083a…nce-icon-learnbook-webflow-ecommerce-template.svg"
                  alt="iconIage"
                />
              </div>
              <h2>Commitment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgournd_Container}>
        <div className={styles.outer_related_container}>
          <div className={styles.red_Line}></div>
          <h2>Related Pages</h2>
          <div className={styles.related_container}>
            {relatedLinkData.map((item, i) => (
              <div key={i} className={styles.single_link}>
                {item.relatedLinkName}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
