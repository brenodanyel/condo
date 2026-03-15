<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="min-h-full bg-surface font-sans pb-24">
				<!-- Header with avatar -->
				<header
					class="bg-white border-b border-slate-100 px-5 pt-14 pb-6 flex flex-col items-center text-center"
				>
					<div class="relative mb-3">
						<div
							class="w-20 h-20 rounded-full bg-brand-light border-2 border-white shadow-sm overflow-hidden"
						>
							<img
								src="https://api.dicebear.com/7.x/initials/svg?seed=JS&backgroundColor=2563eb&textColor=ffffff"
								alt="avatar"
								class="w-full h-full"
							/>
						</div>
						<button
							class="absolute bottom-0 right-0 w-7 h-7 bg-brand text-white rounded-full flex items-center justify-center border-2 border-white active:scale-90 transition-transform"
						>
							<ion-icon :icon="cameraOutline" class="text-xs"></ion-icon>
						</button>
					</div>
					<h2 class="text-xl font-bold text-slate-900">
						{{ session.data?.user?.name || 'Não identificado' }}
					</h2>
					<p class="text-[13px] text-slate-400 mt-0.5">{{ session.data?.user?.email }}</p>
					<div class="flex gap-2 mt-3">
						<span
							class="text-[10px] font-bold bg-brand-light text-brand px-2.5 py-1 rounded-full uppercase tracking-wide"
							>Morador</span
						>
						<span
							class="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full uppercase tracking-wide flex items-center gap-1"
						>
							<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
							Adimplente
						</span>
					</div>
				</header>

				<!-- Personal Info -->
				<section class="px-5 pt-6 mb-6">
					<SectionHeader title="Dados Pessoais" actionLabel="Editar" />
					<Card>
						<ListRow
							v-for="(field, i) in personalFields"
							:key="field.label"
							:icon="field.icon"
							:iconBg="field.bg"
							:iconColor="field.color"
							:label="field.label"
							:value="field.value"
							:last="i === personalFields.length - 1"
						/>
					</Card>
				</section>

				<!-- Settings -->
				<section class="px-5 mb-6">
					<SectionHeader title="Configurações" />
					<Card>
						<button
							v-for="(item, i) in settingsMenu"
							:key="item.label"
							class="w-full text-left active:bg-slate-50 transition-colors"
						>
							<ListRow
								:icon="item.icon"
								:iconBg="item.bg"
								:iconColor="item.color"
								:value="item.label"
								:last="i === settingsMenu.length - 1"
							>
								<template #right>
									<ion-icon :icon="chevronForwardOutline" class="text-slate-300 text-lg"></ion-icon>
								</template>
							</ListRow>
						</button>
					</Card>
				</section>

				<!-- Logout -->
				<section class="px-5">
					<button
						@click="handleLogout"
						class="w-full bg-white border border-red-100 text-red-500 rounded-2xl py-3.5 font-semibold text-[14px] active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
					>
						<ion-icon :icon="logOutOutline" class="text-lg"></ion-icon>
						Sair da conta
					</button>
				</section>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IonContent, IonPage, IonIcon, useIonRouter } from '@ionic/vue';
import { cameraOutline, chevronForwardOutline, logOutOutline } from 'ionicons/icons';
import { authClient } from '@/lib/auth-client';
import { SectionHeader, Card, ListRow } from '@/components/ui';
import { getPersonalFields, settingsMenu } from './data';

const router = useIonRouter();
const session = authClient.useSession();

const personalFields = computed(() =>
	getPersonalFields(session.value?.data?.user?.name, session.value?.data?.user?.email),
);

const handleLogout = async () => {
	await authClient.signOut();
	router.replace('/login');
};
</script>
