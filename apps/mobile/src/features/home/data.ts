// Mock data for the home module
import { keyOutline, videocamOutline, qrCodeOutline, megaphoneOutline } from 'ionicons/icons';

export const shortcuts = [
	{ label: 'Portão', icon: keyOutline, bg: 'bg-emerald-50', color: 'text-emerald-600' },
	{ label: 'Câmeras', icon: videocamOutline, bg: 'bg-brand-light', color: 'text-brand' },
	{ label: 'QR Code', icon: qrCodeOutline, bg: 'bg-violet-50', color: 'text-violet-600' },
	{ label: 'Avisos', icon: megaphoneOutline, bg: 'bg-amber-50', color: 'text-amber-600' },
];

export const notices = [
	{
		id: 1,
		title: 'Manutenção da piscina',
		body: 'A piscina ficará interditada nesta sexta das 08h às 14h para limpeza.',
		time: 'Hoje, 09:30',
		dotColor: 'bg-amber-400',
	},
	{
		id: 2,
		title: 'Assembleia geral ordinária',
		body: 'Reunião de aprovação de contas terça-feira às 19h no salão de festas.',
		time: 'Ontem, 18:00',
		dotColor: 'bg-brand',
	},
	{
		id: 3,
		title: 'Aviso do síndico',
		body: 'Solicitamos silêncio após as 22h conforme regimento interno.',
		time: '13/03/2026',
		dotColor: 'bg-slate-300',
	},
];

export const residence = {
	name: 'Bloco A – Apto 302',
	condo: 'Condomínio CondoSmart',
};

export const nextPayment = {
	value: 'R$ 850,00',
	label: 'Próximo pagamento',
};
