<template>
	<div id="theater">
		<video id="video" src="http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv"
			controls="false"></video>
		<canvas id="canvas"></canvas>
	</div>
</template>

<script>
	export default {
		name: 'Trainer',
		data() {
			return {
				canvas: null,
				ctx: null,
				video: null
			}
		},
		mounted() {
			this.canvas = document.getElementById('canvas');
			this.ctx = this.canvas.getContext('2d');
			this.video = document.getElementById('video');

			this.video.addEventListener('loadedmetadata', function () {
				this.canvas.width = this.video.videoWidth;
				this.canvas.height = this.video.videoHeight;
			});
			this.video.addEventListener('play', function () {
				var $this = this; //cache
				(function loop() {
					if (!$this.paused && !$this.ended) {
						this.ctx.drawImage($this, 0, 0);
						setTimeout(loop, 1000 / 30); // drawing at 30fps
					}
				})();
			}, 0);
		}
	}
</script>

<style>

</style>