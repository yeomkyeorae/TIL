<template>
    <div class="container show-grid">
        <h2 class="my-5">영상 목록</h2>
        <VideoListItem @video-select-event="selectedVideo" v-for="video in videos" :key="video.id.videoId" :video="video"/>
        <!-- 
            부모 컴포넌트에서는 이벤트 listen(v-on)
            -> 원하는 메소드 실행
         -->
    </div>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {
        videos: {
            type: Array,
            required: true
        }
    },
    methods: {
        selectedVideo(video){
            // video-select-event
            this.$emit('video-select-event', video)
        }
    }
}
</script>

<style>

</style>