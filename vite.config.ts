import { dirname, resolve, relative, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import { glob } from "glob";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
      rollupTypes: true,
    }),
    externalizeDeps({
      deps: true,
      devDeps: false,
      except: [],
      include: ["react/jsx-runtime"],
      nodeBuiltins: true,
      optionalDeps: true,
      peerDeps: true,
      useFile: join(process.cwd(), 'package.json'),
    })
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          "react/jsx-runtime": "jsxRuntime",
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      cssFileName: "main",
    },
  },
});
