import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright "}
            fsoftwareemgineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>    {/* Router: Route 관리 */}
                    <div>
                        <Switch>
                            {/* Route: url에 따라 다른 컴포넌트 보여주는 컴포넌트 */}
                            {/* 로그인 렌더링: localhost:3000/login */}
                            <Route path="/login">
                                <Login />
                            </Route>
                            {/* App 컴포넌트 렌더링: localhost:3000/ */}
                            <Route path="/">
                                <App />
                            </Route>
                        </Switch>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Router>
            </div>
        );
    }
}

export default AppRouter;