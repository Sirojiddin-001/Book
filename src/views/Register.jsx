import React from "react";
import { Formik } from "formik";
import Grid from "./../components/UI/Grid";
import Background from "./../components/UI/Background";
import FormBlock from "./../components/UI/FormBlock";
import InputText from "./../components/UI/InputText";
import InputPassword from "./../components/UI/InputPassword";
import Button from "./../components/UI/Button";
import { backgrounds, bottomTexts, yupValidators } from "./../utils/consts";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Grid>
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
            localStorage.setItem("user", JSON.stringify({
              name: loginRegister,
              email: emailRegister,
              password: passwordRegister
            }))

            navigate("/")
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
      <Background url={backgrounds.registerPage} />
    </Grid>
  );
};

export default Register;
