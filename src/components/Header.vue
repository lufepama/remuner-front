<!-- @format -->

<template>
	<div class="header-container">
		<h1 class="header-title">{{ title }}</h1>
	</div>
</template>
<script>
export default {
	props: ["title"],
	setup(props) {
		return {
			...props,
		};
	},
};
</script>
<style scoped>
.header-container {
	width: 100% !important;
	height: 47px;
	background-color: #5e6ad2;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.header-title {
	color: #fff;
	padding-left: 51px;
}
</style>
