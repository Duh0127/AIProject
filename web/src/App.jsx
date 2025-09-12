import { ThemeProvider } from "styled-components";
import AppRoutes from './routes';
import GlobalStyles from './theme/globalStyles';
import darkTheme from './theme/dark';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
