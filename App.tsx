import { ThemeProvider } from 'styled-components/native';

import theme from './src/@theme';

import { Diet } from "./src/screens/Diet";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Diet />
    </ThemeProvider>
  );
}