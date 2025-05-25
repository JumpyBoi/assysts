import 'server-only';

import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { keys } from './keys';

const env = keys();

const client = neon(env.DATABASE_URL);

export const database = drizzle({ client });
