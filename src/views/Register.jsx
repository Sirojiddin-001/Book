import React from "react";
import { Formik } from "formik";
import Grid from "./../components/Login Form/Grid";
import Background from "./../components/Login Form/Background";
import FormBlock from "./../components/Login Form/FormBlock";
import InputText from "./../components/Login Form/InputText";
import InputPassword from "./../components/Login Form/InputPassword";
import Button from "./../components/Login Form/Button";
import { backgrounds, bottomTexts, yupValidators } from "./../utils/consts";
import { useNavigate } from "react-router";
import { signUp } from "./../utils/firebaseAuth";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Grid>
      <Background url={backgrounds.registerPage} />
      <FormBlock
        title="Sign Up"
        bottomTitle="register"
        bottomText={bottomTexts.registerPage}
        url="/login"
        to="Login"
      >
        <Formik
          initialValues={{
            loginRegister: "",
            emailRegister: "",
            passwordRegister: "",
          }}
          validateOnBlur
          onSubmit={({ loginRegister, emailRegister, passwordRegister }) => {
            signUp(loginRegister, emailRegister, passwordRegister).then(() => {
              navigate("/beginner");
            });
          }}
          validationSchema={yupValidators.registerPage(
            "loginRegister",
            "emailRegister",
            "passwordRegister"
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
              <InputText
                label="Full Name"
                placeholder="Enter your name"
                name="loginRegister"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.loginRegister}
                touched={touched.loginRegister}
                errors={errors.loginRegister}
              />

              <InputText
                label="E-mail"
                placeholder="Enter your e-mail"
                name="emailRegister"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailRegister}
                touched={touched.emailRegister}
                errors={errors.emailRegister}
              />

              <InputPassword
                name="passwordRegister"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordRegister}
                touched={touched.passwordRegister}
                errors={errors.passwordRegister}
              />

              <Button disabled={!isValid} onClick={handleSubmit}>
                Register
              </Button>
            </form>
          )}
        </Formik>
      </FormBlock>
    </Grid>
  );
};

export default Register;
