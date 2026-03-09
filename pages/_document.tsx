import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080808" />
        <meta name="description" content="Manu Mathew Jiss — AI Engineer, ML Researcher & Full-Stack Developer based in San Francisco Bay Area. Master's student at University of the Pacific." />
        <meta property="og:title" content="Manu Mathew Jiss | AI Engineer & ML Researcher" />
        <meta property="og:description" content="Building AI systems that work in the real world — from multi-model trading platforms to autonomous robots." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manumathewjiss.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manu Mathew Jiss | AI Engineer & ML Researcher" />
        <meta name="keywords" content="Manu Mathew Jiss, AI Engineer, Machine Learning, NLP, Full Stack Developer, Next.js, PyTorch, TensorFlow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
