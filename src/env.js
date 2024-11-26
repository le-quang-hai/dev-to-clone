import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
    /**
     * Specify your server-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars.
     */
    server: {
        AUTH_SECRET: process.env.NODE_ENV === 'production' ? z.string() : z.string().optional(),
        AUTH_DISCORD_ID: z.string(),
        AUTH_DISCORD_SECRET: z.string(),
        AUTH_GOOGLE_ID: z.string(),
        AUTH_GOOGLE_SECRET: z.string(),
        DATABASE_URL: z.string().url(),

        AWS_KEY_ID: z.string(),
        AWS_SECRET_ACCESS_KEY: z.string(),
        AWS_S3_BUCKET_NAME: z.string(),

        NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    },

    /**
     * Specify your client-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars. To expose them to the client, prefix them with
     * `NEXT_PUBLIC_`.
     */
    client: {
        // NEXT_PUBLIC_CLIENTVAR: z.string(),
    },

    /**
     * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
     * middlewares) or client-side so we need to destruct manually.
     */
    runtimeEnv: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
        AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
        AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
        AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,

        AWS_KEY_ID: process.env.AWS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,

        NODE_ENV: process.env.NODE_ENV,
    },
    /**
     * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
     * useful for Docker builds.
     */
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    /**
     * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
     * `SOME_VAR=''` will throw an error.
     */
    emptyStringAsUndefined: true,
});

export default env;
