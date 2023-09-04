# NextJS

### library와 framework의 차이
library는 개발자가 원할 때 library를 불러와서 실행시키는 것이고, framework는 개발자가 작성한 코드(적절한 위치에 코드를 작성해야 한다)를 실행하는 차이가 있다. NextJS는 framework이다.

## 에러 해결
1. Image src prop 전달 시 hostname next.config.js 미등록
```
error Error: Invalid src prop (https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) on `next/image`, hostname "images.unsplash.com" is not configured under images in your `next.config.js`
```
아래와 같이 추가해 해결
```
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  }
}
```
