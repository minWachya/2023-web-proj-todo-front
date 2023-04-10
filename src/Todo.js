import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox} from "@material-ui/core";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item};
    }

    render() {
        const item = this.props.item;

        return (
            <ListItem>
                <Checkbox checked={item.done} />
                <ListItemText>
                    <InputBase
                    inputProps={{"aria-label": "naked"}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    />
                </ListItemText>
            </ListItem>
        );
    }
}

// 다른 파일에서 사용할 수 있도록 클래스 만들면 항상 export 시켜줘야 함.
// default: import 시 {} 필요 없음
export default Todo;