import Todo from './Todo';
import React from 'react';
import './App.css';
import {Paper, List} from "@material-ui/core";

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

  render() {
    // Todo 컴포넌트 배열 생성
    // 앞 문장 참이면 && 뒤 문장 실행
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id}/>
          ))}
        </List>
      </Paper>
    )
    
    return (
      <div className='App'>
        {/* Todo 컴포넌트 여러 개 */}
        {todoItems}
        {
          // 한줄 주석은 요로코롬.
        }
      </div>
      );
    }
  }

export default App;
