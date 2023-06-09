import Todo from './Todo';
import React from 'react';
import AddTodo from './AddTodo.js'
import './App.css';
import {Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { call, signout } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 나중에 백엔드에서 받아 올 데이터. 지금 이건 더미 데이터임.
    this.state = {
      items: [],
      loading: true,
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
      this.setState({items: response.data, loading: false})
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

  // todo 수정하는 함수: Todo에 전달
  update = (item) => {
    call("/todo", "PUT", item).then((response) => 
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
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete}
              update={this.update}
              />
          ))}
        </List>
      </Paper>
    )

    // 앱바( 툴바 ( 그리드 )  )
    // 앱바: 화면 전체에 대한 정보, 액션 제공
    // 툴바: 컴포넌트들을 한 행에 보이게 하는 컨테이너
    var navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Typography variant='h6'>오늘의 할일</Typography>
          </Grid>
          <Grid>
            <Button color='inherit' onClick={signout}>로그아웃</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    // 로딩 중 아닐 떄: 아이템 리스트 화면
    var todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    );

    // 로딩 중일 때: 로딩 화면
    var loadingPage = <h1>로딩중...</h1>;

    // 기본 컨텐츠를 로딩 화면으로 초기화
    var content = loadingPage;

    if(!this.state.loading) {
      content = todoListPage;
    }
    
    return (
      <div className='App'>
        {content}
        {/* 긴 주석 */}
        {
          // 한줄 주석은 요로코롬.
        }
      </div>
      );
    }
  }

export default App;
