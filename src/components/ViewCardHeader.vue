<!-- @format -->

<template lang="">
	<div class="header-container">
		<h1>{{ title }}</h1>
		<!-- <v-btn color="primary" @click="openDialog">Abrir Diálogo</v-btn> -->
		<div>
			<v-btn @click="onDelete" class="btn-trash" icon="mdi-delete"></v-btn>
			<v-btn @click="onOpen" class="btn-plus" icon="mdi-plus"></v-btn>
		</div>
	</div>
</template>
<script>
export default {
	props: ["title", "onDelete", "onOpen"],
	setup(props) {
		return {
			...props,
		};
	},
};
</script>
<style scoped>
.header-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.btn-trash {
	background-color: #e45252;
}
.btn-plus {
	background-color: #5e6ad2;
	margin-left: 10px;
}
</style>
