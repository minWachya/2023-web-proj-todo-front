let backendHost;

// 현재 브라우저의 domain name 얻음
const hostname = window && window.location && window.location.hostname;

// 현재 브라우저의 domain name이 localhost면 아래 주소를 백엔드 서비스 주소로 설정
if(hostname === "localhost") {
//     backendHost = "http://localhost:8080";
// } else {
    backendHost = "http://prod-todo-backend-20190054.us-west-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;