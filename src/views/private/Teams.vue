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
						title="Gestiona tu equipo"
						:onDelete="handleDelete"
						:onOpen="openDialog"
						:canEdit="true"
						:canObserve="true"
						:onObserve="handleObserve"
						:onEdit="handleEdit" />
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
						:items="teams"
						:search="search"
						show-select
						hide-no-data
						v-model="selectedTeam">
					</v-data-table>
				</v-card>
			</v-card>
			<v-dialog v-model="isOpen" persistent width="1024">
				<v-card>
					<v-card-title>
						<span v-if="showEdit" class="text-h5">Anade un usuario </span>
						<span v-else class="text-h5">Nuevo equipo</span>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-col v-if="showObserve">
									<h4>Lista de usuarios</h4>
									<ul>
										<li v-for="{ id, name } in usersInTeam" :key="id">
											{{ name }}
										</li>
									</ul>
								</v-col>
								<v-col v-else-if="showEdit" cols="12">
									<v-combobox
										item-title="text"
										item-value="id"
										v-model="selectedUser"
										:items="availableUsers">
									</v-combobox>
									<h4 v-if="availableUsers.length == 0">
										Este equipo ya cuenta con todos los usuarios
									</h4>
								</v-col>
								<v-col v-else cols="12">
									<v-text-field
										v-model="name"
										label="Nombre *"
										required></v-text-field>
								</v-col>
							</v-row>
						</v-container>
						<small>*Indica que es un campo obligatorio</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue-darken-1" variant="text" @click="handleClose">
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
import { ref, watch } from "vue";
import Header from "../../components/Header.vue"; // Asegúrate de importar el componente Header
import { VDataTable } from "vuetify/labs/VDataTable";
import useTeams from "../../composables/useTeams";
import { teamHeadersData } from "../../data/index";
import ViewCardHeader from "../../components/ViewCardHeader.vue";
import useUsers from "../../composables/useUsers";

export default {
	components: {
		Header,
		VDataTable,
		ViewCardHeader,
	},
	setup() {
		const {
			//getters
			getTeamDetails,
			getTeamsList,
			getAddCompleted,
			getDeleteCompleted,
			getIsLoading,
			//methods
			deleteTeams,
			addTeam,
			addUserToTeam,
			getAlertText,
			formattedUsers,
		} = useTeams();
		const { getUsersList, getUserDetails } = useUsers();
		const selectedTeam = ref([]);
		const availableUsers = ref([]);
		const usersInTeam = ref([]);
		const selectedUser = ref();
		const showEdit = ref();
		const showObserve = ref();
		const isOpen = ref(false);
		const showAlert = ref(false);
		const name = ref("");

		const openDialog = () => {
			name.value = "";
			showAlert.value = false;
			isOpen.value = true;
		};

		const handleClose = () => {
			isOpen.value = false;
			setTimeout(() => {
				showEdit.value = false;
			}, 500);
			showEdit.value = false;
			showObserve.value = false;
		};

		const handleSave = () => {
			if (showEdit.value) {
				const userInfo = getUserDetails(selectedUser.value.id);
				const teamId = selectedTeam.value[0];
				addUserToTeam({ userData: userInfo.value, teamId });
				isOpen.value = false;
				selectedTeam.value = null;
				selectedUser.value = null;
			} else {
				addTeam(name.value);
				showAlert.value = true;
				isOpen.value = false;
			}
		};

		const handleDelete = () => {
			deleteTeams(selectedTeam.value);
			showAlert.value = true;
		};

		const handleEdit = () => {
			showEdit.value = true;
			setTimeout(() => {
				const team = getTeamDetails(selectedTeam.value[0]);
				const users = getUsersList.value.filter((user) => {
					return !team.value.users.some((usr) => usr.id === user.id);
				});
				availableUsers.value = formattedUsers(users);
				isOpen.value = true;
			}, 200);
		};

		const handleObserve = () => {
			setTimeout(() => {
				const team = getTeamDetails(selectedTeam.value[0]);
				usersInTeam.value = team.value.users;
				showObserve.value = true;
				isOpen.value = true;
			}, 500);
		};

		// Datos de la tabla
		const search = ref("");

		return {
			isOpen,
			selectedTeam,
			showEdit,
			showObserve,
			usersInTeam,
			// isLoading,
			showAlert,
			// errorMessage,
			name,
			search,
			headers: teamHeadersData,
			teams: getTeamsList,
			availableUsers,
			selectedUser,
			handleSave,
			openDialog,
			handleDelete,
			getAlertText,
			handleEdit,
			handleClose,
			handleObserve,
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
</style>
