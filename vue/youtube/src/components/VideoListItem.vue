<template>
  <div @click="selectedVideo" class="row my-3 div-hover">
      <div class="col-md-6">
        <img :src="video.snippet.thumbnails.high.url" :alt="video.snippet.tile">
      </div>
      <div class="col-md-6">
        <h1>{{ video.snippet.title }}</h1>
        <p>{{ video.snippet.description }}</p>
      </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
    name: 'VideoListItem',
    props: {
        video: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectedVideo(){
            // video-select-event $emit
            // 자식컴포넌트에서는 이벤트 발생(값 전달)
            this.$emit('video-select-event', this.video)
        }
    }
}
</script>

<style scoped>
/* scoped: 해당 컴포넌트에서만 사용되는 style */
.div-hover {
    cursor: pointer;
}
.div-hover:hover {
    background-color: powderblue;
}
</style>