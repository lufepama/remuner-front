<!-- @format -->

<template>
	<div class="main-container">
		<p class="text-title">{{ title }}</p>
		<p class="text-number">{{ number }}</p>
	</div>
</template>
<script>
export default {
	props: ["title", "number"],
	setup(props) {
		return {
			...props,
		};
	},
};
</script>
<style scoped>
.main-container {
	display: flex;
	flex-direction: row !important;
	justify-content: space-between;
	align-items: center;
	width: 100% !important;
	height: 101.73px;
	flex-shrink: 0;
	fill: #fff;
	filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.13))
		drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
	background-color: #fff;
	border-radius: 4px;
	padding: 42px 32px 42px 37px !important;
}
.text-title {
	color: #222326;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 16px; /* 100% */
	letter-spacing: 1px;
	width: 190px;
	height: 18.166px;
	flex-shrink: 0;
	opacity: 0.75;
}
.text-number {
	width: 33px;
	height: 38.754px;
	flex-shrink: 0;
	color: #5e6ad2;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px; /* 100% */
	letter-spacing: 1px;
}
</style>
