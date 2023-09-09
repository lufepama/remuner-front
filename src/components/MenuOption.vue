<!-- @format -->

<template>
	<div class="template">
		<img :src="'/images/' + icon + '.svg'" :alt="pic" />
		<p class="title">{{ title }}</p>
	</div>
</template>
<script>
export default {
	props: ["title", "icon"],
	setup(props) {
		return {
			...props,
		};
	},
};
</script>
<style scoped>
.template {
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 100%;
	width: 100%;
	padding-left: 10px;
	padding-right: 12px;
}
.title {
	margin-left: 6px;
	color: #222326;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 12px; /* 100% */
	letter-spacing: -0.5px;
	align-self: center;
}
</style>
