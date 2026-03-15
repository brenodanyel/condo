<template>
	<header class="px-5 pt-14 pb-5">
		<div class="flex items-center justify-between">
			<div>
				<p v-if="subtitle" class="text-[13px] text-slate-400 font-medium">{{ subtitle }}</p>
				<h1 class="text-[22px] font-bold text-slate-900 leading-tight" :class="{ 'mt-0.5': subtitle }">
					{{ title }}
				</h1>
			</div>
			<slot name="right" />
		</div>
	</header>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	subtitle?: string;
}>();
</script>
