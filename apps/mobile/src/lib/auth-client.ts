import { createAuthClient } from 'better-auth/vue';
import { organizationClient } from 'better-auth/client/plugins';

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export const authClient = createAuthClient({
	baseURL,
	plugins: [organizationClient()],
});
