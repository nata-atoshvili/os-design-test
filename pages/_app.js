import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";
import { GlobalMeta } from "styles/meta";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalMeta />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
