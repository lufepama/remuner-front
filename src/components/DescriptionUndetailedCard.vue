<!-- @format -->

<template>
	<div class="container">
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
.container {
	width: 100% !important;
}
p {
	margin-top: 15px;
}
</style>
