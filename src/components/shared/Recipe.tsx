import React from 'react';
import { styled } from '@material-ui/core/styles';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';

const StyledRecipe = styled('div')(({ theme }) => ({
	minHeight: '100vh',
	backgroundColor: theme.palette.background.default,
	display: 'flex',
	gap: '1em',
}));

const StyledStuff = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	flex: '1 0 0',
	gap: '1em',
	padding: '2em',
});

const StyledContent = styled('div')({
    padding: '2em',
    flex: '3 0 0',
});

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
	return (
		<StyledRecipe>
			<Stuff {...stuffInfo} />
			<StyledContent>{content}</StyledContent>
		</StyledRecipe>
	);
}

const Stuff = (props: Omit<IRecipeProps, 'content'>) => {
	const { day, icon, meal, name, stuffs, note } = props;
	return (
		<StyledStuff>
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
				{stuffs.map((stuff) => (
					<li>{stuff}</li>
				))}
			</ul>
			{note && <div>{note}</div>}
		</StyledStuff>
	);
};
