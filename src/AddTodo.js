import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: {title: ""}}; // 제목 담을 변수
        this.add = props.add;             // App의 add 함수를 받아옴
    }

    // 텍스트 입력할 때마다 호출: props의 item.title에 input 값 넣음
    onInputChange = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    // + 버튼 클릭 시 App의 todo list에 item add
    onButtonClick = () => {
        this.add(this.state.item);          // 아이템 추가
        this.setState({item: {title: ""}}); // textField 값 초기화
    }

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField 
                        placeholder="Add Todo here"
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.item.title}
                         />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                        fullWidth 
                        color="secondary" 
                        variant="contained" 
                        onClick={this.onButtonClick}
                        >+</Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
    
}

export default AddTodo;