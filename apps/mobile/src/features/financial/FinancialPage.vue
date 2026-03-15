<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="min-h-full bg-surface font-sans pb-24">
				<!-- Header -->
				<PageHeader title="Financeiro" />

				<!-- Hero Card -->
				<section class="px-5 mb-6">
					<div class="bg-brand rounded-2xl p-5 text-white relative overflow-hidden">
						<div class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10"></div>
						<div class="absolute bottom-2 -right-2 w-20 h-20 rounded-full bg-white/5"></div>
						<div class="relative">
							<p class="text-[11px] font-semibold text-white/60 uppercase tracking-widest">
								Saldo em aberto
							</p>
							<p class="text-[36px] font-extrabold tracking-tight leading-none mt-1">
								{{ outstandingBalance.total }}
							</p>
							<div class="flex gap-2 mt-4">
								<span
									class="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wide"
								>
									{{ outstandingBalance.unit }}
								</span>
								<span
									class="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wide"
								>
									{{ outstandingBalance.dueLabel }}
								</span>
							</div>
						</div>
					</div>
				</section>

				<!-- Unpaid Bills -->
				<section class="px-5 mb-6">
					<SectionHeader title="Em aberto" />
					<Card>
						<div
							v-for="(bill, i) in unpaidBills"
							:key="bill.title"
							:class="{ 'border-b border-slate-50': i < unpaidBills.length - 1 }"
							class="p-4 flex items-start gap-3.5"
						>
							<div
								:class="[bill.iconBg]"
								class="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center"
							>
								<ion-icon :icon="bill.icon" :class="[bill.iconColor]" class="text-lg"></ion-icon>
							</div>
							<div class="flex-1 min-w-0">
								<div class="flex justify-between">
									<h4 class="text-[14px] font-semibold text-slate-900">{{ bill.title }}</h4>
									<p class="text-[14px] font-bold ml-2" :class="[bill.valueColor]">
										{{ bill.value }}
									</p>
								</div>
								<p class="text-[12px] text-slate-400 mt-0.5">{{ bill.invoice }}</p>
								<div class="mt-2">
									<span
										class="text-[10px] font-bold border px-2 py-0.5 rounded-full uppercase"
										:class="[bill.badgeBg, bill.badgeText, bill.badgeBorder]"
									>
										{{ bill.statusLabel }}
									</span>
								</div>
							</div>
						</div>
						<div class="px-4 pb-4">
							<button
								class="w-full bg-brand text-white py-3 rounded-xl font-semibold text-[14px] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
							>
								<ion-icon :icon="walletOutline" class="text-lg"></ion-icon>
								Pagar Agora
							</button>
						</div>
					</Card>
				</section>

				<!-- Payment History -->
				<section class="px-5">
					<SectionHeader title="Histórico" actionLabel="Ver tudo" />
					<Card>
						<div
							v-for="(item, i) in paymentHistory"
							:key="item.ref"
							:class="{ 'border-b border-slate-50': i < paymentHistory.length - 1 }"
							class="p-4 flex items-center gap-3.5"
						>
							<div
								class="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center"
								:class="item.status === 'paid' ? 'bg-emerald-50' : 'bg-amber-50'"
							>
								<ion-icon
									:icon="item.status === 'paid' ? checkmarkCircle : alertCircle"
									:class="item.status === 'paid' ? 'text-emerald-500' : 'text-amber-500'"
									class="text-xl"
								></ion-icon>
							</div>
							<div class="flex-1 min-w-0">
								<h4 class="text-[14px] font-medium text-slate-900">{{ item.title }}</h4>
								<p class="text-[12px] text-slate-400 mt-0.5">{{ item.date }}</p>
							</div>
							<div class="text-right flex-shrink-0">
								<p class="text-[14px] font-bold text-slate-900">{{ item.value }}</p>
								<p
									class="text-[10px] font-bold uppercase tracking-wider mt-0.5"
									:class="item.status === 'paid' ? 'text-emerald-500' : 'text-amber-500'"
								>
									{{ item.status === 'paid' ? 'Pago' : 'Pendente' }}
								</p>
							</div>
						</div>
					</Card>
				</section>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonIcon } from '@ionic/vue';
import { walletOutline, checkmarkCircle, alertCircle } from 'ionicons/icons';
import { PageHeader, SectionHeader, Card } from '@/components/ui';
import { outstandingBalance, unpaidBills, paymentHistory } from './data';
</script>
