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
	minHeight: '100vh',
	backgroundColor: theme.palette.background.default,
	display: 'flex',
	gap: '1em',
}));

interface IRecipeProps {
	day: number;
	meal: 'breakfast' | 'lunch' | 'dinner';
	icon: string;
	name: string;
	stuffs: Array<string>;
	note?: string;
	content: string;
}

export class RecipeProps implements IRecipeProps {
	day: number;
	meal: 'breakfast' | 'lunch' | 'dinner';
	icon: string;
	name: string;
	stuffs: Array<string>;
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
			<div className={`${classes.content} day${stuffInfo.day}`}>{content}</div>
		</StyledRecipe>
	);
}

const Stuff = (props: Omit<IRecipeProps, 'content'>) => {
	const { day, icon, meal, name, stuffs, note } = props;
	const classes = useStyle();

	return (
		<div className={`${classes.stuff} day${day}`}>
			<div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
				<div>
					<div>{`Day${day}`}</div>
					<div>{meal}</div>
				</div>
				<Image src={icon} width={'50px'} height={'50px'} />
			</div>
			<div>{name}</div>
			<Typography>{'Recipe'}</Typography>
			<ul>
				{stuffs.map((stuff, index) => (
					<li key={index}>{stuff}</li>
				))}
			</ul>
			{note && <div>{note}</div>}
		</div>
	);
};
