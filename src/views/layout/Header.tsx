import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
	header: {
		minHeight: theme.layout.header.height,
		width: '100%',
		padding: '0.5em',
		display: 'grid',
		placeItems: 'center',
		backgroundColor: theme.palette.common.white,
		'& a': {
			fontSize: '2em',
			fontFamily: theme.typography.fontFamily,
			color: theme.palette.primary.main,
		},
	},
}));

export default function Header() {
	const classes = useStyle();
	return (
		<header className={classes.header}>
			<a href="/">{'Camping Menu'}</a>
		</header>
	);
}
