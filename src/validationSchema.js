import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup.string().email("Should be  valid email"),
  password: yup.string().required(" Required").min(10, "Min 10 characters"),
});

export { signupSchema };
