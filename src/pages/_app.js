import { RecoilRoot } from "recoil";
import Layout from "~/src/components/Layout";

//  Component에는 각 pages component가 들어오고, pageProps 는 getInitialProps를 통해 들어온 props들을 나타낸다.
function MyApp({ Component, pageProps }) {
  // 상태관리를 위한 root에 RecoilRoot wrap
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
