<!-- @format -->

<template>
	<section>
		<Header title="INTEGRACIONES" />
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
					<div
						class="table-container"
						style="max-height: 450px; overflow-y: auto">
						<v-data-table
							:headers="headers"
							:items="integrations"
							:search="search"
							show-select
							hide-no-data
							v-model="selectedUsers"
							:loading="isLoading">
							<template v-slot:item.status="{ item }">
								<i
									v-if="item.selectable.status"
									@click="onEdit"
									class="mdi mdi-check check-icon"></i>
								<i v-else @click="onEdit" class="mdi mdi-close close-icon"></i>
							</template>
						</v-data-table>
					</div>
				</v-card>
			</v-card>
			<v-dialog v-model="isOpen" persistent width="40%">
				<v-card>
					<v-card-title>
						<span class="text-h5">Nueva integracion</span>
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
										v-model="type"
										label="Tipo *"
										required></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-checkbox v-model="status" label="Estado"></v-checkbox>
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
import useIntegrations from "../../composables/useIntegrations";
import { integrationsHeadersData } from "../../data/index";
import ViewCardHeader from "../../components/ViewCardHeader.vue";

export default {
	components: {
		Header,
		VDataTable,
		ViewCardHeader,
	},
	setup() {
		const {
			addIntegrations,
			deleteIntegrations,
			getAlertText,
			getIntegrationsList,
			getIsLoading,
		} = useIntegrations();
		// Datos de la tabla
		const search = ref("");

		const selectedUsers = ref([]);
		const isOpen = ref(false);
		const showAlert = ref(false);
		const name = ref("");
		const type = ref("");
		const status = ref(false);

		const openDialog = () => {
			name.value = "";
			type.value = "";
			status.value = false;
			showAlert.value = false;
			isOpen.value = true;
		};

		const handleSave = () => {
			addIntegrations({
				name: name.value,
				type: type.value,
				status: status.value,
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
			type,
			status,
			search,
			integrations: getIntegrationsList,
			headers: integrationsHeadersData,
			handleSave,
			openDialog,
			handleDelete: () => {
				deleteIntegrations(selectedUsers.value);
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
	background-color: red;
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
.close-icon {
	color: Red;
}
.check-icon {
	color: yellowgreen;
}
</style>
