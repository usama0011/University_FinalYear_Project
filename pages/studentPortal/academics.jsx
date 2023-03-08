import React, { useState } from "react";
import styles from "../../styles/academics.module.css";
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import withAuth from "../../components/protectiveRoute";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAcademicsInfoField } from "../../redux/AcademicsSlice";
const personalInformationSchema = Yup.object().shape({
  matricExamPass: Yup.string().required("Exam pass type is required"),
  matricExamBoard: Yup.string().required("Exam Board is required"),
  matricRolllNumber: Yup.string()
    .required("Matric rollnunmber is required")
    .matches(/^[0-9]{6}$/, "Roll number must be a 6 digit number")
    .required(),
  matricPassingYear: Yup.string()
    .required("Matric Passing Year is requried")
    .matches(/^[0-9]{4}$/, "Year must be 4 digit year"),
  matricAnnualStatus: Yup.string().required(
    "Matric Passing Satus is required annual/supply"
  ),
  matricObtainedMarks: Yup.string()
    .required("Matric Obtained Marks required")
    .matches(/^\d{3,4}$/, "Numbers must be 3 digits or 4 digits"),
  matricTotalNumbers: Yup.string().required(
    "Matric Total Numbers are Required"
  ),

  interExamPass: Yup.string().required("Inter Exam pass type is required"),
  interExamBoard: Yup.string().required("Inter Exam Board is required"),
  interRolllNumber: Yup.string()
    .required("Inter rollnunmber is required")
    .matches(/^[0-9]{6}$/, "Roll number must be a 6 digit number")
    .required(),
  interPassingYear: Yup.string()
    .required("Inter Passing Year is requried")
    .matches(/^[0-9]{4}$/, "Year must be 4 digit year"),
  interAnnualStatus: Yup.string().required(
    "Inter Passing Satus is required annual/supply"
  ),
  interObtainedMarks: Yup.string()
    .required("Inter Obtained Marks required")
    .matches(/^\d{3,4}$/, "Numbers must be 3 digits or 4 digits"),
  interTotalNumbers: Yup.string().required("Inter Total Numbers are Required"),
});

const Academics = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const dispatch = useDispatch();
  const {
    matricExamPass,
    matricExamBoard,
    matricRolllNumber,
    matricPassingYear,
    matricAnnualStatus,
    matricObtainedMarks,
    matricTotalNumbers,
    interExamPass,
    interExamBoard,
    interRolllNumber,
    interPassingYear,
    interAnnualStatus,
    interObtainedMarks,
    interTotalNumbers,
  } = useSelector((state) => state.Aacademics || {});
  const initialState = {
    matricExamPass,
    matricExamBoard,
    matricRolllNumber,
    matricPassingYear,
    matricAnnualStatus,
    matricObtainedMarks,
    matricTotalNumbers,
    interExamPass,
    interExamBoard,
    interRolllNumber,
    interPassingYear,
    interAnnualStatus,
    interObtainedMarks,
    interTotalNumbers,
  };
  console.log(matricRolllNumber, matricPassingYear);
  const router = useRouter();
  const filedMap = {
    matricExamPass: "matricExamPass",
    matricExamBoard: "matricExamBoard",
    matricRolllNumber: "matricRolllNumber",
    matricPassingYear: "matricPassingYear",
    matricAnnualStatus: "matricAnnualStatus",
    matricObtainedMarks: "matricObtainedMarks",
    matricTotalNumbers: "matricTotalNumbers",
    interExamPass: "interExamPass",
    interExamBoard: "interExamBoard",
    interRolllNumber: "interRolllNumber",
    interPassingYear: "interPassingYear",
    interAnnualStatus: "interAnnualStatus",
    interObtainedMarks: "interObtainedMarks",
    interTotalNumbers: "interTotalNumbers",
  };
  async function handleSubmitFunction(values, { setSubmitting }) {
    const actions = Object.entries(filedMap).reduce(
      (result, [formField, sliceField]) => {
        result[sliceField] = values[formField];
        return result;
      },
      {}
    );
    dispatch(setAcademicsInfoField(actions));
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/academic",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      response.data && router.push("/studentPortal/challans");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }
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
                  href="/studentPortal/academics"
                >
                  Academics
                </Link>
              </li>
            </ul>
            <p></p>
          </div>
          <div className={styles.p_Main_Content}>
            <Formik
              initialValues={initialState}
              validationSchema={personalInformationSchema}
              onSubmit={handleSubmitFunction}
            >
              {({ isSubmitting, values, handleChange, handleBlur }) => (
                <Form>
                  <div className={styles.HeadingContainerTag}>
                    <h2>O Level / Matriculation Details</h2>
                  </div>
                  <div className={styles.form_Container}>
                    <div className={styles.inputItem}>
                      <label htmlFor="matricExamPass">Exam Passed</label>
                      <Field
                        value={values.matricExamPass}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        as="select"
                        name="matricExamPass"
                      >
                        <option value="">--Exam Passed--</option>
                        <option value="o level">O Level</option>
                        <option value="ssc/matric">SSC/Matric</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="matricExamPass"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="matricExamBoard">Select Board</label>
                      <Field
                        value={values.matricExamBoard}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        as="select"
                        name="matricExamBoard"
                      >
                        <option value="">--Select--</option>
                        <option value="BISE Abbottabad">BISE Abbottabad</option>
                        <option value="BISE Bahawalpur">BISE Bahawalpur</option>
                        <option value="BISE Bannu">BISE Bannu</option>
                        <option value="BISE Dera Ghazi Khan">
                          BISE Dera Ghazi Khan
                        </option>
                        <option value="BISE Faisalabad">BISE Faisalabad</option>
                        <option value="BISE Federal Board Islamabad">
                          BISE Federal Board Islamabad
                        </option>
                        <option value="BISE Gujranwala">BISE Gujranwala</option>
                        <option value="BISE Hyderabad">BISE Hyderabad</option>
                        <option value="BISE Karachi">BISE Karachi</option>
                        <option value="BISE Kohat">BISE Kohat</option>
                        <option value="BISE Lahore">BISE Lahore</option>
                        <option value="BISE Larkana">BISE Larkana</option>
                        <option value="BISE Malakand">BISE Malakand</option>
                        <option value="BISE Mirpurkhas">BISE Mirpurkhas</option>
                        <option value="BISE Mardan">BISE Mardan</option>
                        <option value="BISE Multan">BISE Multan</option>
                        <option value="BISE Peshawar">BISE Peshawar</option>
                        <option value="BISE Quetta">BISE Quetta</option>
                        <option value="BISE Rawalpindi">BISE Rawalpindi</option>
                        <option value="BISE Sahiwal">BISE Sahiwal</option>
                        <option value="BISE Sargodha">BISE Sargodha</option>
                        <option value="BISE Sukkur">BISE Sukkur</option>
                        <option value="BISE Swat">BISE Swat</option>
                        <option value="Agga Khan Board">Agga Khan Board</option>
                        <option value="Punjab Board of Technical Education Lahore">
                          Punjab Board of Technical Education Lahore
                        </option>
                        <option value="Sindh Board of Technical Education Karachi">
                          Sindh Board of Technical Education Karachi
                        </option>
                        <option value="KPK Board of Technical Education Peshawar">
                          KPK Board of Technical Education Peshawar
                        </option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="matricExamBoard"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="matricRolllNumber">Roll Number:</label>
                      <Field
                        value={values.matricRolllNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="number"
                        name="matricRolllNumber"
                        id="matricRolllNumber"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="matricRolllNumber"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="matricPassingYear">Passing Year:</label>
                      <Field
                        value={values.matricPassingYear}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="number"
                        name="matricPassingYear"
                        id="matricPassingYear"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="matricPassingYear"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="matricAnnualStatus">
                        Matric AnnualStatus
                      </label>
                      <Field
                        value={values.matricAnnualStatus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        as="select"
                        name="matricAnnualStatus"
                      >
                        <option value="">--Select--</option>
                        <option value="annual">Annual</option>
                        <option value="supply">supply</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="matricAnnualStatus"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="matricObtainedMarks">
                        Matric Obtained Marks/CGPA
                      </label>
                      <Field
                        value={values.matricObtainedMarks}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="number"
                        name="matricObtainedMarks"
                        id="matricObtainedMarks"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="matricObtainedMarks"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="matricRolllNumber">
                        Matric Maximum Numbers/CGPA
                      </label>
                      <Field
                        onChange={handleChange}
                        value={values.matricTotalNumbers}
                        type="number"
                        name="matricTotalNumbers"
                        id="matricTotalNumbers"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="matricTotalNumbers"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.HeadingContainerTag}>
                    <h2>A Level / Intermedicate Details</h2>
                  </div>
                  <div className={styles.form_Container}>
                    <div className={styles.inputItem}>
                      <label htmlFor="interExamPass">Exam Passed</label>
                      <Field
                        value={values.interExamPass}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        as="select"
                        name="interExamPass"
                      >
                        <option value="">--Exam Passed--</option>
                        <option value="A level">A Level</option>
                        <option value="ssc/inter">SSC/inter</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="interExamPass"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="interExamBoard">Select Board</label>
                      <Field
                        value={values.interExamBoard}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        as="select"
                        name="interExamBoard"
                      >
                        <option value="">--Select--</option>
                        <option value="BISE Abbottabad">BISE Abbottabad</option>
                        <option value="BISE Bahawalpur">BISE Bahawalpur</option>
                        <option value="BISE Bannu">BISE Bannu</option>
                        <option value="BISE Dera Ghazi Khan">
                          BISE Dera Ghazi Khan
                        </option>
                        <option value="BISE Faisalabad">BISE Faisalabad</option>
                        <option value="BISE Federal Board Islamabad">
                          BISE Federal Board Islamabad
                        </option>
                        <option value="BISE Gujranwala">BISE Gujranwala</option>
                        <option value="BISE Hyderabad">BISE Hyderabad</option>
                        <option value="BISE Karachi">BISE Karachi</option>
                        <option value="BISE Kohat">BISE Kohat</option>
                        <option value="BISE Lahore">BISE Lahore</option>
                        <option value="BISE Larkana">BISE Larkana</option>
                        <option value="BISE Malakand">BISE Malakand</option>
                        <option value="BISE Mirpurkhas">BISE Mirpurkhas</option>
                        <option value="BISE Mardan">BISE Mardan</option>
                        <option value="BISE Multan">BISE Multan</option>
                        <option value="BISE Peshawar">BISE Peshawar</option>
                        <option value="BISE Quetta">BISE Quetta</option>
                        <option value="BISE Rawalpindi">BISE Rawalpindi</option>
                        <option value="BISE Sahiwal">BISE Sahiwal</option>
                        <option value="BISE Sargodha">BISE Sargodha</option>
                        <option value="BISE Sukkur">BISE Sukkur</option>
                        <option value="BISE Swat">BISE Swat</option>
                        <option value="Agga Khan Board">Agga Khan Board</option>
                        <option value="Punjab Board of Technical Education Lahore">
                          Punjab Board of Technical Education Lahore
                        </option>
                        <option value="Sindh Board of Technical Education Karachi">
                          Sindh Board of Technical Education Karachi
                        </option>
                        <option value="KPK Board of Technical Education Peshawar">
                          KPK Board of Technical Education Peshawar
                        </option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="interExamBoard"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="interRolllNumber">Roll Number:</label>
                      <Field
                        value={values.interRolllNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="number"
                        name="interRolllNumber"
                        id="interRolllNumber"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="interRolllNumber"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="interPassingYear">Passing Year:</label>
                      <Field
                        value={values.interPassingYear}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="number"
                        name="interPassingYear"
                        id="interPassingYear"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="interPassingYear"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="interAnnualStatus">
                        Inter AnnualStatus
                      </label>
                      <Field
                        value={values.interAnnualStatus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        as="select"
                        name="interAnnualStatus"
                      >
                        <option value="">--Select--</option>
                        <option value="annual">Annual</option>
                        <option value="supply">supply</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="interAnnualStatus"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="interObtainedMarks">
                        Inter Obtained Marks/CGPA
                      </label>
                      <Field
                        value={values.interObtainedMarks}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="number"
                        name="interObtainedMarks"
                        id="interObtainedMarks"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="interObtainedMarks"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="interRolllNumber">
                        Inter Maximum Numbers/CGPA
                      </label>
                      <Field
                        value={values.interTotalNumbers}
                        type="number"
                        onChange={handleChange}
                        name="interTotalNumbers"
                        id="interTotalNumbers"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="interTotalNumbers"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.button_Cotainer}>
                    <button disabled={isSubmitting} type="submit">
                      Save & Next
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withAuth(Academics);
