<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 3. 컴포넌트를 호출 -->
    <TodoList category="프로젝트"/>
    <TodoList category="알고리즘"/>
    <TodoList category="컴퓨터상식"/>
  </div>
</template>

<script>
// 1. 컴포넌트를 부모 컴포넌트에서 불러옴.
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList  // 2. 컴포넌트를 추가
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
