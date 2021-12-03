import Layout from '../components/layout'
import '../styles/style.css'
import '../styles/header.css'
import '../styles/footer.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
