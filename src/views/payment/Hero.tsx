import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { IMAGES } from '../../constants/images';
import { NAV_ID } from '../../constants/static';

const useStyle = makeStyles((theme) => ({
	hero: {
		minHeight: `calc(100vh - ${theme.layout.header.height})`,
		backgroundColor: theme.palette.primary.main,
		display: 'flex',
		flexDirection: 'column',
		'& .content': {
			display: 'flex',
			gap: '1em',
			flex: '1 0 0',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
				gap: '0.2em',
			},
		},
	},
	sideBar: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		flexDirection: 'column',
		flex: '1 0 0',
		gap: '1em',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2em',
		color: theme.palette.primary.main,
		'& .header': {
			fontFamily: 'Aloja',
		},
	},
	outline: {
		backgroundColor: theme.palette.background.default,
		flex: '3 0 0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		gap: '1em',
		padding: '2em',
		color: theme.palette.primary.main,
		'& *': {
			fontWeight: 'bold',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		'& .image': {
			flex: '1 1 0',
			maxWidth: '30%',
			[theme.breakpoints.down('sm')]: {
				maxWidth: '10rem',
			},
		},
	},
	menu: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: '0.5em',
		'& a': {
			position: 'relative',
			'&::after': {
				content: `''`,
				position: 'absolute',
				width: '0.5em',
				height: 2,
				backgroundColor: theme.palette.secondary.main,
				bottom: '-0.3em',
				left: 0,
				transition: `${theme.transitions.duration.standard}ms`,
			},
			'&:hover': {
				'&::after': {
					width: '100%',
				},
			},
		},
	},
	copyright: {
		backgroundColor: theme.palette.primary.main,
		display: 'grid',
		placeItems: 'center',
		padding: '1em',
		color: theme.palette.text.primary,
	},
}));

export default function Hero() {
	const classes = useStyle();

	return (
		<div className={classes.hero}>
			<div className={'content'}>
				<SideBar />
				<Outline />
			</div>
			<Copyright />
		</div>
	);
}

const SideBar = () => {
	const classes = useStyle();

	return (
		<div className={classes.sideBar}>
			<Typography className={'header'} variant={'h1'}>
				{'Camping Menu'}
			</Typography>
			<Typography className={'date'} variant={'h5'}>
				{'10/09 - 11 HSINCHU'}
			</Typography>
		</div>
	);
};

const Outline = () => {
	const classes = useStyle();

	return (
		<div className={classes.outline}>
			<div className={classes.menu}>
				<a href={`#${NAV_ID.day1_1}`}>{'Day1 ??????'}</a>
				<ul>
					<li>{'?????????'}</li>
					<li>{'??????'}</li>
					<li>{'?????? (??????????)'}</li>
				</ul>
				<a href={`#${NAV_ID.day2_1}`}>{'Day2 ??????'}</a>
				<ul>
					<li>{'????????????'}</li>
					<li>{'????????????'}</li>
				</ul>
				<a href={`#${NAV_ID.day2_2}`}>{'Day2 ??????'}</a>
				<ul>
					<li>{'?????????'}</li>
					<li>{'????????????????????????????????????'}</li>
					<li>{'??????'}</li>
				</ul>
				<a href={`#${NAV_ID.day2_3}`}>{'Day2 ??????'}</a>
				<ul>
					<li>{'??????????????????'}</li>
					<li>{'?????? or ??????'}</li>
				</ul>
				<a href={`#${NAV_ID.day3_1}`}>{'Day3 ??????'}</a>
				<ul>
					<li>{'Bagel or ??????'}</li>
				</ul>
			</div>
			<div className={'image'}>
				<Image src={IMAGES.camping} width={'100%'} height={'100%'} layout={'responsive'} alt={'hero'} />
			</div>
		</div>
	);
};

const Copyright = () => {
	const classes = useStyle();

	return <div className={classes.copyright}>{'Camping Menu | ?? Daisy 2021'}</div>;
};
