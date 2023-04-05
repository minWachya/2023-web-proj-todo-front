import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div className="Todo">
                <input type="checkbox" id="todo0" name="todo0" value="todo0" />
                <label for="todo0">Todo 컴포넌트 만들기</label>
            </div>
        );
    }
}

// 다른 파일에서 사용할 수 있도록 클래스 만들면 항상 export 시켜줘야 함.
export default Todo;