import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Button, Box } from "@mui/material";
import { purple, blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Profile from "../Profile/profile";

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
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordPass, setPasswordPass] = useState("");
    const [goToHome, setGoToHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (!username || !password) {
            console.log("not full fields");
        } else if (passwordPass !== password || usernameLogin !== username) {
            console.log("incorrect password or username");
        } else {
            setGoToHome(!goToHome);
        }
    }
    return (
        <div className="App">
            {goToHome ? (
                <div className="auth-block">
                    <div className="block">
                        <h1 className="log-in">Login Page</h1>
                        <form onSubmit={handleLogin}>
                            <input
                                value={usernameLogin}
                                className="pass"
                                type="text"
                                align="center"
                                placeholder="Username"
                                onChange={(e) =>
                                    setUsernameLogin(e.target.value)
                                }
                            />
                            <input
                                value={passwordPass}
                                className="pass"
                                type="password"
                                align="center"
                                placeholder="Password"
                                onChange={(e) =>
                                    setPasswordPass(e.target.value)
                                }
                            />
                            <div className="buttons">
                                <Box sx={{ "& button": { m: 1 } }}>
                                    <LoginButton
                                        type="submit"
                                        variant="contained"
                                    >
                                        Login
                                    </LoginButton>
                                    <Register variant="contained">
                                        <Link to="/register">Register</Link>
                                    </Register>
                                </Box>
                            </div>
                            <div className="forgot-password">
                                <p>Forgot password?</p>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <Profile />
            )}
        </div>
    );
};
export default Login;
