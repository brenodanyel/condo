<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="min-h-full bg-surface font-sans pb-24">
				<!-- Header -->
				<PageHeader :title="session.data?.user?.name || 'Morador'" subtitle="Olá, bem-vindo 👋">
					<template #right>
						<div
							class="w-10 h-10 rounded-full bg-brand-light border-2 border-white shadow-sm overflow-hidden"
						>
							<img
								src="https://api.dicebear.com/7.x/initials/svg?seed=JS&backgroundColor=2563eb&textColor=ffffff"
								alt="avatar"
								class="w-full h-full"
							/>
						</div>
					</template>
				</PageHeader>

				<!-- Residence Card -->
				<section class="px-5 mb-5">
					<div class="bg-brand rounded-2xl p-5 text-white relative overflow-hidden">
						<div class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10"></div>
						<div class="absolute bottom-2 -right-2 w-20 h-20 rounded-full bg-white/5"></div>
						<p class="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-1">Residência</p>
						<h2 class="text-xl font-bold relative">{{ residence.name }}</h2>
						<p class="text-[13px] text-white/50 mt-0.5 relative">{{ residence.condo }}</p>
					</div>
				</section>

				<!-- Next Payment -->
				<section class="px-5 mb-6">
					<Card>
						<div class="p-4 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
									<ion-icon :icon="calendarOutline" class="text-amber-500 text-lg"></ion-icon>
								</div>
								<div>
									<p class="text-[12px] text-slate-400 font-medium">{{ nextPayment.label }}</p>
									<p class="text-lg font-bold text-slate-900 leading-tight">
										{{ nextPayment.value }}
									</p>
								</div>
							</div>
							<button
								class="bg-brand text-white text-[13px] font-semibold px-4 py-2.5 rounded-xl active:scale-95 transition-transform"
							>
								Pagar
							</button>
						</div>
					</Card>
				</section>

				<!-- Shortcuts -->
				<section class="px-5 mb-6">
					<SectionHeader title="Atalhos" />
					<div class="grid grid-cols-4 gap-3">
						<button
							v-for="s in shortcuts"
							:key="s.label"
							class="flex flex-col items-center gap-1.5 py-3 bg-white rounded-2xl border border-slate-100 active:scale-95 transition-transform"
						>
							<div :class="s.bg" class="w-10 h-10 rounded-xl flex items-center justify-center">
								<ion-icon :icon="s.icon" :class="s.color" class="text-xl"></ion-icon>
							</div>
							<span class="text-[11px] font-medium text-slate-600">{{ s.label }}</span>
						</button>
					</div>
				</section>

				<!-- News Feed -->
				<section class="px-5">
					<SectionHeader title="Avisos" actionLabel="Ver tudo" />
					<div class="space-y-3">
						<Card v-for="n in notices" :key="n.id" class="active:bg-slate-50 transition-colors">
							<div class="p-4 flex gap-3.5">
								<div :class="n.dotColor" class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"></div>
								<div class="flex-1 min-w-0">
									<h4 class="text-[14px] font-semibold text-slate-900 leading-snug">{{ n.title }}</h4>
									<p class="text-[12px] text-slate-400 mt-1 leading-relaxed line-clamp-2">
										{{ n.body }}
									</p>
									<p class="text-[11px] text-slate-300 mt-1.5 font-medium">{{ n.time }}</p>
								</div>
							</div>
						</Card>
					</div>
				</section>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonIcon } from '@ionic/vue';
import { calendarOutline } from 'ionicons/icons';
import { authClient } from '@/lib/auth-client';
import { PageHeader, SectionHeader, Card } from '@/components/ui';
import { shortcuts, notices, residence, nextPayment } from './data';

const session = authClient.useSession();
</script>
