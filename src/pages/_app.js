import "@/styles/globals.scss";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import PageLayout from "@/components/shared/layouts/page/PageLayout";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            brand: [
              "#e5d6ff",
              "#d8cfff",
              "#cbc7f6",
              "#beb0f3",
              "#b0a7f1",
              "#a3a0ef",
              "#9697ed",
              "#8980eb",
              "#7c79e8",
              "#6f72e6",
            ],
          },
          primaryColor: "brand",
        }}
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
    </>
  );
}
