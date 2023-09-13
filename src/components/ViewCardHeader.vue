<!-- @format -->

<template>
	<div class="header-container">
		<h1>{{ title }}</h1>
		<!-- <v-btn color="primary" @click="openDialog">Abrir Diálogo</v-btn> -->
		<div>
			<v-btn @click="onDelete" class="btn-trash" icon="mdi-delete"></v-btn>
			<v-btn @click="onOpen" class="btn-plus" icon="mdi-plus"></v-btn>
			<v-btn
				v-if="canEdit"
				@click="onEdit"
				class="btn-edit"
				icon="mdi-pencil"
				:disabled="isObserveAvailable"></v-btn>
			<v-btn
				v-if="canObserve"
				@click="onObserve"
				class="btn-edit"
				icon="mdi-eye"
				:disabled="isObserveAvailable"></v-btn>
		</div>
	</div>
</template>
<script>
export default {
	props: [
		"title",
		"onDelete",
		"onOpen",
		"onEdit",
		"canEdit",
		"canObserve",
		"onObserve",
		"isObserveAvailable",
	],
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
	margin-bottom: 20px;
}
.btn-trash {
	background-color: #e45252;
}
.btn-plus {
	background-color: #5e6ad2;
	margin-left: 10px;
}
.btn-edit {
	margin-left: 10px;
}
</style>
