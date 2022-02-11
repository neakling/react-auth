import { Button, Box } from "@mui/material";
import { purple, blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

const Home = () => {
    return (
        <div className="App">
            <div className="auth-block">
                <div className="block">
                    <h1 className="log-in">Make ur choice</h1>

                    <div className="buttons">
                        <Box sx={{ "& button": { m: 1 } }}>
                            <LoginButton type="submit" variant="contained">
                                <Link to="/login">Login</Link>
                            </LoginButton>
                            <RegisterButton variant="contained">
                                <Link to="/register">Register</Link>
                            </RegisterButton>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
