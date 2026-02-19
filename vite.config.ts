// vite.config.ts
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    hot: true,
    // Include other server options if necessary
  },
  // Add other Vite configurations as necessary
});