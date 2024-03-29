import "@/styles/globals.scss";
import { store } from "@/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { MantineProvider } from "@mantine/core";
import PageLayout from "@/components/shared/layouts/page/PageLayout";
import MainLayout from "@/components/Layouts/MainLayout";
import { Notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { queryClient } from "@/api";
import { QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colors: {
              brandold: [
                "#edf2f5",
                "#eeeeff",
                "#cbc7f6",
                "#beb0f3",
                "#b0a7f1",
                "#a3a0ef",
                "#9697ed",
                "#8980eb",
                "#7c79e8",
                "#6f72e6",
              ],
              brand: [
                "#ebf0f5",
                "#ccedff",
                "#9ad7ff",
                "#64c1ff",
                "#3baefe",
                "#20a2fe",
                "#099cff",
                "#0088e4",
                "#0078cd",
                "#0069b6",
              ],
              brand2: [
                "#e1f9ff",
                "#ccedff",
                "#9ad7ff",
                "#64c1ff",
                "#3baffe",
                "#20a3fe",
                "#099dff",
                "#0088e4",
                "#0079cd",
                "#0069b6",
              ],
              brandr: [
                "#FFE9E9",
                "#FFD1D1",
                "#FBA0A1",
                "#F76D6D",
                "#F34141",
                "#F22625",
                "#F21616",
                "#D8070B",
                "#C10008",
                "#A90003",
              ],
              brand22: [
                "#FFEBFF",
                "#F5D5FC",
                "#E6A9F3",
                "#D779EB",
                "#CB51E4",
                "#C437E0",
                "#C029DF",
                "#A91CC6",
                "#9715B1",
                "#840A9C",
              ],
              brand222: [
                "#EFFEE7",
                "#E0F8D4",
                "#C2EFAB",
                "#A2E67E",
                "#87DE57",
                "#75D940",
                "#6BD731",
                "#59BE23",
                "#4DA91B",
                "#3D920C",
              ],
            },
            primaryColor: "brand",
          }}
        >
          <Provider store={store}>
            <Notifications />
            <PageLayout>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PageLayout>
          </Provider>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}
