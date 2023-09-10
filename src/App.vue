<!-- @format -->
<template>
	<section>
		<div class="header-container">
			<div class="header-inner">
				<h1 class="header-title">DASHBOARD</h1>
			</div>
		</div>
		<div class="main-container">
			<div class="nav-container">
				<NavbarItems />
				<div class="nav-footer">
					<div class="nav-footer-title">
						<p class="nav-text-doubts">Any doubts?</p>
						<p class="nav-text-contact-us">Contact us at:</p>
					</div>
					<div class="nav-email-container">
						<p class="nav-text-email">help@company.com</p>
					</div>
				</div>
			</div>
			<div class="router-container">
				<router-view v-slot="{ Component, route }">
					<keep-alive>
						<component :is="Component" :key="route.name" />
					</keep-alive>
				</router-view>
			</div>
		</div>
	</section>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import NavbarItems from "./components/NavbarItems.vue";

export default {
	components: { NavbarItems },
	setup() {
		const route = useRoute();
		const routeName = ref("ss");

		watch(
			() => route.path,
			(newId) => {
				routeName.value =
					newId.substring(1).charAt(0).toUpperCase() +
					newId.substring(1).slice(1);
			}
		);

		return {
			routeName,
		};
	},
};
</script>

<style scoped>
section {
	height: 100vh;
	width: 100%;
}
.header-container {
	height: 47px;
	padding-left: 21px;
	background-color: #f4f5f8;
}
.header-inner {
	display: flex;
	width: 232px;
	height: 47px;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
}
.header-title {
	color: #222326;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	margin-top: 7px;
}
.main-container {
	display: flex;
	flex-direction: row;
	height: calc(100vh - 47px);
}
.nav-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 204px;
	/* height: 2017px; Elimina esta línea */
	flex-shrink: 0;
	background: #222326;
	height: 100%;
}

.body-header {
	width: 1402px;
	height: 49px;
	flex-shrink: 0;
	background: #5e6ad2;
}
.header-title-inner {
	color: #fff;
}
.nav-text-doubts {
	color: #fff;
	font-family: Montserrat;
	font-size: 15.1px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -0.442px;
}
.nav-text-contact-us {
	color: #fff;
	font-family: Montserrat;
	font-size: 15.1px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.442px;
}
.nav-text-email {
	color: #5e6ad2;
	text-align: center;
	font-size: 15.1px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -0.442px;
}
.nav-footer {
	display: flex;
	flex-direction: column;
	width: 193px;
	height: 59px;
	flex-shrink: 0;
	margin-left: 11px;
	margin-bottom: 30px;
}
.nav-footer-title {
	margin-left: 16px;
}
.nav-email-container {
	margin-top: 5px;
	width: 177px;
	display: flex;
	flex-direction: row;
	justify-content: left;
	padding-left: 16px;
}
.router-container {
	width: 100%;
}
</style>
