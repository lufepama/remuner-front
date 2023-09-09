<!-- @format -->

<template>
	<div>
		<v-list class="list-container" lines="one">
			<router-link
				v-for="{ id, name, title } in menuItems"
				:to="{ name: name }"
				:key="id">
				<v-list-item class="menu-container" :class="{ 'bg-selected': false }">
					<v-list-item-title
						class="txt-common"
						:class="{ 'tx-selected': true }">
						{{ title }}
					</v-list-item-title>
				</v-list-item>
			</router-link>
		</v-list>
	</div>
</template>
<script>
import { menuItems } from "../data";
export default {
	setup() {
		return {
			menuItems,
		};
	},
};
</script>
<style scoped>
.menu-container {
	display: flex;
	flex-direction: row;
	background-color: #414245;
	width: 195px;
	height: 36px;
	margin-bottom: 10px;
	border-radius: 2px;
}
.txt-common {
	font-size: 14px;
	font-style: normal;
	font-weight: 700 !important;
	line-height: 14px;
	letter-spacing: 1px;
}
.bg-selected {
	background: #f4f5f8;
}
.tx-selected {
	color: #fff;
	font-weight: 700;
}
.list-container {
	background-color: inherit;
	padding: 7px 4px 0 4px;
}
</style>
