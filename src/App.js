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
      items: [
        {id:0, title: '맛있는 거 먹기', done: true}, 
        {id:1, title: '푹 자기', done: true}, 
        {id:2, title: '정처기 공부하기', done: false}]
    };
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
