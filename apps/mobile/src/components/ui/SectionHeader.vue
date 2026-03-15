<template>
	<div class="flex items-center justify-between mb-3">
		<h3 class="text-[15px] font-bold text-slate-900">{{ title }}</h3>
		<button v-if="actionLabel" class="text-brand text-[13px] font-semibold" @click="$emit('action')">
			{{ actionLabel }}
		</button>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	actionLabel?: string;
}>();

defineEmits<{
	action: [];
}>();
</script>
