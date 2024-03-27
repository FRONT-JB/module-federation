import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    // 빌드가 될 결과물이 나올 위치
    outDir: "./dist",
    lib: {
      // 어떤 파일 기준으로 라이브러리를 만들것인지
      entry: "./src/index.ts",
      // 패키지 이름
      name: "ui-kit",
      // 파일명
      fileName: "index",
    },
    rollupOptions: {
      // react는 외부에서 환경을 가지고 있도록 구성
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "index.css";
          }

          return assetInfo.name || "";
        },
      },
    },
  },
});
