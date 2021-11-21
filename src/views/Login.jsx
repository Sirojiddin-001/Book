import React from "react";
import { LgToXl } from "../hooks/useMedia";
import { Formik } from "formik";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    emailLogin: yup
      .string()
      .email("Invalid email address")
      .required("This is a required field"),
    passwordLogin: yup
      .string()
      .min(6, "Must be at least 6 chars long")
      .matches(/^[A-zА-я0-9_ ]+$/, "Please remove unnecessary characters")
      .required("This is a required field"),
  });

  return (
    <div className="uk-background-default" data-uk-height-viewport>
      <div className="container uk-flex">
        <div className="uk-width-1-2@m">
          <Formik
            initialValues={{ emailLogin: "", passwordLogin: "" }}
            validateOnBlur
            onSubmit={({ emailLogin, passwordLogin }) => {
              console.log(emailLogin, passwordLogin);
            }}
            validationSchema={schema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
            }) => (
              <form className="uk-form-stacked">
                <div className="uk-margin">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emailLogin}   
                    className={`uk-input ${errors.emailLogin ? 'uk-form-danger' : ''}`}
                    type="email"
                    placeholder="Enter your e-mail"
                    name="emailLogin"
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
        <LgToXl>
          <div className="uk-width-2-3">2</div>
        </LgToXl>
      </div>
    </div>
  );
};

export default Login;
