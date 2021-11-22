import React from "react";
import { Formik } from "formik";
import Grid from "./../components/Login Form/Grid";
import Background from "./../components/Login Form/Background";
import FormBlock from "./../components/Login Form/FormBlock";
import InputText from "./../components/Login Form/InputText";
import Button from "./../components/Login Form/Button";
import { backgrounds, bottomTexts, yupValidators } from "./../utils/consts";
import { resetPassword } from "../utils/firebaseAuth";

const ForgotPassword = () => {
  return (
    <Grid>
      <Background url={backgrounds.forgotPasswordPage} />
      <FormBlock
        title="Reset Password"
        bottomText={bottomTexts.forgotPasswordPage}
        url="/login"
        to="Login"
      >
        <Formik
          initialValues={{
            emailForgotPassword: "",
          }}
          validateOnBlur
            onSubmit={({ emailForgotPassword }) => {
              resetPassword(emailForgotPassword);
            }}
          validationSchema={yupValidators.forgotPasswordPage(
            "emailForgotPassword"
          )}
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
              <p className="mb-4">
                Enter the email address associated with your account.
              </p>
              <InputText
                label="E-mail"
                placeholder="Enter your e-mail"
                name="emailForgotPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailForgotPassword}
                touched={touched.emailForgotPassword}
                errors={errors.emailForgotPassword}
              />

              <Button disabled={!isValid} onClick={handleSubmit}>
                Continue
              </Button>
            </form>
          )}
        </Formik>
      </FormBlock>
    </Grid>
  );
};

export default ForgotPassword;
