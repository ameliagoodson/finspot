import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["app/**/*.{ts,tsx}", "lib/**/*.ts", "middleware.ts"],
  project: ["**/*.{ts,tsx}"],
  ignore: ["lib/generated/**"],
};

export default config;
