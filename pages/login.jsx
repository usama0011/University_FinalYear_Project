import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import styles from "../styles/Login.module.css";
import SignUpImage from "../assets/Images/login.jpg";
import { useRouter } from "next/router";
import {
  EnvelopeIcon,
  IdentificationIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

const Login = () => {
  const [message, setMessage] = useState(null);
  const router = useRouter();
  const handleSubmitForm = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await axios.post("/api/user/login", values);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        if (response.data.user.isAdmin) {
          router.replace("/admin");
        } else {
          router.replace("/studentPortal");
        }
      } else {
        console.log("handle this");
      }
    } catch (error) {
      setMessage(error.response.data.message);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
  return (
    <>
      <div className={styles.singUpContainer}>
        <div className={styles.Image_Container}>
          <Image
            alt="login image"
            className={styles.nextImageC}
            width={500}
            height={450}
            src={SignUpImage}
          />
          <Link style={{ textDecoration: "underline" }} href="/SignUp">
            <p>Not a member signup!! </p>
          </Link>
        </div>
        <div className={styles.form_Container}>
          <h1>Sig In</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmitForm}
            className={styles.form}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form_Container}>
                <div className={styles.inputItem}>
                  <EnvelopeIcon className={styles.heroIcon} />
                  <Field
                    type="email"
                    placeholder="usama001@gmail.com"
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
          {message ? <div>{message}</div> : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
