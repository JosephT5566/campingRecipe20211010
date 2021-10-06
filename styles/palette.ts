import { Palette } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
	// interface Palette {
	// 	status: {
	// 		red: string;
	// 		orange: string;
	// 		yellow: string;
	// 		green: string;
	// 		blue: string;
	// 	};
	// }
	// interface PaletteOptions {
	// 	status?: {
	// 		red: string;
	// 		orange: string;
	// 		yellow: string;
	// 		green: string;
	// 		blue: string;
	// 	};
	// }

	interface TypeBackground {
		day1: string;
		day2: string;
		day3: string;
	}
}

export const palette = {
	primary: {
		main: '#639763',
	},
	secondary: {
		main: '#ffbb2f',
	},
	background: {
		default: '#fff',
		paper: '#97bcc7',
		day1: '#053d57',
		day2: '#6a804e',
		day3: '#6e8199',
	},
	error: {
		main: '#ec5f5f',
	},
} as Palette;
