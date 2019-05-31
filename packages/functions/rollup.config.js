import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";

module.exports = {
  input: "src/index.ts",
  output: {
    file: "lib/bundle.js",
    format: "cjs"
  },
  plugins: [typescript()]
};
