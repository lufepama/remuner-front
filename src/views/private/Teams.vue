<!-- @format -->

<template>
	<section>
		<Header title="EQUIPOS" />
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
					<div
						class="table-container"
						style="max-height: 300px; overflow-y: auto">
						<v-data-table
							:headers="headers"
							:items="teams"
							:search="search"
							show-select
							hide-no-data
							v-model="selectedTeam"
							:loading="isLoading"
							:items-per-page="-1">
						</v-data-table>
					</div>
				</v-card>
			</v-card>
			<v-dialog v-model="isOpen" persistent width="40%">
				<v-card>
					<v-card-title>
						<span v-if="showEdit" class="text-h5">Anade un usuario </span>
						<span v-else class="text-h5">Nuevo equipo</span>
						<p class="mandatory-text" v-if="fieldMessage">{{ fieldMessage }}</p>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-col v-if="showObserve">
									<p v-if="usersInTeam.length == 0">
										Este equipo aún NO tiene usuarios!
									</p>
									<ul v-else>
										<h4>Lista de usuarios</h4>
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
			getTeamsList,
			getIsLoading,
			//methods
			getTeamDetails,
			deleteTeams,
			addTeam,
			addUserToTeam,
			getAlertText,
			formattedUsers,
			handleCreateTeam,
			handleDeleteTeams,
			handleGetTeamUsers,
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
		const fieldMessage = ref("");

		const openDialog = () => {
			fieldMessage.value = "";
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

		const handleSave = async () => {
			if (showEdit.value) {
				const userInfo = getUserDetails(selectedUser.value.id);
				const teamId = selectedTeam.value[0];
				addUserToTeam(userInfo.value.id, teamId);
				isOpen.value = false;
				selectedTeam.value = null;
				selectedUser.value = null;
			} else {
				if (name.value != "") {
					const teamId = await handleCreateTeam(name.value);
					if (teamId) {
						addTeam({ name: name.value, id: teamId });
						showAlert.value = true;
						isOpen.value = false;
					}
				} else {
					fieldMessage.value = "El campo es obligatorio";
				}
			}
		};

		const handleEdit = () => {
			showEdit.value = true;
			setTimeout(async () => {
				const team = getTeamDetails(selectedTeam.value[0]);
				const team_users = await handleGetTeamUsers(team.value.id);
				const users = getUsersList.value.filter((user) => {
					return !team_users.some((usr) => usr.id === user.id);
				});
				availableUsers.value = formattedUsers(users);
				isOpen.value = true;
			}, 200);
		};

		const handleObserve = () => {
			setTimeout(async () => {
				const team = getTeamDetails(selectedTeam.value[0]);
				const team_users = await handleGetTeamUsers(team.value.id);
				usersInTeam.value = team_users;
				showObserve.value = true;
				isOpen.value = true;
			}, 500);
		};

		// Datos de la tabla
		const search = ref("");

		return {
			fieldMessage,
			isOpen,
			selectedTeam,
			showEdit,
			showObserve,
			usersInTeam,
			isLoading: getIsLoading,
			showAlert,
			name,
			search,
			headers: teamHeadersData,
			teams: getTeamsList,
			availableUsers,
			selectedUser,
			handleSave,
			openDialog,
			handleDelete: async () => {
				await handleDeleteTeams(selectedTeam.value);
				deleteTeams(selectedTeam.value);
				showAlert.value = true;
			},
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
.mandatory-text {
	color: red;
	margin-left: 50px;
	font-size: 15px;
}
</style>
