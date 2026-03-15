import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { organization } from 'better-auth/plugins';
import { db } from '../db';
import * as schema from '../db/schema';

const trustedOrigins = (
	process.env.BETTER_AUTH_TRUSTED_ORIGINS ??
	process.env.CORS_ORIGINS ??
	'http://localhost:5173,http://127.0.0.1:5173'
)
	.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean);

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
	}),
	emailAndPassword: {
		enabled: true,
	},
	trustedOrigins,
	plugins: [organization()],
});
