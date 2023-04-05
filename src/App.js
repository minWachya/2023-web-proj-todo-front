import logo from './logo.svg';
import Todo from './Todo';
import './App.css';

function App() {
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

export default App;
