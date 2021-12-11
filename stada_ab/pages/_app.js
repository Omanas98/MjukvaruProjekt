import Layout from "../components/layout";
import "../styles/style.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/login.css";
import { StateProvider } from "./login";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
