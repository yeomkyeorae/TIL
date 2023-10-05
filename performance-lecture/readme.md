해당 repository는 <프론트엔드 성능 최적화 가이드>를 공부하면서 정리한 내용을 담고 있습니다.

## 용어
- 트리 쉐이킹(Tree shaking): 사용하지 않는 코드를 제거하는 방식. 코드가 복잡해 지면서 디펜던시가 지속적으로 추가되고, 사용하지 않는 디펜던시가 존재할 수 있다. 불필요한 코드를 제거하는 데 번들러를 주로 사용할 수 있다. 모듈을 가져올 때 사용하는 것만을 가져와 이용하면 성능상 이점을 가질 수 있다.
  ```javascript
  // 모든 배열 유틸리티들을 가져온다.
  import arrayUtils from "array-utils";
  
  // 유틸의 일부만 가져온다.
  import { unique, implode, explode } from "array-utils";

  // 출처: https://web.dev/reduce-javascript-payloads-with-tree-shaking/#go_shake_some_trees)https://web.dev/reduce-javascript-payloads-with-tree-shaking/#go_shake_some_trees
```
