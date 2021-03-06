import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../styles/theme';
import { IMAGES } from '../src/constants/images';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="zh-TW">
				<Head>
					<link rel="icon" href="/favicon.png" />
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link
						href="https://fonts.googleapis.com/css2?family=Arvo&family=Roboto:wght@400;500&display=swap"
						rel="stylesheet"
					/>
					<meta property="og:title" content="Camping menu" />
					<meta property="og:description" content="The camping recipe menu in Hsinchu 2021" />
					<meta property="og:type" content="website" />
					<meta property="og:image" content="/images/camping.png" />
					<meta property="og:site_name" content="Camping menu" />
					<meta property="og:url" content="https://camping-recipe202110.vercel.app/" />
					<meta name="description" content="The camping recipe menu in Hsinchu 2021" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="preload" href="/fonts/Aloja-Light.woff" as="font" crossOrigin="" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	static async getInitialProps(ctx: DocumentContext) {
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
			styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
		};
	}
}
