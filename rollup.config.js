import path from "path";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";

import autoprefixer from "autoprefixer";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      esbuild({
        sourceMap: false,
        // minify: process.env.NODE_ENV === 'production',
        jsx: "transform", // default, or 'preserve'
        jsxFactory: "React.createElement",
        jsxFragment: "React.Fragment",
        tsconfig: path.resolve(process.cwd(), "tsconfig.json"),
      }),
      resolve(),
      svgr(),
      commonjs(),
      postcss({
        plugins: [autoprefixer()],
        autoModules: true,
        extensions: [".css", ".scss"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
