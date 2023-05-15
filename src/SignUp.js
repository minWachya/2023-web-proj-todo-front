import React from "react";
import { signup } from "./service/ApiService";
import { Button, TextField, Link, Grid, Container, Typography } from "@material-ui/core";

class SignUp extends React.Component {
    constructor(props) {
        super(props);  
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 작성된 이메일, 비밀번호를 가지고 회원가입 요청
    handleSubmit(event) {
        // submit 클릭 시 고유 동작 막아줌
        event.preventDefault();
        // 데이터 가져오기
        const data = new FormData(event.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        // 요청
        signup({email: email,  username: username, password: password}).then((response) => {
            // 회원가입 성공 시 로그인 화면으로 이동
            window.location.href = "/login";
        });
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
                <form noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                         <Grid item xs={12}>
                            <Typography component="h1" variant="h5">계정 생성</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="사용자 이름"
                                name="username"
                                autoComplete="fname" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="이메일 주소"
                                name="email"
                                autoComplete="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="패스워드"
                                name="password"
                                autoComplete="current-pasword" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary">계정 생성</Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link herf="/login" variant="body2">이미 계정이 있습니까? 로그인 하세요.</Link> 
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}

export default SignUp;