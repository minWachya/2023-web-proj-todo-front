import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item, readOnly: true}; // readOnly: true-수정 불가 false-수정 가능
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item)
    }
    
    // todo text부분 클릭 시 title 수정 가능 상태로 변경
    offReadOnlyMode = () => {
        this.setState({"readOnly": false}, () => {
            console.log("ReadOnly? ", this.state.readOnly)
        });
    }

    // todo title 수정할 때마다 title 값 갱신
    editEventHandler = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    }

    // todo title 수정 후 엔터 누를 때 수정 불가 상태로 변경
    enterKeyEventHandler = (event) => {
        if(event.key === "Enter") {
            this.setState({readOnly: true});
        }
    }

    checkboxEventHandler = (event) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item: thisItem});
    }
    

    render() {
        const item = this.props.item;

        return (
            <ListItem>
                <Checkbox checked={item.done} onChange={this.checkboxEventHandler}/>
                <ListItemText>
                    <InputBase
                    inputProps={{"aria-label": "naked", readOnly: this.state.readOnly}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={this.offReadOnlyMode} // readOnly 모드 끄기: 수정 가능
                    onChange={this.editEventHandler} // title 갱신
                    onKeyPress={this.enterKeyEventHandler} // readOnly 모드 켜기: 수정 불가
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo"
                    onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

// 다른 파일에서 사용할 수 있도록 클래스 만들면 항상 export 시켜줘야 함.
// default: import 시 {} 필요 없음
export default Todo;