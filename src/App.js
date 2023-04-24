import Todo from './Todo';
import React from 'react';
import AddTodo from './AddTodo.js'
import './App.css';
import {Paper, List, Container} from "@material-ui/core";
import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 나중에 백엔드에서 받아 올 데이터. 지금 이건 더미 데이터임.
    this.state = {
      items: []
    };
  }

  // 리액트는 내부적으로 ReactDom(Virtual DOM) 트리 갖고있음
  // 컴포넌트 상태 변경 시 Virtual DOM에 반영된 후 브라주더의 HTML DOM이 변경됨
  // 마운팅: 각 컴포넌트 생성자와 render함수 호출하여 자신의 DOM 트리 구성
  // componentDidMount: 마운팅 마친 후 호출하는 함수: 마운팅 다 안된 상태에서 백엔드 요청 일어나면 오류발생가능성 있음
  // CORS 오류 발생: 8080이 아닌 3000에서 요청 오므로 거절...(주소가 다르므로)
  // 이걸 허락해줘야 처음 리소스 제공항 도메인이 현재 요청하려는 도메인과 다르더라고 요청을 허락해줌
  componentDidMount() {
    call("/todo", "GET", null).then((response) => 
      this.setState({items: response.data})
    );
  }

  // todo list에 데이터 추가하는 함수: AddTodo에 전달
  add = (item) => {
    call("/todo", "POST", item).then((response) => 
      this.setState({items: response.data})
    );
  };
  
  // todo list의 데이터 삭제하는 함수: Todo에 전달
  delete = (item) => {
    call("/todo", "DELETE", item).then((response) => 
      this.setState({items: response.data})
    );
  };


  render() {
    // Todo 컴포넌트 배열 생성
    // 앞 문장 참이면 && 뒤 문장 실행
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete}/>
          ))}
        </List>
      </Paper>
    )
    
    return (
      <div className='App'>
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
        {/* 긴 주석 */}
        {
          // 한줄 주석은 요로코롬.
        }
      </div>
      );
    }
  }

export default App;
