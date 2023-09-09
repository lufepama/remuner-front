<!-- @format -->

<template>
	<v-card class="main-container" :class="{ 'large-container': isLarge }">
		<template v-slot:title>
			<div class="header-container">
				<h2 class="header-title">
					{{ header }}
				</h2>
				<v-divider class="line-img"></v-divider>
				<v-menu>
					<template v-slot:activator="{ props }">
						<v-btn class="btn" icon="mdi-dots-vertical" v-bind="props"></v-btn>
					</template>
					<v-list
						class="card-menu-container"
						v-for="{ id, title, icon } in cardMenuItems"
						:key="id">
						<MenuOption :title="title" :icon="icon" />
					</v-list>
				</v-menu>
			</div>
		</template>
		<template v-slot:text>
			<div v-if="detailedData">
				<DescriptionDetailedCard :data="detailedData" />
			</div>
			<div v-else class="undetailed-container">
				<DescriptionUndetailedCard :data="undetailedData" />
			</div>
		</template>
	</v-card>
</template>
<script>
import { cardMenuItems } from "../data";
import MenuOption from "../components/MenuOption.vue";
import DescriptionDetailedCard from "./DescriptionDetailedCard.vue";
import DescriptionUndetailedCard from "./DescriptionUndetailedCard.vue";
export default {
	components: {
		MenuOption,
		DescriptionDetailedCard,
		DescriptionUndetailedCard,
	},
	props: [
		"header",
		"description",
		"isDetailed",
		"isLarge",
		"detailedData",
		"undetailedData",
	],
	setup(props) {
		return {
			// props
			...props,
			cardMenuItems,
		};
	},
};
</script>
<style scoped>
.main-container {
	width: 50% !important;
	height: 350px;
	flex-shrink: 0;
	border-radius: 4px;
	fill: #fff;
	filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.13))
		drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
	padding-top: 21px;
	padding-left: 31px;
}
.large-container {
	width: 100% !important;
	height: 250px;
}
.header-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 21px;
}

.header-title {
	width: auto;
	height: 28px;
	flex-shrink: 0;
	color: #292847;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 100% */
	letter-spacing: 1px;
	opacity: 0.75;
	margin-right: 20px;
}
.btn {
	width: 35px;
	height: 35px;
	flex-shrink: 0;
}
.card-menu-container {
	margin-top: 10px;
	width: 93px;
	height: 27px;
	flex-shrink: 0;
	border-radius: 5px;
	border: 1px solid #c9c9d1;
	background: #fff;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.line-img {
	margin-right: 21px;
}
.undetailed-container {
	width: 100% !important;
}
</style>
