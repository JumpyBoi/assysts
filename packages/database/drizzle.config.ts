import { defineConfig } from 'drizzle-kit';
import { keys } from './keys';

const env = keys();

export default defineConfig({
  schema: './schema.ts',
  out: './',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
