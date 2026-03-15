<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="min-h-full bg-surface font-sans pb-24">
				<!-- Header -->
				<PageHeader title="Segurança" />

				<!-- Gate Controls -->
				<section class="px-5 mb-6">
					<SectionHeader title="Portões" />
					<div class="grid grid-cols-2 gap-3">
						<Card v-for="gate in gates" :key="gate.name" class="p-4 flex flex-col items-center gap-3">
							<div :class="gate.bg" class="w-12 h-12 rounded-xl flex items-center justify-center">
								<ion-icon :icon="gate.icon" :class="gate.color" class="text-2xl"></ion-icon>
							</div>
							<div class="text-center">
								<h4 class="text-[13px] font-semibold text-slate-900">{{ gate.name }}</h4>
								<div class="flex items-center gap-1 justify-center mt-1">
									<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
									<span class="text-[10px] text-emerald-600 font-semibold uppercase">Online</span>
								</div>
							</div>
							<button
								:class="gate.btnClass"
								class="w-full py-2.5 rounded-xl text-[13px] font-semibold active:scale-95 transition-transform"
							>
								Abrir
							</button>
						</Card>
					</div>
				</section>

				<!-- Cameras -->
				<section class="px-5 mb-6">
					<div class="flex items-center justify-between mb-3">
						<h3 class="text-[15px] font-bold text-slate-900">Câmeras</h3>
						<div class="flex items-center gap-1.5">
							<span class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
							<span class="text-[10px] font-bold text-red-500 uppercase tracking-wide">Ao vivo</span>
						</div>
					</div>
					<div class="space-y-3">
						<div
							v-for="cam in cameras"
							:key="cam.id"
							class="relative h-44 bg-slate-200 rounded-2xl overflow-hidden border border-slate-100"
						>
							<img :src="cam.src" :alt="cam.label" class="w-full h-full object-cover" />
							<div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
							<div class="absolute bottom-3 left-3 right-3 flex items-end justify-between">
								<div>
									<p class="text-[12px] font-bold text-white">{{ cam.label }}</p>
									<p class="text-[10px] text-white/60 font-mono">{{ cam.timestamp }}</p>
								</div>
								<button
									class="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform"
								>
									<ion-icon :icon="expandOutline" class="text-white text-sm"></ion-icon>
								</button>
							</div>
						</div>
					</div>
				</section>

				<!-- Activity Log -->
				<section class="px-5">
					<SectionHeader title="Atividades recentes" />
					<Card>
						<div
							v-for="(evt, i) in activityEvents"
							:key="i"
							:class="{ 'border-b border-slate-50': i < activityEvents.length - 1 }"
							class="p-4 flex items-start gap-3.5"
						>
							<div :class="evt.dotColor" class="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"></div>
							<div class="flex-1">
								<p class="text-[14px] font-semibold text-slate-900 leading-snug">{{ evt.title }}</p>
								<p class="text-[12px] text-slate-400 mt-0.5">{{ evt.sub }}</p>
							</div>
							<p class="text-[11px] text-slate-300 font-medium flex-shrink-0">{{ evt.time }}</p>
						</div>
					</Card>
				</section>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonIcon } from '@ionic/vue';
import { expandOutline } from 'ionicons/icons';
import { PageHeader, SectionHeader, Card } from '@/components/ui';
import { gates, cameras, activityEvents } from './data';
</script>
