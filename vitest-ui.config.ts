import path from 'node:path';
import { defineConfig } from 'vitest/config';
import { UserConfigExport } from 'vite';

const app = async (): Promise<UserConfigExport> => {
    return defineConfig({
        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, '/src/lib') }],
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setup.ts',
            coverage: {
                provider: 'v8',
                reporter: ['text', 'json', 'html'],
            },
        },
    });
};
// https://vitejs.dev/config/
export default app;
