import React from 'react';
import { styled, makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';

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
		'&.day1': {
			backgroundColor: theme.palette.background.day1,
		},
		'&.day2': {
			backgroundColor: theme.palette.background.day2,
		},
		'&.day3': {
			backgroundColor: theme.palette.background.day3,
		},
	},
}));

const StyledRecipe = styled('div')(({ theme }) => ({
	// minHeight: '100vh',
	backgroundColor: theme.palette.background.default,
	display: 'flex',
	gap: '1em',
}));

interface IRecipeProps {
	day: number;
	meal: 'breakfast' | 'lunch' | 'dinner';
	icon: string;
	name: string;
	stuffs?: Array<string>;
	note?: string;
	content: string;
}

export class RecipeProps implements IRecipeProps {
	day: number;
	meal: 'breakfast' | 'lunch' | 'dinner';
	icon: string;
	name: string;
	stuffs?: Array<string>;
	note?: string;
	content: string;
	constructor(params: RecipeProps) {
		this.day = params.day;
		this.meal = params.meal;
		this.icon = params.icon;
		this.name = params.name;
		this.stuffs = params.stuffs;
		this.note = params.note;
		this.content = params.content;
	}
}

export default function Recipe({ content, ...stuffInfo }: IRecipeProps) {
	const classes = useStyle();

	return (
		<StyledRecipe>
			<Stuff {...stuffInfo} />
			<div className={`${classes.content} day${stuffInfo.day}`}>
				<Typography variant={'body1'} style={{ whiteSpace: 'pre-wrap' }}>
					{content}
				</Typography>
			</div>
		</StyledRecipe>
	);
}

const Stuff = (props: Omit<IRecipeProps, 'content'>) => {
	const { day, icon, meal, name, stuffs, note } = props;
	const classes = useStyle();

	return (
		<div className={`${classes.stuff} day${day}`}>
			<div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
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
				<Image src={icon} width={'100%'} height={'100%'} />
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
