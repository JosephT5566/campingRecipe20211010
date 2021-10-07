import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { IMAGES } from '../../constants/images';

const useStyle = makeStyles((theme) => ({
	footer: {
		minHeight: theme.layout.footer.height,
		backgroundColor: '#405c80',
		display: 'grid',
		placeItems: 'center',
		gap: '0.5em',
		padding: '2rem',
	},
}));

export default function Footer() {
	const classes = useStyle();
	return (
		<footer className={classes.footer}>
			<div style={{ width: '10em', height: '10em' }}>
				<Image src={IMAGES.footer} width={'100%'} height={'100%'} layout={'responsive'} />
			</div>
			<Typography variant={'body2'}>{'© Daisy 2021'}</Typography>
		</footer>
	);
}
