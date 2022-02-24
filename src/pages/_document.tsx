import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "src/styles/theme";
import createEmotionCache from "src/createEmotionCache";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
  // const originalRenderPage = ctx.renderPage;
  // const cache = createEmotionCache();
  // const { extractCriticalToChunks } = createEmotionServer(cache);

  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) =>
  //       function EnhanceApp(props) {
  //         return <App emotionCache={cache} {...props} />;
  //       },
  //   });

  // const initialProps = await Document.getInitialProps(ctx);
  // const emotionStyles = extractCriticalToChunks(initialProps.html);

  // const emotionStyleTags = emotionStyles.styles.map((style) => (
  //   <style
  //     data-emotion={`${style.key} ${style.ids.join(" ")}`}
  //     key={style.key}
  //     // eslint-disable-next-line react/no-danger
  //     dangerouslySetInnerHTML={{ __html: style.css }}
  //   />
  // ));
  // return {
  //   ...initialProps,
  //   emotionStyleTags,
  // };
};
