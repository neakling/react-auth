import React, { useEffect, useState } from "react";
import "./register.css";
import { Button, Box } from "@mui/material";
import { purple, blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RegisterButton = styled(Button)({
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

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [login, setLogin] = useState(true);

    const user = useSelector((state) => state.user);
    const [goToHome, setGoToHome] = useState(true);

    useEffect(() => {
        console.log("here", user);
    }, [user]);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!username) {
            console.log("not fill fields");
        } else if (confirmPassword !== password) {
            console.log("incorrect confirm password");
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

    return (
        <div className="App">
            <div className="auth-block">
                <div className="block">
                    <h1 className="log-in">Register Page</h1>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            value={username}
                            className="pass"
                            type="text"
                            align="center"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            value={password}
                            className="pass"
                            type="password"
                            align="center"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            value={confirmPassword}
                            className="pass"
                            type="password"
                            align="center"
                            placeholder="Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="buttons">
                            <Box sx={{ "& button": { m: 1 } }}>
                                <RegisterButton
                                    type="submit"
                                    variant="contained"
                                >
                                    Register
                                </RegisterButton>
                                <LoginButton
                                    className="text"
                                    variant="contained"
                                >
                                    <Link to="/login">Login</Link>
                                </LoginButton>
                            </Box>
                        </div>
                        <div className="forgot-password">
                            <p>Forgot password?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;
