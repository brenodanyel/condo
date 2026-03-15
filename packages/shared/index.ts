import { z } from 'zod';

export const UserSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	email: z.string().email(),
	role: z.enum(['ADMIN', 'RESIDENT', 'STAFF']),
});

export type User = z.infer<typeof UserSchema>;
