export interface ILayout {
	header: {
		height: string;
	};
	footer: {
		height: string;
	};
}

export const layout = {
	header: {
		height: '80px',
	},
	footer: {
		height: '115px',
	},
} as ILayout;
