<!-- @format -->

<template>
	<div class="main-container">
		<p v-for="{ title, description } in data">
			<strong>{{ title }}</strong> = {{ description }}
		</p>
	</div>
</template>
<script>
export default {
	props: ["data"],
	setup(props) {
		return {
			...props,
		};
	},
};
</script>
<style scoped>
.main-container {
	width: 100% !important;
	margin-top: -20px;
	padding: 0 !important;
}
p {
	margin-top: 20px;
}
</style>
