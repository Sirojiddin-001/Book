import React from "react";
import { Formik } from "formik";
import Grid from "./../components/UI/Grid";
import Background from "./../components/UI/Background";
import FormBlock from "./../components/UI/FormBlock";
import InputText from "./../components/UI/InputText";
import Button from "./../components/UI/Button";
import { backgrounds, bottomTexts, yupValidators } from "./../utils/consts";

const ForgotPassword = () => {
  return (
    <Grid>
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
      <Background url={backgrounds.forgotPasswordPage} />
    </Grid>
  );
};

export default ForgotPassword;
