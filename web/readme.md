## 용어
- WebGL(Web Graphics Library): 인터랙티브한 2D, 3D 그래픽을 그리는 자바스크립트 API이다. 크로노스 그룹에서 관리하며, 렌더링 표면을 제공하는 HTML canvas 요소 내부에서 활용할 수 있다. [출처](https://developer.mozilla.org/ko/docs/Glossary/WebGL)
- OG(Open Graph): 소셜 그래프에서 주로 사용되는 인터넷 프로토콜의 하나로서 페이스북이 만들었다. 메타데이터 제공 방식을 표준화하여 페이지 정보를 제공한다. `og:title`과 같은 방식으로 활용. [출처](https://ogp.me/)
    ```html
      <html prefix="og: https://ogp.me/ns#">
      <head>
      <title>The Rock (1996)</title>
      <meta property="og:title" content="The Rock" />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
      ...
      </head>
      ...
      </html>
    ```
