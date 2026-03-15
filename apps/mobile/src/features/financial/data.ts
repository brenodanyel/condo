// Mock data for the financial module
import { documentTextOutline, alertCircleOutline } from 'ionicons/icons';

export interface Bill {
	title: string;
	invoice: string;
	value: string;
	status: 'upcoming' | 'overdue';
	statusLabel: string;
	icon: string;
	iconBg: string;
	iconColor: string;
	valueColor: string;
	badgeBg: string;
	badgeText: string;
	badgeBorder: string;
}

export interface HistoryItem {
	title: string;
	date: string;
	value: string;
	ref: string;
	status: 'paid' | 'pending';
}

export const outstandingBalance = {
	total: 'R$ 970,00',
	unit: 'Bloco A · 302',
	dueLabel: 'Vence em 5 dias',
};

export const unpaidBills: Bill[] = [
	{
		title: 'Cond. Mar/2026',
		invoice: 'Fatura #2026-0314',
		value: 'R$ 850,00',
		status: 'upcoming',
		statusLabel: 'A vencer · 19/03',
		icon: documentTextOutline,
		iconBg: 'bg-brand-light',
		iconColor: 'text-brand',
		valueColor: 'text-slate-900',
		badgeBg: 'bg-amber-50',
		badgeText: 'text-amber-600',
		badgeBorder: 'border-amber-100',
	},
	{
		title: 'Vaga Garagem Fev/2026',
		invoice: 'Fatura #2026-0215',
		value: 'R$ 120,00',
		status: 'overdue',
		statusLabel: 'Atrasada · 15 dias',
		icon: alertCircleOutline,
		iconBg: 'bg-red-50',
		iconColor: 'text-red-500',
		valueColor: 'text-red-500',
		badgeBg: 'bg-red-50',
		badgeText: 'text-red-500',
		badgeBorder: 'border-red-100',
	},
];

export const paymentHistory: HistoryItem[] = [
	{ title: 'Condomínio Jan/2026', date: 'Pago em 08/01/2026', value: 'R$ 850,00', ref: '01', status: 'paid' },
	{ title: 'Vaga Garagem Jan/2026', date: 'Pago em 08/01/2026', value: 'R$ 120,00', ref: '01g', status: 'paid' },
	{ title: 'Condomínio Dez/2025', date: 'Pago em 05/12/2025', value: 'R$ 820,00', ref: '12', status: 'paid' },
];
