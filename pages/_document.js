import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body data-theme="dark">
        <div id="modal-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
