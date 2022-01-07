import React from "react";

import { Formik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../Api/api";
import { signupSchema } from "../../validationSchema";
import { useAuth } from "../../Providers/AuthProvider";

function Index() {
  const INPUTS = [
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
  ];
  const handleSignUp = (values) => {
    axios
      .post(`/users/signup`, values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signupwrapper">
      <h1> Signup</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signupSchema}
        enableReinitialize
        onSubmit={(values) => {
          handleSignUp(values);
        }}
      >
        {({
          handleSubmit,
          values,
          handleBlur,
          errors,
          touched,
          handleChange,
        }) => {
          return (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              onSubmit={handleSubmit}
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                margin: "auto",
              }}
            >
              {INPUTS.map((input, index) => {
                return (
                  <TextField
                    error={touched[input.name] && errors[input.name]}
                    id={
                      input.name === "password"
                        ? "outlined-password-input"
                        : "outlined-basic"
                    }
                    label={input.label}
                    variant="outlined"
                    value={values[input.name]}
                    name={input.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    key={index}
                    helperText={
                      touched[input.name] && errors[input.name]
                        ? errors[input.name]
                        : null
                    }
                    type={input.name}
                  />
                );
              })}

              <Button variant="outlined" type="submit">
                Sign Up
              </Button>
            </Box>
          );
        }}
      </Formik>
    </div>
  );
}

export default Index;
