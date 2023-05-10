import React from "react";
import { signin } from "./service/ApiService";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";


class Login extends React.Component {
    constructor(props) {
        super(props);   
        // this: Login
        // 이거 안 하면 함수 작성 시 this가 Login이 아니라 window로 되어버림. 여기 예제에서는 필요 없긴 한데...
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 작성된 이메일, 비밀번호를 가지고 로그인 요청
    handleSubmit(event) {
        // submit 클릭 시 고유 동작 막아줌
        event.preventDefault();
        // 데이터 가져오기
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        // 요청
        signin({email: email, password: password});
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* h5 스타일 적용 후 최종적으로 h1로 만들어라 */}
                        <Typography component="h1" variant="h5">로그인</Typography>
                    </Grid>
                </Grid>

                <form noValidate onSubmit={this.handleSubmit}>
                    {" "} {/* 간격 띄우기 */}
                    <Grid container spacing={2}>
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
                                id="paddword"
                                label="비밀번호"
                                name="password"
                                autoComplete="current-pasword" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary">로그인</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}

export default Login;