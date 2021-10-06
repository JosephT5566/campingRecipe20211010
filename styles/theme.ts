import { createTheme } from '@material-ui/core/styles';

import { palette } from './palette';
import { ILayout, layout } from './layout';

// default theme of material-ui: https://material-ui.com/customization/default-theme/

declare module '@material-ui/core/styles/createTheme' {
	interface Theme {
		layout: ILayout;
	}
	interface ThemeOptions {
		layout?: ILayout;
	}
}

// Create a theme instance.
const theme = createTheme({ palette, layout });

export default theme;
