import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { auth } from './lib/auth';

const app = new Hono();
const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:5173,http://127.0.0.1:5173')
	.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean);

app.use(
	'/*',
	cors({
		origin: (origin) => {
			if (!origin) {
				return allowedOrigins[0] ?? '';
			}

			return allowedOrigins.includes(origin) ? origin : '';
		},
		credentials: true,
	}),
);

// Authentication route
app.on(['POST', 'GET'], '/api/auth/*', (c) => {
	return auth.handler(c.req.raw);
});

app.get('/', (c) => {
	return c.json({
		message: 'Condo Management API',
		status: 'online',
	});
});

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '0.0.0.0';

console.log(`Server is running on http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`);

serve({
	fetch: app.fetch,
	port,
	hostname: host,
});
