<!-- @format -->

<template>
	<section>
		<Header title="Usuarios" />
		<div class="main-container">
			<v-card width="100%" class="card-container">
				<v-alert
					v-if="showAlert"
					type="success"
					:title="getAlertText()"
					text=""></v-alert>
				<v-card-title>
					<ViewCardHeader
						title="Gestiona tus usuarios"
						:onDelete="handleDelete"
						:onOpen="openDialog" />
				</v-card-title>
				<v-card>
					<v-card-title class="title-table">
						<v-spacer></v-spacer>
						<v-text-field
							v-model="search"
							append-icon="mdi-magnify"
							label="Buscar"
							single-line
							hide-details></v-text-field>
					</v-card-title>

					<v-data-table
						:headers="headers"
						:items="users"
						:search="search"
						show-select
						hide-no-data
						v-model="selectedUsers"
						:loading="isLoading">
					</v-data-table>
				</v-card>
			</v-card>
			<v-dialog v-model="isOpen" persistent width="1024">
				<v-card>
					<v-card-title>
						<span class="text-h5">User Profile</span>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-col cols="12">
									<v-text-field
										v-model="name"
										label="Nombre *"
										required></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-text-field
										v-model="lastName"
										label="Apellido *"
										required></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-text-field
										v-model="email"
										label="Email *"
										required></v-text-field>
								</v-col>
							</v-row>
						</v-container>
						<small>*Indica que es un campo obligatorio</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue-darken-1" variant="text" @click="isOpen = false">
							Cancelar
						</v-btn>
						<v-btn color="blue-darken-1" variant="text" @click="handleSave">
							Guardar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</section>
</template>
<script>
import { ref } from "vue";
import Header from "../../components/Header.vue"; // Asegúrate de importar el componente Header
import { VDataTable } from "vuetify/labs/VDataTable";
import useUsers from "../../composables/useUsers";
import { userHeadersData } from "../../data/index";
import ViewCardHeader from "../../components/ViewCardHeader.vue";

export default {
	components: {
		Header,
		VDataTable,
		ViewCardHeader,
	},
	setup() {
		const {
			addUser,
			deleteUser,
			getUsersList,
			getDeleteCompleted,
			getAddCompleted,
			getIsLoading,
		} = useUsers();
		// Datos de la tabla
		const search = ref("");

		const selectedUsers = ref([]);
		const isOpen = ref(false);
		const showAlert = ref(false);
		const name = ref("");
		const lastName = ref("");
		const email = ref("");

		const getAlertText = () => {
			if (getDeleteCompleted.value) {
				return "Usuario eliminado correctamente";
			} else if (getAddCompleted.value) {
				return "Usuario añadido correctamente";
			}
		};

		const openDialog = () => {
			name.value = "";
			email.value = "";
			lastName.value = "";
			showAlert.value = false;
			isOpen.value = true;
		};

		const handleSave = () => {
			addUser({
				email: email.value,
				name: name.value,
				lastName: lastName.value,
			});
			showAlert.value = true;
			isOpen.value = false;
		};

		return {
			isOpen,
			selectedUsers,
			isLoading: getIsLoading,
			showAlert,
			name,
			email,
			lastName,
			search,
			users: getUsersList,
			headers: userHeadersData,
			handleSave,
			openDialog,
			handleDelete: () => {
				deleteUser(selectedUsers.value);
				showAlert.value = true;
			},
			getAlertText,
		};
	},
};
</script>
<style scoped>
section {
	height: calc(100vh - 47px - 47px);
	padding-bottom: 40px;
	border-radius: 4px;
}
.main-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 47px 44px 0px 52px;
	height: 100%;
}
.card-container {
	height: 100% !important;
}
.table-container {
	height: 100%;
}
.card-title {
	background-color: red;
}
.card-title h1 {
	align-self: center;
}
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
