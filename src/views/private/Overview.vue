<!-- @format -->

<template>
	<section>
		<Header title="OVERVIEW" />
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
import Header from "../../components/Header.vue";
import {
	detailedCardDescription,
	undetailedCardDescription,
} from "../../data/index";
import BasicCard from "../../components/BasicCard.vue";
export default {
	components: { InteractiveCard, BasicCard, Header },
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
	height: 100% !important;
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
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 47px 44px 0px 52px;
}
.bottom-container {
	margin-top: 21px;
	margin-bottom: 46px;
}
</style>
