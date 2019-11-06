<template>
    <div>
        <h1>이것이 싱글파일컴포넌트, 최상위 컴포넌트입니다.</h1>
        <TodoList category="취업준비"></TodoList>
        <TodoList category="SSAFY"></TodoList>
        <TodoList category="개인"></TodoList>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
    components: {
        TodoList
    }
}
</script>

<style lang="">
    
</style>