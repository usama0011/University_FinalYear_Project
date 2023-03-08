import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import styles from "../styles/SignUp.module.css";
import SignUpImage from "../assets/Images/signup.jpg";
import axios from "axios";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import {
  EnvelopeIcon,
  IdentificationIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username can't be longer than 50 characters")
    .required("Username is required"),
  idNumber: Yup.string()
    .matches(
      /^\d{5}-\d{7}-\d$/,
      "ID Number must be in the format: 35301-1571054-1"
    )
    .required("ID Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const router = useRouter();
  const [aleadyRegisted, setAlreadyRegisted] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const handleSubmitFunction = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("/api/user/", values);
      const { message, newUser } = response.data;
      setIsSuccess("Registraction Successfully Done");
      setTimeout(() => {
        setIsSuccess(null);
      }, 3000);
      resetForm();
    } catch (error) {
      let { response } = error;
      let { data } = response;
      setAlreadyRegisted(data.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className={styles.singUpContainer}>
        <div className={styles.form_Container}>
          <h1>Sign Up</h1>
          {/* Now paste the formik code */}
          <Formik
            initialValues={{
              userName: "",
              email: "",
              password: "",
              idNumber: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmitFunction}
            className={styles.form}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form_Container}>
                <div className={styles.inputItem}>
                  <UserIcon className={styles.heroIcon} />
                  <Field
                    type="text"
                    placeholder="usama0011"
                    className={styles.myInputBox}
                    name="userName"
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className={styles.ErrorDiv}
                  />
                </div>
                <div className={styles.inputItem}>
                  <EnvelopeIcon className={styles.heroIcon} />
                  <Field
                    type="email"
                    placeholder="usama0011@gmail.com"
                    name="email"
                    className={styles.myInputBox}
                  />
                  <ErrorMessage
                    className={styles.ErrorDiv}
                    name="email"
                    component="div"
                  />
                </div>
                <div className={styles.inputItem}>
                  <KeyIcon className={styles.heroIcon} />
                  <Field
                    type="password"
                    placeholder="******************"
                    name="password"
                    className={styles.myInputBox}
                  />
                  <ErrorMessage
                    className={styles.ErrorDiv}
                    name="password"
                    component="div"
                  />
                </div>
                <div className={styles.inputItem}>
                  <IdentificationIcon className={styles.heroIcon} />
                  <Field
                    type="text"
                    placeholder="3530115710541"
                    name="idNumber"
                    className={styles.myInputBox}
                  />
                  <ErrorMessage
                    className={styles.ErrorDiv}
                    name="idNumber"
                    component="div"
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  className={styles.submit_Button}
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          {isSuccess ? (
            <div className={styles.formError}>{isSuccess}</div>
          ) : null}
          {aleadyRegisted ? (
            <div className={styles.formError}>{aleadyRegisted}</div>
          ) : null}
        </div>
        <div className={styles.Image_Container}>
          <Image
            className={styles.signUPImage}
            src={SignUpImage}
            alt="sigUpImage"
            fill
          />
          <Link style={{ textDecoration: "underline" }} href="/LoginPage">
            <p>I am aleady a member</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
