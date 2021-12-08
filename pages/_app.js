import reducer, { initialState } from "../reducer";
import { AppProvider } from "../StateProvider";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AppProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </AppProvider>
  );
}
