<!-- @format -->

<template>
	<div class="main-container" v-for="{ id, title, points } in data" :id="id">
		<h3 class="title">{{ title }}:</h3>
		<ul>
			<li v-for="{ id, title } in points" :id="id">{{ title }}</li>
		</ul>
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
	display: flex;
	flex-direction: column;
}
h3,
p,
.title,
li {
	color: #000;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 12px; /* 100% */
	letter-spacing: -0.5px;
}
h3 {
	text-decoration-line: underline;
}
li {
	margin-left: 20px;
	margin-top: 10px;
}
ul {
	margin-bottom: 30px;
	margin-right: 80px;
}
</style>
