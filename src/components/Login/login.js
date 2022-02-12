import { Link } from "react-router-dom";
import "./login.css";
import { Button, Box, TextField } from "@mui/material";
import { purple, blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Profile from "../Profile/profile";
import { useSelector, useDispatch } from "react-redux";

import { Formik } from "formik";

import * as Yup from "yup";
import { useEffect, useState } from "react";
import { login } from "../../store/user.slice";

const Register = styled(Button)({
    textTransform: "none",
    fontSize: 16,
    fontFamily: ['"Segoe UI"'],
    backgroundColor: blue[400],
    width: 150,
});

const LoginButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[400],
    "&:hover": {
        backgroundColor: purple[700],
    },
    textTransform: "none",
    fontSize: 16,
    fontFamily: ['"Segoe UI"'],
    width: 150,
}));

const Login = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [goToHome, setGoToHome] = useState(true);
    const [te, sette] = useState(true);

    useEffect(() => {
        console.log("here", user);
    }, [user]);

    useEffect(() => {
        dispatch(login({ name: "1", password: 1 }));
    }, []);

    return (
        <div className="App">
            {goToHome ? (
                <div className="auth-block">
                    <div className="block">
                        <h1 className="log-in">Login Page</h1>
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .min(2, "Too Short!")
                                    .max(50, "Too Long!")
                                    .url()
                                    .required("Required"),
                                password: Yup.string()
                                    .min(2, "Too Short!")
                                    .max(50, "Too Long!")
                                    .required("Required"),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                const username =
                                    localStorage.getItem("username");
                                const password =
                                    localStorage.getItem("password");

                                if (
                                    values.password !== password ||
                                    values.email !== username
                                ) {
                                    console.log(
                                        "incorrect password or username"
                                    );
                                } else {
                                    setGoToHome(!goToHome);
                                }

                                setSubmitting(false);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        error={
                                            Boolean(touched.email) &&
                                            Boolean(errors.email)
                                        }
                                        helperText={errors.email}
                                        value={values.email}
                                        className="pass"
                                        type="text"
                                        name="email"
                                        align="center"
                                        placeholder="Username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        error={
                                            Boolean(touched.password) &&
                                            Boolean(errors.password)
                                        }
                                        helperText={errors.password}
                                        value={values.password}
                                        className="pass"
                                        type="password"
                                        name="password"
                                        align="center"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className="buttons">
                                        <Box sx={{ "& button": { m: 1 } }}>
                                            <LoginButton
                                                type="submit"
                                                variant="contained"
                                                disabled={isSubmitting}
                                            >
                                                Login
                                            </LoginButton>
                                            <Link to="/register">
                                                <Register variant="contained">
                                                    Register
                                                </Register>
                                            </Link>
                                        </Box>
                                    </div>
                                    <div className="forgot-password">
                                        <p>Forgot password?</p>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            ) : (
                <Profile />
            )}
        </div>
    );
};
export default Login;
