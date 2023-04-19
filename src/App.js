import Todo from './Todo';
import React from 'react';
import AddTodo from './AddTodo.js'
import './App.css';
import {Paper, List, Container} from "@material-ui/core";

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
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    };

    /* 
      fetch 반환 타입 == Promise: 비동기 처리 결과를 담는 객체. 미래에 응답이 도착하면 어떯게 해라.
      Promise 의 3가지 상태: 대기/이행/실패
      1. 대기 Pending: Promise 객체 생성 시 초기 상태
      2. 이행 Resolved: 요청 성공적으로 끝난 상태, 성공시 then에서 성공 함수 실행하고 이행상태 됨
      3. 실패 Rejected: thend의 실패 함수 실행하고 실패 상태 됨. catch 이용해 오류 처리함
    */
   // 기존 todo 리스트 받아오기
    fetch("http://localhost:8080/todo", requestOptions) // 이 옵션으로 요청 보낼 건데 처리할 수 있어?(작은 요청) => 진짜 요청 보냄
      .then((response) => response.json()) // string인 response를 json으로 변환. 얘의 반환값도 Promise!: method chaining
      .then( // then(cb1, cb2): cb1-성공 시 콜백 함수, cb2-실패 시 콜백 함수
        (response) => {
          this.setState({items: response.data,});
        },
        (error) => {
          this.setState({error,});
        }
     );
     // .catch(); 오류처리는 then(cb1, cb2)보단 catch 많이 이용
  }

  // todo list에 데이터 추가하는 함수: AddTodo에 전달
  add = (item) => {
    // todo 객체 생성
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    // 업데이트: setState통해 ui 다시 그림
    this.setState({items: thisItems});
    console.log("items: ",  this.state.items);
  }
  
  // todo list의 데이터 삭제하는 함수: Todo에 전달
  delete = (item) => {
    const thisItems = this.state.items;
    // 삭제할 id 외의 아이템만 newItems에 답기
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({items: newItems}, () => {
      console.log("Update Items: ", this.state.items)
    });
  }


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
