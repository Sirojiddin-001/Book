import * as yup from "yup";

export const routerUrls = {
  loginPage: "/login",
  registerPage: "/register",
  forgotPasswordPage: "/forgotPassword",
};

export const backgrounds = {
  loginPage:
    "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  registerPage:
    "https://images.pexels.com/photos/3184359/pexels-photo-3184359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  forgotPasswordPage:
    "https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const bottomTexts = {
  loginPage: "Don't have an account?",
  registerPage: "Already have an account?",
  forgotPasswordPage: "Back to",
};

export const yupValidators = {
  loginPage: (email, password) => {
    let schema = yup.object().shape({
      [email]: yup
        .string()
        .email("Invalid email address")
        .required("This is a required field"),
      [password]: yup
        .string()
        .min(6, "Must be at least 6 chars long")
        .matches(/^[A-zА-я0-9_ ]+$/, "Please remove unnecessary characters")
        .required("This is a required field"),
    });
    return schema;
  },
  registerPage: (login, email, password) => {
    let schema = yup.object().shape({
      [login]: yup
        .string()
        .min(3, "Must be at least 3 chars long")
        .matches(/^[A-zА-я0-9_ ]+$/, "Please remove unnecessary characters")
        .required("This is a required field"),
      [email]: yup
        .string()
        .email("Invalid email address")
        .required("This is a required field"),
      [password]: yup
        .string()
        .min(6, "Must be at least 6 chars long")
        .matches(/^[A-zА-я0-9_ ]+$/, "Please remove unnecessary characters")
        .required("This is a required field"),
    });
    return schema;
  },
  forgotPasswordPage: (email) => {
    let schema = yup.object().shape({
      [email]: yup
        .string()
        .email("Invalid email address")
        .required("This is a required field"),
    });
    return schema;
  },
  updateProfile: (login, email) => {
    let schema = yup.object().shape({
      [login]: yup
        .string()
        .min(3, "Must be at least 3 chars long")
        .matches(/^[A-zА-я0-9_ ]+$/, "Please remove unnecessary characters")
        .required("This is a required field"),
      [email]: yup
        .string()
        .email("Invalid email address")
        .required("This is a required field"),
    });
    return schema;
  },
};

export const getToSearch = (state) => {
  document.querySelectorAll(".search").forEach((el) => {
    el.addEventListener("input", function () {
      state(this.value);
    });
  });
};
