<template>
	<m-card :icon="icon" :title="title">
		<div class="nav jc-between">
			<div
				class="nav-item"
				:class="{active: active === index}"
				v-for="(category, index) in categroies"
				:key="index"
				@click="active = index"
			>
				<div class="nav-link">{{category.name}}</div>
			</div>
		</div>
		<div class="pt-3">
			<swiper>
				<swiper-slide v-for="(category, index) in categroies" :key="index">
					<slot name="items" :category="category"></slot>
				</swiper-slide>
			</swiper>
		</div>
	</m-card>
</template>

<script>
export default {
	provide() {
		return {
			getMap: this.getMap,
		};
	},
	created() {
		// console.log(this.$parent.tableProxy);
	},
	methods: {
		getMap() {
			console.log(1);
		},
	},
	props: {
		icon: { type: String, required: true },
		title: { type: String, required: true },
		categroies: { type: Array, required: true },
	},
	data() {
		return {
			active: 0,
		};
	},
};
</script>

<style scoped>
</style>
