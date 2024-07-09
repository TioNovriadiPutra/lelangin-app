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

export const editAddressForm = {
  headerData: {
    title: "Address",
    buttonData: {
      type: "text",
      label: "Edit",
    },
    withBack: true,
  },
  inputs: [
    {
      type: "textarea",
      name: "address",
      placeholder: "Your Address",
    },
  ],
  defaultValues: {
    address: "",
  },
};

export const addCommunityForm = {
  headerData: {
    title: "Create Community",
    buttonData: {
      type: "text",
      label: "Create",
    },
    withBack: true,
  },
  inputs: [
    {
      type: "thumbnail",
      name: "thumbnail",
      placeholder: "Community Thumbnail",
    },
    {
      type: "text",
      name: "communityName",
      placeholder: "Community Name",
    },
  ],
  defaultValues: {
    thumbnail: null,
    communityName: "",
  },
};

export const addAuctionForm = {
  headerData: {
    title: "Create Auction",
    buttonData: {
      type: "text",
      label: "Post",
    },
    withBack: true,
  },
  inputs: [
    {
      type: "galleries",
      name: "auctionImages",
      placeholder: "Add Image",
    },
    {
      type: "text",
      name: "auctionName",
      placeholder: "Auction Title",
    },
    {
      type: "dropdown",
      name: "categoryId",
      placeholder: "Category",
      items: [],
    },
    {
      type: "dropdown",
      name: "communityId",
      placeholder: "Tag Community",
      items: [],
    },
    {
      type: "textarea",
      name: "description",
      placeholder: "Description",
    },
    {
      type: "currency",
      name: "startBid",
      placeholder: "Start Bid",
    },
    {
      type: "switch",
      name: "buyNow",
      placeholder: "Buy Now",
    },
    {
      type: "currency",
      name: "buyNowPrice",
      placeholder: "Buy Now Price",
    },
    {
      type: "datetime",
      name: "timer",
      placeholder: "Set Timer",
    },
  ],
  defaultValues: {
    auctionImages: [],
    auctionName: "",
    categoryId: null,
    communityId: null,
    description: "",
    startBid: "",
    buyNow: false,
    buyNowPrice: "",
    timer: undefined,
  },
};
