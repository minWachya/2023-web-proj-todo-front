import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item};
    }

    render() {
        return (
            <div className="Todo">
                <input 
                    type="checkbox" 
                    id={this.state.item.id} 
                    name={this.state.item.id} 
                    checked={this.state.item.done} 
                    />
                <label id={this.state.item.id}>{this.state.item.title}</label>
            </div>
        );
    }
}

// 다른 파일에서 사용할 수 있도록 클래스 만들면 항상 export 시켜줘야 함.
export default Todo;