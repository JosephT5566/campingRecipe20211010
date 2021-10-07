import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
	footer: {
		minHeight: theme.layout.footer.height,
		backgroundColor: '#405c80',
		display: 'grid',
		placeItems: 'center',
		padding: '2rem',
	},
}));

export default function Footer() {
	const classes = useStyle();
	return <footer className={classes.footer}>{'123'}</footer>;
}
