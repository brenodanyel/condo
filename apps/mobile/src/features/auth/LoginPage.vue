<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="flex flex-col min-h-full bg-white font-sans px-6">
				<div class="flex-1 flex flex-col justify-center">
					<div class="text-center mb-10">
						<div
							class="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand/20"
						>
							<ion-icon :icon="homeOutline" class="text-white text-3xl"></ion-icon>
						</div>
						<h1 class="text-[28px] font-extrabold text-slate-900 tracking-tight">CondoSmart</h1>
						<p class="text-[14px] text-slate-400 mt-1">Acesse sua unidade</p>
					</div>

					<div class="space-y-4">
						<div>
							<label
								class="text-[12px] font-semibold text-slate-500 uppercase tracking-wide ml-1 mb-1.5 block"
								>E-mail</label
							>
							<input
								v-model="email"
								type="email"
								placeholder="seu@email.com"
								class="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 text-[14px] font-medium placeholder:text-slate-300 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
							/>
						</div>
						<div>
							<label
								class="text-[12px] font-semibold text-slate-500 uppercase tracking-wide ml-1 mb-1.5 block"
								>Senha</label
							>
							<input
								v-model="password"
								type="password"
								placeholder="••••••••"
								class="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 text-[14px] font-medium placeholder:text-slate-300 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
							/>
						</div>
						<button
							@click="handleLogin"
							:disabled="loading"
							class="w-full h-12 bg-brand text-white rounded-xl font-semibold text-[14px] active:scale-[0.98] transition-transform disabled:opacity-50 mt-2"
						>
							{{ loading ? 'Entrando...' : 'Entrar' }}
						</button>
						<div class="flex items-center justify-between pt-1">
							<button class="text-[13px] text-slate-400 font-medium">Esqueci a senha</button>
							<button @click="router.push('/signup')" class="text-[13px] text-brand font-semibold">
								Criar conta
							</button>
						</div>
					</div>
				</div>

				<p class="text-center text-[11px] text-slate-300 pb-8 pt-6">
					Ao entrar, você concorda com nossos<br />Termos de Uso e Política de Privacidade
				</p>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonPage, IonIcon, useIonRouter } from '@ionic/vue';
import { homeOutline } from 'ionicons/icons';
import { authClient } from '@/lib/auth-client';

const email = ref('');
const password = ref('');
const loading = ref(false);
const router = useIonRouter();

const handleLogin = async () => {
	if (!email.value || !password.value) return;
	loading.value = true;
	try {
		const { data, error } = await authClient.signIn.email({
			email: email.value,
			password: password.value,
		});
		if (error) {
			alert('Erro ao entrar: ' + error.message);
		} else {
			router.replace('/tabs/home');
		}
	} catch (e) {
		console.error(e);
	} finally {
		loading.value = false;
	}
};
</script>

<style scoped>
ion-content {
	--background: #ffffff;
}
</style>
