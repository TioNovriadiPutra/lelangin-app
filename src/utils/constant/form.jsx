import { colors } from "@themes/colors";

export const loginForm = {
  title: "Login",
  inputs: [
    {
      type: "text",
      name: "email",
      placeholder: "Your Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Your Password",
    },
  ],
  defaultValues: {
    email: "",
    password: "",
  },
  withFooter: true,
  buttonData: {
    label: "Sign In",
    color: colors.Main,
  },
};

export const registerForm = {
  title: "Register",
  inputs: [
    {
      type: "text",
      name: "email",
      placeholder: "Your Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Your Password",
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Confirm Password",
    },
    {
      type: "text",
      name: "fullName",
      placeholder: "Your Full Name",
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Your Gender",
      items: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
    {
      type: "date",
      name: "dob",
      placeholder: "Date of Birth",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Address",
    },
  ],
  defaultValues: {
    email: "",
    password: "",
    password_confirmation: "",
    fullName: "",
    gender: null,
    dob: undefined,
    address: "",
  },
  withFooter: false,
  buttonData: {
    label: "Sign Up",
    color: colors.Main,
  },
};

export const editAccountForm = {
  headerData: {
    title: "Edit Account",
    buttonData: {
      type: "text",
      label: "Edit",
    },
    withBack: true,
  },
  inputs: [
    {
      type: "profile",
      name: "profilePic",
    },
    {
      type: "text",
      name: "fullName",
      placeholder: "Your Full Name",
    },
  ],
  defaultValues: {
    profilePic: null,
    fullName: "",
  },
};
