import React, { useState } from 'react';
import Image from 'next/image';

import { styled, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PushPinIcon from '@mui/icons-material/PushPin';
import { SwitchButton } from '../shared/SwitchButtons';

const useStyle = makeStyles((theme) => ({
	stuff: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 0 0',
		gap: '1em',
		padding: '2em',
		color: theme.palette.text.primary,
		'&.day1': {
			backgroundColor: theme.palette.background.day1,
		},
		'&.day2': {
			backgroundColor: theme.palette.background.day2,
		},
		'&.day3': {
			backgroundColor: theme.palette.background.day3,
		},
		'& .colorText': {
			'&.day1': {
				color: theme.palette.text.day1,
			},
			'&.day2': {
				color: theme.palette.text.day2,
			},
			'&.day3': {
				color: theme.palette.text.day3,
			},
		},
	},
	content: {
		padding: '2em',
		display: 'flex',
		flex: '3 0 0',
		color: theme.palette.text.primary,
		transition: '0.5s',
		'&.day1': {
			backgroundColor: theme.palette.background.day1,
		},
		'&.day2': {
			backgroundColor: theme.palette.background.day2,
		},
		'&.day3': {
			backgroundColor: theme.palette.background.day3,
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '80vw',
			position: 'absolute',
			minHeight: '100%',
			right: '-80vw',
			'& *': { fontSize: '0.875rem' },
			'&.display': {
				right: '0',
			},
		},
	},
}));

const StyledRecipe = styled('div')(({ theme }) => ({
	minHeight: `calc(100vh - ${theme.layout.header.height})`,
	backgroundColor: theme.palette.background.default,
	display: 'flex',
	gap: '1em',
	position: 'relative',
}));

interface IRecipeProps {
	id?: string;
	day: number;
	meal: 'breakfast' | 'lunch' | 'dinner';
	icon: string;
	name: string;
	stuffs?: Array<string>;
	note?: string;
	content: string;
	hint?: string;
}

export class RecipeProps implements IRecipeProps {
	id?: string;
	day: number;
	meal: 'breakfast' | 'lunch' | 'dinner';
	icon: string;
	name: string;
	stuffs?: Array<string>;
	note?: string;
	content: string;
	hint?: string;
	constructor(params: RecipeProps) {
		this.id = params.id;
		this.day = params.day;
		this.meal = params.meal;
		this.icon = params.icon;
		this.name = params.name;
		this.stuffs = params.stuffs;
		this.note = params.note;
		this.content = params.content;
		this.hint = params.hint;
	}
}

export default function Recipe({ id, content, ...stuffInfo }: IRecipeProps) {
	const classes = useStyle();
	const [isDisplay, setIsDisplay] = useState(false);

	return (
		<StyledRecipe id={id}>
			<Stuff {...stuffInfo} isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
			<div
				className={`${classes.content} day${stuffInfo.day} ${isDisplay ? 'display' : ''}`}
				style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
			>
				{stuffInfo.hint && (
					<div style={{ display: 'flex', gap: '1em' }}>
						<Icon color={'secondary'}>
							<PushPinIcon />
						</Icon>
						<Typography variant={'body1'}>{stuffInfo.hint}</Typography>
					</div>
				)}
				<Typography variant={'body1'} style={{ whiteSpace: 'pre-wrap' }}>
					{content}
				</Typography>
			</div>
		</StyledRecipe>
	);
}

const Stuff = (
	props: Omit<IRecipeProps, 'content'> & {
		isDisplay: boolean;
		setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	}
) => {
	const { day, icon, meal, name, stuffs, note, isDisplay, setIsDisplay } = props;
	const classes = useStyle();
	const isViewSm = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<div className={`${classes.stuff} day${day}`}>
			<div>{isViewSm && <SwitchButton isTrue={isDisplay} setIsTrue={setIsDisplay} />}</div>
			<div style={{ display: 'flex', gap: '1em', alignItems: 'center', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
					<Typography variant={'h2'}>{`Day${day}`}</Typography>
					<Typography
						className={`colorText day${day}`}
						variant={'subtitle1'}
						style={{ textTransform: 'uppercase' }}
					>
						{meal}
					</Typography>
				</div>
				<div style={{ flex: '1 0 0', maxWidth: '15em' }}>
					<Image src={icon} width={'100'} height={'100'} layout={'responsive'} alt={meal} />
				</div>
			</div>
			<Typography variant={'h1'} style={{ fontWeight: 'bold' }}>
				{name}
			</Typography>
			<Typography className={`colorText day${day}`} variant={'h5'}>
				{'RECIPE'}
			</Typography>
			{stuffs && (
				<ul>
					{stuffs.map((stuff, index) => (
						<li key={index} style={{ whiteSpace: 'pre-wrap' }}>
							{stuff}
						</li>
					))}
				</ul>
			)}
			{note && <div>{note}</div>}
		</div>
	);
};
