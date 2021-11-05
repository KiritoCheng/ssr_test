import Link from "next/link";
import Head from "next/head";

function SubPage() {
  return (
    <>
      <Head>
        <title>KiritoChen的SSR测试子页</title>
      </Head>

      <div>This is SubPage!</div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}

export default SubPage;
