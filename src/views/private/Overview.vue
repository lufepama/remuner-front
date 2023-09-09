<!-- @format -->

<template>
	<section>
		<div class="main-container">
			<div class="up-container">
				<InteractiveCard
					header="Prueba técnica"
					v-bind:isLarge="false"
					v-bind:isDetailed="true"
					:detailedData="detailedCardDescription" />
				<div class="basic-cards-container">
					<BasicCard title="Usuarios" number="15" />
					<BasicCard title="Equipos" number="2" />
					<BasicCard title="Integraciones" number="4" />
				</div>
			</div>
			<div class="bottom-container">
				<InteractiveCard
					header="Modelos de datos"
					v-bind:isLarge="true"
					v-bind:isDetailed="false"
					:undetailedData="undetailedCardDescription" />
			</div>
		</div>
	</section>
</template>
<script>
import InteractiveCard from "../../components/InteractiveCard.vue";
import {
	detailedCardDescription,
	undetailedCardDescription,
} from "../../data/index";
import BasicCard from "../../components/BasicCard.vue";
export default {
	components: { InteractiveCard, BasicCard },
	setup() {
		return {
			detailedCardDescription,
			undetailedCardDescription,
		};
	},
};
</script>
<style scoped>
section {
	padding: 44px;
	width: 100%;
	height: calc(100vh - 47px - 47px);
}
.up-container {
	display: flex;
	flex-direction: row;
}
.basic-cards-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 19px;
	width: 50% !important;
}
.main-container {
	width: 84%;
	display: flex;
	flex-direction: column;
}
.bottom-container {
	margin-top: 21px;
	margin-bottom: 46px;
}
</style>
