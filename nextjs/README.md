# NextJS

### library와 framework의 차이
library는 개발자가 원할 때 library를 불러와서 실행시키는 것이고, framework는 개발자가 작성한 코드(적절한 위치에 코드를 작성해야 한다)를 실행하는 차이가 있다. NextJS는 framework이다.

### What's in Next.js
- Built-in Optimizations
- Data Fetching
- Node.js & Edge Runtimes
- Advanced Routing & Nested Layouts
- Dynamic HTML Streaming
- CSS Support
- Route Handlers
- Middleware
- React Server Components
- Client and Server Rendering

### 탄생 배경. CSR의 한계
렌더링하는 주체가 클라이언트 즉, 브라우저.
- 장점: 초기 로딩 이후 빠르게 UX 제공. 서버 부하 적음. TTV와 TTI 거의 일치.
- 단점: 사용자가 첫 화면(FCP)을 보는데 오래 걸린다. SEO 최적화 어려움. JS가 실행이 필수적. 브라우저에서 JS 코드가 실행되므로 보안에 취약. HTML을 CDN에 캐시 적용하기 어렵다.

### `SSG`(Static Site Generation)
렌더링하는 주체가 서버로서 빌드할 때 렌더링을 진행한다. 
- 장점: TTV 빠르다. SEO 우수. JS 불필요. 보안 강화. CDN 캐시 가능.
- 단점: 정적인 페이지이므로 동적 환경에 대응하기 어렵다.

### `ISR`(Incremental Static Regeneration)
렌더링하는 주체가 서버로서 `주기적`으로 렌더링을 진행한다.
- 장점: SSG 장점 + 웹페이지 데이터 주기적으로 업데이트 가능.
- 단점: 주기적으로 데이터를 업데이트할 수 있지만 실시간 데이터는 아님. 역시 동적 환경에 대응하기 어렵다.

### `SSR`(Server Side Rendering)
렌더링하는 주체가 서버로서 `요청이 올때 마다` 렌더링을 진행한다.
- 장점: SSG 장점 + 최신 데이터 사용. 동적 환경 대응 가능.
- 단점: 서버 부하 증가 가능성. CDN에 캐시 X. TTV, TTI 간극 존재.

페이지별 최적화를 위해 각 페이지마다 각각 다른 렌더링 방식을 사용한다. 한 페이지 내에서도 A 컴포넌트는 SSR, B 컴포넌트는 CSR로 구성할 수도 있다. 

### `Hydration`: 물로 채우다
Next.js는 클라이언트에서 요청이 오면 정적인 HTML 페이지를 먼저 응답한다(`pre-rendering`). 사용자는 페이지를 볼 수 있는 상태이지만 상호작용이 불가능하다. 이후에 서버가 React, JS를 응답해 클라이언트가 이를 실행해 상호작용이 가능해진다`(Hydrated!)`.


## 에러 해결
### Image src prop 전달 시 hostname next.config.js 미등록
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

### firebase auth 기능 추가 중 COOP(Cross-Origin-Openner-Policy) 정책에 따른 실패
next.js config에서 COOP에 관한 header를 추가해 해결. COOP란 웹 페이지 간의 교차 출처 스크립트 실행을 효과적으로 제어하기 위한 정책으로서 서로 다른 출처 간의 스크립트 실행을 제어하고 차단해 보안에 기여한다.
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin", // "same-origin-allow-popups"
          },
        ],
      },
    ];
  },
};
// 출처: https://stackoverflow.com/questions/76555769/google-sign-in-not-working-in-next-js-with-firebase-due-to-cross-origin-opener-p
```
