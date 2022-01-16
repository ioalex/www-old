import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/js/main.js",
  output: {
    file: "dist/js/bundle.js",
    format: "iife",
    sourcemap: process.env.NODE_ENV === "development" ? true : false,
  },
  plugins: [
    resolve(),
    commonjs(),
    production &&
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
    production &&
      terser({
        format: {
          comments: "some",
        },
      }),
  ],
};
