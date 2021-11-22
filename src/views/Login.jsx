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

const Login = () => {
  const navigator = useNavigate()

  return (
    <Grid>
      <FormBlock
        title="Login"
        bottomTitle="login"
        bottomText={bottomTexts.loginPage}
        url="/register"
        to="Sign Up"
      >
        <Formik
          initialValues={{ emailLogin: "", passwordLogin: "" }}
          validateOnBlur
          onSubmit={({ emailLogin, passwordLogin }) => {
            console.log(emailLogin, passwordLogin);
            let data = JSON.parse(localStorage.getItem("user"))
            if (data && data.email === emailLogin && data.password === passwordLogin) {
              navigator("/")
            } else {
              console.error("Invalid user email or password")
            }

          }}
          validationSchema={yupValidators.loginPage(
            "emailLogin",
            "passwordLogin"
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
                label="E-mail"
                placeholder="Enter your e-mail"
                name="emailLogin"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailLogin}
                touched={touched.emailLogin}
                errors={errors.emailLogin}
              />

              <InputPassword
                name="passwordLogin"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordLogin}
                touched={touched.passwordLogin}
                errors={errors.passwordLogin}
                fp={true}
              />

              <Button className="disabled:button" disabled={!isValid} onClick={handleSubmit}>
                Login
              </Button>
            </form>
          )}
        </Formik>
      </FormBlock>
      <Background url={backgrounds.loginPage} />
    </Grid>
  );
};

export default Login;
