<template>
	<div style="background:pink;">
		<div class="one" @click="oneo">1</div>
		<div class="two" @click="two">2</div>
		<div class="three">
			<router-view />
		</div>
	</div>
</template>

<script>
	export default {
		name: "welcome",
		methods: {
			oneo() {
				this.$router.push("/AAA");
			},
			two() {
				this.$router.push("/BBB");
			},
		},
	};
</script>

<style scoped>
	.one {
		width: 100px;
		height: 200px;
		background: red;
		margin-bottom: 50px;
	}
	.two {
		width: 100px;
		height: 200px;
		background: lightskyblue;
		margin-bottom: 50px;
	}
	.three {
		width: 500px;
		height: 300px;
		background: darkseagreen;
	}
</style>
