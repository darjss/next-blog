import "@/styles/globals.css";
import Layout from "../components/layout";
import SearchProvider from "@/context/SearchContext";
import { Work_Sans } from "next/font/google";
const workSans = Work_Sans({
  subsets: ["latin"],
  // variable: "--font-workSans",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={workSans.className}>
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </main>
  );
}
