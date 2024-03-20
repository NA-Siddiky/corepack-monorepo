import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["./src/index.ts"],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    typescript(),
    terser(),
  ],
  external: ["react"]
};
