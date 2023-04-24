import { API_BASE_URL } from "../app-config"

// Promise 객체 리턴
export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };
    // 요청 데이터 있으면 body에 담음
    if(request) {
        options.body = JSON.stringify(request); // 문자열로 변환
    }

    // 서버에 요청 후 응답 받아옴. Promise 반환함
    return fetch(options.url, options).then((response) => 
        response.json().then((json) => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}