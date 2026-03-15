<template>
	<div class="p-4 flex items-center gap-3.5" :class="{ 'border-b border-slate-50': !last }">
		<div :class="[iconBg]" class="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center">
			<ion-icon :icon="icon" :class="[iconColor]" class="text-lg"></ion-icon>
		</div>
		<div class="flex-1 min-w-0">
			<p v-if="label" class="text-[11px] text-slate-400 font-medium uppercase tracking-wide">{{ label }}</p>
			<p class="text-[14px] font-medium text-slate-900 truncate" :class="{ 'mt-0.5': label }">{{ value }}</p>
		</div>
		<slot name="right" />
	</div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';

defineProps<{
	icon: string;
	iconBg: string;
	iconColor: string;
	label?: string;
	value: string;
	last?: boolean;
}>();
</script>
