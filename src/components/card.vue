<template>
	<div class="card p-3 bg-white mt-3" v-bind="$attrs">
		<div class="card-header d-flex ai-center">
			<i class="iconfont icon-cc-menu-circle"></i>
			<div class="fs-xxl flex-1 mx-2">{{title}}</div>
			<i>---{{this.ass}}</i>
		</div>
		<div class="card-body pt-3">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$emit("change");
		// console.log(this.$listeners.change);
	},
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>