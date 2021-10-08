import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
	header: {
		minHeight: theme.layout.header.height,
		width: '100%',
		top: 0,
		left: 0,
		zIndex: theme.zIndex.appBar,
		padding: '0.5em',
		position: 'fixed',
		display: 'grid',
		placeItems: 'center',
		backgroundColor: `${theme.palette.common.white}FFFDA`,
		backdropFilter: 'blur(4px)',
		'& a': {
			fontSize: '2em',
			// fontFamily: theme.typography.fontFamily,
			fontFamily: 'Aloja',
			color: theme.palette.primary.main,
		},
	},
}));

export default function Header() {
	const classes = useStyle();
	return (
		<header className={classes.header}>
			<a href="#">{'Camping Menu'}</a>
		</header>
	);
}
