import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../features/auth/LoginPage.vue'),
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: () => import('../features/auth/SignUpPage.vue'),
	},
	{
		path: '/tabs/',
		component: () => import('../features/shared/layout/TabsPage.vue'),
		children: [
			{
				path: '',
				redirect: '/tabs/home',
			},
			{
				path: 'home',
				name: 'Home',
				component: () => import('../features/home/HomePage.vue'),
			},
			{
				path: 'financial',
				name: 'Financial',
				component: () => import('../features/financial/FinancialPage.vue'),
			},
			{
				path: 'security',
				name: 'Security',
				component: () => import('../features/security/SecurityPage.vue'),
			},
			{
				path: 'profile',
				name: 'Profile',
				component: () => import('../features/profile/ProfilePage.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
