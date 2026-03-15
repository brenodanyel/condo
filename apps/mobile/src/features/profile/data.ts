// Mock data for the profile module
import {
	personOutline,
	mailOutline,
	callOutline,
	cardOutline,
	notificationsOutline,
	lockClosedOutline,
	helpCircleOutline,
} from 'ionicons/icons';

export interface ProfileField {
	label: string;
	value: string;
	icon: string;
	bg: string;
	color: string;
}

export interface SettingsItem {
	label: string;
	icon: string;
	bg: string;
	color: string;
}

export const getPersonalFields = (name?: string | null, email?: string | null): ProfileField[] => [
	{ label: 'Nome', value: name || 'Não informado', icon: personOutline, bg: 'bg-brand-light', color: 'text-brand' },
	{ label: 'E-mail', value: email || 'Não informado', icon: mailOutline, bg: 'bg-brand-light', color: 'text-brand' },
	{
		label: 'Telefone',
		value: '+55 (11) 99999-0000',
		icon: callOutline,
		bg: 'bg-emerald-50',
		color: 'text-emerald-600',
	},
	{ label: 'CPF', value: '***.123.456-**', icon: cardOutline, bg: 'bg-slate-50', color: 'text-slate-400' },
];

export const settingsMenu: SettingsItem[] = [
	{ label: 'Notificações', icon: notificationsOutline, bg: 'bg-amber-50', color: 'text-amber-600' },
	{ label: 'Alterar senha', icon: lockClosedOutline, bg: 'bg-brand-light', color: 'text-brand' },
	{ label: 'Ajuda e suporte', icon: helpCircleOutline, bg: 'bg-violet-50', color: 'text-violet-600' },
];
