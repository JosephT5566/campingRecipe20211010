import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
	children: ReactNode;
}

const useStyle = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
		paddingTop: theme.layout.header.height,
		paddingInline: '10em',
		paddingBottom: '1em',
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		flexDirection: 'column',
		gap: '2rem',
		[theme.breakpoints.down('md')]: {
			paddingInline: '5em',
		},
		[theme.breakpoints.down('xs')]: {
			paddingInline: '1em',
		},
	},
}));

export default function Container({ children }: Props) {
	const classes = useStyle();
	return <div className={classes.container}>{children}</div>;
}
