import { barelyServe } from "barely-a-dev-server";

barelyServe({
  entryRoot: "./src/demo",
  outDir: "./.temp/dev",
  esbuildOptions: {
    target: "es5",
  },
});