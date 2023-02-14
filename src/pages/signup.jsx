import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetSignupFormStatus, userSignup } from "../state/slices/user";

function Signup() {
  let userState = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [signupDetails, setSignupDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  let [errorDetails, setErrorDetails] = React.useState({
    firstName: { hasError: false, msg: "" },
    lastName: { hasError: false, msg: "" },
    email: { hasError: false, msg: "" },
    password: { hasError: false, msg: "" },
  });
  let [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    dispatch(resetSignupFormStatus());
  }, []);

  let formSubmitHandler = (e) => {
    e.preventDefault();
    if (formValidate()) {
      dispatch(
        userSignup({
          firstName: signupDetails.firstName,
          lastName: signupDetails.lastName,
          email: signupDetails.email,
          password: signupDetails.password,
        })
      );
    }
  };
  let firstNameChangeHandler = (e) => {
    setSignupDetails({ ...signupDetails, firstName: e.target.value });
    if (e.target.value.length < 4) {
      setErrorDetails({
        ...errorDetails,
        firstName: {
          hasError: true,
          msg: "First Name Must Be Between 4 And 20 Characters",
        },
      });
    } else {
      setErrorDetails({
        ...errorDetails,
        firstName: {
          hasError: false,
          msg: "",
        },
      });
    }
  };

  let lastNameChangeHandler = (e) => {
    setSignupDetails({ ...signupDetails, lastName: e.target.value });
    if (e.target.value.length < 4) {
      setErrorDetails({
        ...errorDetails,
        lastName: {
          hasError: true,
          msg: "Last Name Must Be Between 4 And 20 Characters",
        },
      });
    } else {
      setErrorDetails({
        ...errorDetails,
        lastName: {
          hasError: false,
          msg: "",
        },
      });
    }
  };

  let emailChangeHandler = (e) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = regex.test(e.target.value);
    setSignupDetails({ ...signupDetails, email: e.target.value });
    if (!isValid) {
      setErrorDetails({
        ...errorDetails,
        email: {
          hasError: true,
          msg: "Invalid Email",
        },
      });
    } else {
      setErrorDetails({
        ...errorDetails,
        email: {
          hasError: false,
          msg: "",
        },
      });
    }
  };

  let passwordChangeHandler = (e) => {
    setSignupDetails({ ...signupDetails, password: e.target.value });
    if (e.target.value.length < 8) {
      setErrorDetails({
        ...errorDetails,
        password: {
          hasError: true,
          msg: "Password must be at least 8 characters",
        },
      });
    } else {
      setErrorDetails({
        ...errorDetails,
        password: {
          hasError: false,
          msg: "",
        },
      });
    }
  };

  let passwordvisibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  let handleModalClose = () => {
    dispatch(resetSignupFormStatus());
  };

  let validators = [
    firstNameChangeHandler,
    lastNameChangeHandler,
    emailChangeHandler,
    passwordChangeHandler,
  ];

  let formValidate = () => {
    let isValid = true;
    Object.keys(signupDetails).forEach((detailName, index) => {
      let currValue = signupDetails[detailName];
      if (!currValue) {
        validators[index]({ target: { value: currValue } });
        isValid = false;
      }
    });
    if (!isValid) {
      return false;
    } else {
      Object.keys(errorDetails).forEach((detailName) => {
        if (errorDetails[detailName].hasError) {
          isValid = false;
        }
      });
      return isValid;
    }
  };

  if (userState.userSignup.successMsg) {
    navigate("/login");
  }

  return (
    <Box
      py={5}
      bgcolor="#f8f8f8"
      height={"100vh"}
      display="flex"
      justifyContent="center"
    >
      <Modal
        open={
          userState.userSignup.loading ||
          userState.userSignup.errorMsg ||
          userState.userSignup.successMsg
        }
        onClose={handleModalClose}
      >
        <Box
          display="flex"
          position="absolute"
          top="50%"
          left="50%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ transform: "translate(-50%,-50%)" }}
        >
          {userState.userSignup.errorMsg && (
            <Alert severity="error">{userState.userSignup.errorMsg}</Alert>
          )}
          {userState.userSignup.loading && <CircularProgress color="primary" />}
        </Box>
      </Modal>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent="space-between"
        width={{ xs: "100vw", md: "60vw", lg: "50vw" }}
      >
        <Box>
          <Box display="flex" justifycontent="start">
            <ArrowBack></ArrowBack>
          </Box>
          <Box display={"flex"} flexDirection="column" p={2}>
            <Typography my={0} sx={{ fontWeight: "800" }} variant="h6">
              Signup to World Medical Card{" "}
            </Typography>
            <Typography my={2} variant="body1" color="gray">
              How would you like to sign-up?
            </Typography>
          </Box>
          <Box
            m={1}
            display="flex"
            justifyContent={"center"}
            padding={1}
            bgcolor="white"
            borderRadius={3}
          >
            <Typography p={1} variant="body1">
              Sign-up with Google
            </Typography>
          </Box>
          <Box mt={6} display={"flex"} justifyContent="center">
            <Typography color={"lightGray"}>
              {" "}
              _______________{" "}
              <Typography
                px={2}
                sx={{ display: "inline", fontWeight: "600" }}
                color="gray"
              >
                OR
              </Typography>{" "}
              _______________
            </Typography>
          </Box>

          <Box
            justifyContent={"space-between"}
            display={"flex"}
            flexDirection="column"
          >
            <Box m={2}>
              <Box my={3} bgcolor="white">
                <TextField
                  sx={{ m: 1 }}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  fullWidth={true}
                  size="large"
                  value={signupDetails.firstName}
                  onChange={firstNameChangeHandler}
                  label="first name"
                ></TextField>
                {errorDetails.firstName.hasError ? (
                  <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">
                    {errorDetails.firstName.msg}
                  </Alert>
                ) : (
                  <></>
                )}
              </Box>

              <Box my={3} bgcolor="white">
                <TextField
                  sx={{ m: 1 }}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  fullWidth={true}
                  size="large"
                  value={signupDetails.lastName}
                  onChange={lastNameChangeHandler}
                  label="last name"
                ></TextField>
                {errorDetails.lastName.hasError ? (
                  <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">
                    {errorDetails.lastName.msg}
                  </Alert>
                ) : (
                  <></>
                )}
              </Box>

              <Box my={3} bgcolor="white">
                <TextField
                  sx={{ m: 1 }}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  fullWidth={true}
                  size="large"
                  value={signupDetails.email}
                  onChange={emailChangeHandler}
                  label="email"
                ></TextField>
                {errorDetails.email.hasError ? (
                  <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">
                    {errorDetails.email.msg}
                  </Alert>
                ) : (
                  <></>
                )}
              </Box>
              <Box my={2} bgcolor="white">
                <TextField
                  sx={{ m: 1 }}
                  size="large"
                  type={showPassword ? "text" : "password"}
                  value={signupDetails.password}
                  onChange={passwordChangeHandler}
                  label="password"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={passwordvisibilityHandler}>
                          {showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility></Visibility>
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                ></TextField>
                {errorDetails.password.hasError ? (
                  <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">
                    {errorDetails.password.msg}
                  </Alert>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          height="auto"
          m={2}
          mt="auto"
          display={"flex"}
          flexDirection={"column"}
          alignItems="center"
        >
          <Typography pb={"20px"}>
            All ready have an account ? <Link to={"/login"}>Login</Link>{" "}
          </Typography>
          <Box width={"100%"} borderRadius={30} overflow="hidden">
            <Button
              onClick={formSubmitHandler}
              sx={{ padding: "0.7em" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Signup;
