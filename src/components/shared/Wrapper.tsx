import React, { ReactNode, ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export class ChallengeInfo {
	id: string;
	title: string;
	subTitle: string;
	description: string | ReactElement;
	constructor(id: string, title: string, subTitle: string, description: string | ReactElement) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.description = description;
	}
}

const useStyle = makeStyles({
	dailyChallengeWrapper: {
		'& a': {
			color: '#136C72',
			'&:hover': {
				opacity: '0.75',
			},
		},
	},
	content: {
		paddingBlock: '1em',
	},
});

export const DailyChallengeWrapper = (props: { info: ChallengeInfo; children: ReactNode }) => {
	const { info, children } = props;
	const classes = useStyle();

	return (
		<div id={info.id} className={classes.dailyChallengeWrapper}>
			<Typography variant={'h1'}>{info.title}</Typography>
			<Typography variant={'h2'}>{info.subTitle}</Typography>
			{typeof info.description == 'string' ? (
				<Typography variant={'body1'}>{info.description}</Typography>
			) : (
				info.description
			)}
			<div className={classes.content}>{children}</div>
		</div>
	);
};
