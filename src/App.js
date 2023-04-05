import Todo from './Todo';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Todo />
        <Todo /> {/* 주석은 이렇게 답니다... 꽤나 복잡하군 */}
        {
          // 한줄 주석은 요로코롬.
        }
      </div>
      );
    }
  }

export default App;
