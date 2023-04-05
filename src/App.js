import Todo from './Todo';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {id:0, title: '맛있는 거 먹기', done: true},
    };
  }

  render() {
    return (
      <div className='App'>
        <Todo item={this.state.item}/>
        {/* 주석은 이렇게 답니다... 꽤나 복잡하군 */}
        {
          // 한줄 주석은 요로코롬.
        }
      </div>
      );
    }
  }

export default App;
