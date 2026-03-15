// Mock data for the security module
import { lockOpenOutline, carOutline } from 'ionicons/icons';

export interface Gate {
	name: string;
	icon: string;
	bg: string;
	color: string;
	btnClass: string;
}

export interface Camera {
	id: number;
	label: string;
	src: string;
	timestamp: string;
}

export interface ActivityEvent {
	title: string;
	sub: string;
	time: string;
	dotColor: string;
}

export const gates: Gate[] = [
	{
		name: 'Portão Principal',
		icon: lockOpenOutline,
		bg: 'bg-emerald-50',
		color: 'text-emerald-600',
		btnClass: 'bg-emerald-500 text-white',
	},
	{
		name: 'Garagem G1',
		icon: carOutline,
		bg: 'bg-brand-light',
		color: 'text-brand',
		btnClass: 'bg-brand text-white',
	},
];

export const cameras: Camera[] = [
	{
		id: 1,
		label: 'Cam 01 · Portaria',
		src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format&fit=crop&q=60',
		timestamp: '14 Mar 2026 · 23:14',
	},
	{
		id: 2,
		label: 'Cam 04 · Garagem',
		src: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&auto=format&fit=crop&q=60',
		timestamp: '14 Mar 2026 · 23:14',
	},
];

export const activityEvents: ActivityEvent[] = [
	{ title: 'Portão principal aberto', sub: 'Solicitado via App', time: '15 min', dotColor: 'bg-emerald-400' },
	{ title: 'Entrada garagem G1', sub: 'TAG Veicular · ABC-1D34', time: '2h', dotColor: 'bg-brand' },
	{ title: 'Visitante autorizado', sub: 'Carlos Almeida · Portaria', time: 'Ontem', dotColor: 'bg-amber-400' },
];
