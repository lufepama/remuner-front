<!-- @format -->

<template lang="">
	<v-dialog v-model="isOpen" persistent width="1024">
		<v-card>
			<v-card-title>
				<span v-if="showEdit" class="text-h5">{{ dialogTitle }}</span>
			</v-card-title>
			<v-card-text>
				<v-container>
					<v-row>
						<v-col v-if="type === 'list'">
							<h4>Lista de usuarios</h4>
							<ul>
								<li v-for="{ id, name } in usersInTeam" :key="id">
									{{ name }}
								</li>
							</ul>
						</v-col>
						<v-col v-else-if="type === 'addTeam'" cols="12">
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
						<v-col v-else-if="type === 'addUserToTeam'" cols="12">
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
</template>
<script>
export default {
	props: [
		"isOpen",
		"dialogTitle",
		"type",
		"handleClose",
		"handleSave",
		"usersInTeam",
		"selectedUser",
		"availableUsers",
		"name",
	],
	setup(props) {
		return {
			...props,
		};
	},
};
</script>
<style lang=""></style>
