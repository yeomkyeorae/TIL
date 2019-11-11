<template>
    <div v-if="selectedVideo">
        <h3>비디오</h3>
        <iframe :src="videoUrl"
             frameborder="0"
             width="560"
             height="315"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: {
        selectedVideo: {
            type: Object,
            // requried: true 초기에 선택이 되어 있지 않을 수 있으므로
        }
    },
    computed: {
        videoUrl(){
            return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}/?rel=0;amp;autoplay=1`
        }
    }
}
</script>

<style>

</style>