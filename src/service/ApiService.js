import { API_BASE_URL } from "../app-config"
const ACCESS_TOKEN = "ACCESS_TOKEN";

// Promise 객체 리턴
export function call(api, method, request) {
    // 토큰을 헤더에 추가
    let headers = new Headers({
        "Content-Type": "application/json",
    });
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if(accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };
    
    // 요청 데이터 있으면 body에 담음
    if(request) {
        options.body = JSON.stringify(request); // 문자열로 변환
    }

    // 서버에 요청 후 응답 받아옴. Promise 반환함
    return fetch(options.url, options)
        .then((response) => 
            response.json().then((json) => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        )
        // 로그인 안 한 상태일 때 로그인 화면으로 리다이렉트
        .catch((error) => {
            console.log(error.status);
            if(error.status === 403) {
                window.location.href = "/login"; // redirect
            }
            return Promise.reject(error);
        });
}

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
        .then((response) => {
            // 토큰 저장
            localStorage.setItem(ACCESS_TOKEN, response.token);
            // 리다이렉트
            window.location.href = "/";
        });
    }

export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
    }

export function signout() {
    // 토큰 삭제
    localStorage.setItem(ACCESS_TOKEN, null);
    // 리다이렉트
    window.location.href = "/login";
    }