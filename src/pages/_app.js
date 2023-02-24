import "@/styles/globals.scss";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import PageLayout from "@/components/shared/layouts/page/PageLayout";
import Header from "@/components/features/header/Header";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageLayout>
        <Header />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </PageLayout>
    </Provider>
  );
}
