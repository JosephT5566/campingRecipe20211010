import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import Header from '../src/views/layout/Header';
import '../styles/globals.css';
import Footer from '../src/views/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	);
}
export default MyApp;
