import "@/styles/globals.scss";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import PageLayout from "@/components/shared/layouts/page/PageLayout";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";
export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
    >
      <Provider store={store}>
        <PageLayout>
          <Header />
          <div className="content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </PageLayout>
      </Provider>
    </MantineProvider>
  );
}
