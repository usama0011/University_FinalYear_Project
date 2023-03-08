import React, { useState } from "react";
import styles from "../../styles/personalInformation.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "../../components/protectiveRoute";
import {
  setPersonalInfoField,
  setUserId,
} from "../../redux/personalInfoReducer";
const personalInformationSchema = Yup.object().shape({
  studentName: Yup.string().required("Student name is required"),
  cnic: Yup.string()
    .required("CNIC number is required")
    .matches(/^\d{5}-\d{7}-\d{1}$/, "Invalid CNIC number format"),
  fatherName: Yup.string().required("Father name is required"),
  cityName: Yup.string().required("City name is Required"),
  province: Yup.string().required("Province name is Required"),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  religion: Yup.string().required("Religion is required"),
  Domicile: Yup.string().required("Domicile is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{4}-\d{7}$/, "Phone number must be in the format XXXX-XXXXXXX")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  emergencyContact: Yup.string().required("Emergency contact is required"),
  nationality: Yup.string().required("Nationality is required"),
  passportId: Yup.string()
    .matches(/^[A-Z]{2}\d{7}$/, "Passport ID must be in the format XX1234567")
    .required("Passport ID is required"),
  enrollmentStatus: Yup.string().required("Enrollment status is required"),
  program: Yup.string().required("Program is required"),
  levelOfStudy: Yup.string().required("Level of study is required"),
  disability: Yup.string().required("Disability status is required"),
  bloodGroup: Yup.string().required("Blood group is required"),
  criminalHistory: Yup.string().required("Criminal history is required"),
  HFQ: Yup.string().required("Hafiz quran is required"),
});

const PersonalInformation = () => {
  const {
    studentName,
    fatherName,
    province,
    religion,
    Domicile,
    cityName,
    dob,
    gender,
    address,
    phoneNumber,
    email,
    emergencyContact,
    nationality,
    passportId,
    enrollmentStatus,
    program,
    levelOfStudy,
    disability,
    bloodGroup,
    HFQ,
    criminalHistory,
    cnic,
  } = useSelector((state) => state.personalInfo);

  const initialValues = {
    studentName,
    fatherName,
    province,
    religion,
    Domicile,
    cnic,
    cityName,
    dob,
    gender,
    address,
    phoneNumber,
    email,
    emergencyContact,
    nationality,
    passportId,
    enrollmentStatus,
    program,
    levelOfStudy,
    disability,
    bloodGroup,
    HFQ,
    criminalHistory,
  };
  // For Example
  const [openUser, setOpenUser] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [userImageBase64, setUserImageBase64] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  // const handleImageChange = (event) => {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setUserImageBase64(reader.result);
  //   };
  //   reader.readAsDataURL(event.currentTarget.files[0]);
  // };
  const filedMap = {
    studentName: "studentName",
    fatherName: "fatherName",
    province: "province",
    religion: "religion",
    cnic: "cnic",
    Domicile: "Domicile",
    cityName: "cityName",
    dob: "dob",
    gender: "gender",
    address: "address",
    phoneNumber: "phoneNumber",
    email: "email",
    emergencyContact: "emergencyContact",
    nationality: "nationality",
    passportId: "passportId",
    enrollmentStatus: "enrollmentStatus",
    program: "program",
    levelOfStudy: "levelOfStudy",
    disability: "disability",
    bloodGroup: "bloodGroup",
    HFQ: "HFQ",
    criminalHistory: "criminalHistory",
  };
  const handleSubmitFunction = async (values, { setSubmitting }) => {
    const actions = Object.entries(filedMap).reduce(
      (result, [formField, sliceField]) => {
        result[sliceField] = values[formField];
        return result;
      },
      {}
    );
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/personalInformation",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(setPersonalInfoField(actions));
      let userId = response.data._id;
      dispatch(setUserId(userId));
      router.push("/studentPortal/academics");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

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
                  href="/studentPortal/personalInformation"
                >
                  Personal Information
                </Link>
              </li>
            </ul>
            <p></p>
          </div>
          <div className={styles.p_Main_Content}>
            <Formik
              initialValues={initialValues}
              validationSchema={personalInformationSchema}
              onSubmit={handleSubmitFunction}
            >
              {({ isSubmitting, values, handleChange, handleBlur }) => (
                <Form>
                  <div className={styles.HeadingContainerTag}>
                    <h2>Personal Information Details</h2>
                  </div>
                  <div className={styles.form_Container}>
                    <div className={styles.inputItem}>
                      <label htmlFor="studentName">Student Name</label>
                      <Field
                        value={values.studentName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.myTest}
                        type="text"
                        name="studentName"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="studentName"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="fatherName">Father Name</label>
                      <Field
                        value={values.fatherName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.myTest}
                        type="text"
                        name="fatherName"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="fatherName"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="cnic">CNIC Number</label>
                      <Field
                        value={values.cnic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.myTest}
                        name="cnic"
                        id="cnic"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="cnic"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="dob">Date of Birth</label>
                      <Field
                        value={values.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="date"
                        name="dob"
                        id="dob"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="dob"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="gender">Gender</label>
                      <Field
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        as="select"
                        name="gender"
                      >
                        <option value="">Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="gender"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="cityName">Select City</label>
                      <Field
                        value={values.cityName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        as="select"
                        name="cityName"
                      >
                        <option value="">--Select City--</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Gujranwala">Gujranwala</option>
                        <option value="Multan">Multan</option>
                        <option value="Bahawalpur">Bahawalpur</option>
                        <option value="Sialkot">Sialkot</option>
                        <option value="Sargodha">Sargodha</option>
                        <option value="Jhang">Jhang</option>
                        <option value="Sheikhupura">Sheikhupura</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Kasur">Kasur</option>
                        <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                        <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                        <option value="Okara">Okara</option>
                        <option value="Nankana Sahib">Nankana Sahib</option>
                        <option value="Hafizabad">Hafizabad</option>
                        <option value="Attock">Attock</option>
                        <option value="Chakwal">Chakwal</option>
                        <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                        <option value="Jhelum">Jhelum</option>
                        <option value="Mianwali">Mianwali</option>
                        <option value="Bhakkar">Bhakkar</option>
                        <option value="Khushab">Khushab</option>
                        <option value="Layyah">Layyah</option>
                        <option value="Toba Tek Singh">Toba Tek Singh</option>
                        <option value="Narowal">Narowal</option>
                        <option value="Muzaffargarh">Muzaffargarh</option>
                        <option value="Khanewal">Khanewal</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="cityName"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="religion">Religion</label>
                      <Field
                        value={values.religion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="religion"
                        as="select"
                      >
                        <option value="">--select Religion--</option>
                        <option value="christianity">Christianity</option>
                        <option value="islam">Islam</option>
                        <option value="hinduism">Hinduism</option>
                        <option value="buddhism">Buddhism</option>
                        <option value="judaism">Judaism</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="religion"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="province">province</label>
                      <Field
                        value={values.province}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="province"
                        as="select"
                      >
                        <option value="">--select province--</option>
                        <option value="punjab">Punjab</option>
                        <option value="sindh">Sindh</option>
                        <option value="kpk">Khyber Pakhtunkhwa (KPK)</option>
                        <option value="balochistan">Balochistan</option>
                        <option value="gilgit-baltistan">
                          Gilgit-Baltistan
                        </option>
                        <option value="ajk">
                          Azad Jammu and Kashmir (AJK)
                        </option>
                        <option value="islamabad">
                          Islamabad Capital Territory
                        </option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="province"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="address">Address</label>
                      <Field
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="address"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="address"
                        />
                      </div>
                    </div>

                    <div className={styles.inputItem}>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Field
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="tel"
                        name="phoneNumber"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="phoneNumber"
                        />
                      </div>
                    </div>

                    <div className={styles.inputItem}>
                      <label htmlFor="email">Email</label>
                      <Field
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        name="email"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="email"
                        />
                      </div>
                    </div>

                    <div className={styles.inputItem}>
                      <label htmlFor="emergencyContact">
                        Emergency Contact
                      </label>
                      <Field
                        value={values.emergencyContact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="emergencyContact"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="emergencyContact"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="nationality">Nationality</label>
                      <Field
                        value={values.nationality}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="nationality"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="nationality"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="passportId">Passport ID</label>
                      <Field
                        value={values.passportId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="passportId"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="passportId"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="enrollmentStatus">
                        Enrollment Status
                      </label>
                      <Field
                        value={values.enrollmentStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="enrollmentStatus"
                        as="select"
                      >
                        <option value="">Select one option below</option>
                        <option value="enrolled">Enrolled</option>
                        <option value="not_enrolled">Not Enrolled</option>
                        <option value="deferred">Deferred</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="enrollmentStatus"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="program">Enter Program</label>
                      <Field
                        value={values.program}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="program"
                        type="text"
                      />
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="program"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="levelOfStudy">Level of study</label>
                      <Field
                        value={values.levelOfStudy}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="levelOfStudy"
                        as="select"
                      >
                        <option value="">--Level of study--</option>
                        <option value="Bachlors">Bachlor's Program</option>
                        <option value="Masters">Master Program</option>
                        <option value="Others">Others</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="levelOfStudy"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="disability">Disability</label>
                      <Field
                        value={values.disability}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="disability"
                        as="select"
                      >
                        <option value="">Select one option below</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No </option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="disability"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="bloodGroup">bloodGroup</label>
                      <Field
                        value={values.bloodGroup}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="bloodGroup"
                        as="select"
                      >
                        <option value="">--Blood Group--</option>
                        <option value="A+">A+</option>
                        <option value="B+">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="bloodGroup"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label htmlFor="Domicile">Domicile</label>
                      <Field
                        value={values.Domicile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="Domicile"
                        as="select"
                      >
                        <option value="">--Select Domicile--</option>
                        <option value="punjab">Punjab</option>s
                        <option value="sindh">Sindh</option>
                        <option value="kpk">Khyber Pakhtunkhwa (KPK)</option>
                        <option value="balochistan">Balochistan</option>
                        <option value="gilgit-baltistan">
                          Gilgit-Baltistan
                        </option>
                        <option value="ajk">
                          Azad Jammu and Kashmir (AJK)
                        </option>
                        <option value="islamabad">
                          Islamabad Capital Territory
                        </option>
                      </Field>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="Domicile"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label>Have you ever been convicted of a crime?</label>
                      <div className={styles.circuleItem}>
                        <label>
                          <Field
                            type="radio"
                            name="criminalHistory"
                            value="Yes"
                          />
                          Yes
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="criminalHistory"
                            value="No"
                          />
                          No
                        </label>
                      </div>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="criminalHistory"
                        />
                      </div>
                    </div>
                    <div className={styles.inputItem}>
                      <label>Hafiz-E-Quran?</label>
                      <div className={styles.circuleItem}>
                        <label>
                          <Field type="radio" name="HFQ" value="Yes" />
                          Yes
                        </label>
                        <label>
                          <Field type="radio" name="HFQ" value="No" />
                          No
                        </label>
                      </div>
                      <div className={styles.error_Div}>
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="HFQ"
                        />
                      </div>
                    </div>

                    <div className={styles.inputItem}>
                      <button type="button" className={styles.submitNext}>
                        Update Fields
                      </button>
                    </div>
                    <div className={styles.inputItem}>
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className={styles.submitNext}
                      >
                        Save & Next
                      </button>
                    </div>
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

export default withAuth(PersonalInformation);
