import path from 'node:path';
import { UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { name } from './package.json';

const resolvePath = (str: string) => path.resolve(__dirname, str);

const app = async (): Promise<UserConfigExport> => {
    return defineConfig({
        build: {
            lib: {
                entry: resolvePath('src/lib/index.ts'),
                name,
                formats: ['es', 'umd'],
                fileName: (format) => `${name}.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react/jsx-runtime', 'react-dom', 'moment'],
                output: {
                    globals: {
                        react: 'React',
                        'react/jsx-runtime': 'react/jsx-runtime',
                        'react-dom': 'ReactDOM',
                    },
                },
            },
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
        plugins: [
            react(),
            dts({
                insertTypesEntry: true,
                include: [resolvePath('src')],
                outDir: resolvePath('dist/@dexma'),
            }),
            tsconfigPaths(),
        ],
    });
};
// https://vitejs.dev/config/
export default app;
