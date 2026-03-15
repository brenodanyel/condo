<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom" class="tab-bar">
				<ion-tab-button tab="home" href="/tabs/home">
					<ion-icon :icon="homeOutline" :ios="homeOutline" :md="homeOutline" />
					<ion-label>Home</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="financial" href="/tabs/financial">
					<ion-icon :icon="walletOutline" />
					<ion-label>Financeiro</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="security" href="/tabs/security">
					<ion-icon :icon="shieldCheckmarkOutline" />
					<ion-label>Segurança</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="profile" href="/tabs/profile">
					<ion-icon :icon="personOutline" />
					<ion-label>Perfil</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, walletOutline, shieldCheckmarkOutline, personOutline } from 'ionicons/icons';
</script>

<style scoped>
.tab-bar {
	--background: #ffffff;
	--border: none;
	--color: #94a3b8;
	--color-selected: #2563eb;
	border-top: 1px solid #e2e8f0;
	height: 56px;
	padding-bottom: env(safe-area-inset-bottom);
}

ion-tab-button {
	font-size: 10px;
	font-weight: 500;
	letter-spacing: 0.01em;
	--padding-top: 6px;
	--padding-bottom: 4px;
}

ion-tab-button ion-icon {
	font-size: 22px;
}
</style>
