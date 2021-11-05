import Link from "next/link";
import Head from "next/head";
import styles from "./logo.module.scss";

function HomePage() {
  return (
    <>
      <Head>
        <title>KiritoChen的SSR测试首页</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <div>Welcome to Next.js!</div>
      <Link href="/subPage">
        <a>GO to SubPage!</a>
      </Link>
      <Link href="http://www.baidu.com">
        <img src="/images/test.gif" alt="Logo" className={styles.logo} />
      </Link>
    </>
  );
}

export default HomePage;
