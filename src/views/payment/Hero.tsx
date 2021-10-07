import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { IMAGES } from '../../constants/images';

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
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5em',
				}}
			>
				<Typography variant={'body1'}>{'Day1 晚餐'}</Typography>
				<ul>
					<li>{'大阪燒'}</li>
					<li>{'烤肉'}</li>
					<li>{'火鍋 (兼消夜?)'}</li>
				</ul>
				<Typography variant={'body1'}>{'Day2 早餐'}</Typography>
				<ul>
					<li>{'粉漿蛋餅'}</li>
					<li>{'豬肉丸子'}</li>
				</ul>
				<Typography variant={'body1'}>{'Day2 午餐'}</Typography>
				<ul>
					<li>{'親子丼'}</li>
					<li>{'清炒辣味時蔬豬肉義大利麵'}</li>
					<li>{'湯品'}</li>
				</ul>
				<Typography variant={'body1'}>{'Day2 晚餐'}</Typography>
				<ul>
					<li>{'剝皮辣椒雞鍋'}</li>
					<li>{'烤肉 or 咖哩'}</li>
				</ul>
				<Typography variant={'body1'}>{'Day3 早餐'}</Typography>
				<ul>
					<li>{'Bagel or 煎餃'}</li>
				</ul>
			</div>
			<div className={'image'}>
				<Image src={IMAGES.camping} width={'100%'} height={'100%'} layout={'responsive'} />
			</div>
		</div>
	);
};

const Copyright = () => {
	const classes = useStyle();

	return <div className={classes.copyright}>{'Camping Menu | © Daisy 2021'}</div>;
};
