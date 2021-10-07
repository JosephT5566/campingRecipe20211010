import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const useStyle = makeStyles(() => ({
	switchButtons: {
		top: '0.5em',
	},
	switchButton: {},
}));

interface SwitchButtonsProps {
	isTrue: boolean;
	setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
	trueText: string;
	falseText: string;
}

export const SwitchButtons = ({ isTrue, setIsTrue, trueText, falseText }: SwitchButtonsProps) => {
	const classes = useStyle();

	return (
		<ButtonGroup className={classes.switchButtons}>
			<Button color={'primary'} variant={isTrue ? 'outlined' : 'contained'} onClick={() => setIsTrue(false)}>
				{falseText}
			</Button>
			<Button color={'primary'} variant={isTrue ? 'contained' : 'outlined'} onClick={() => setIsTrue(true)}>
				{trueText}
			</Button>
		</ButtonGroup>
	);
};

interface SwitchButtonProps {
	isTrue: boolean;
	setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SwitchButton = ({ isTrue, setIsTrue }: SwitchButtonProps) => {
	const classes = useStyle();

	return (
		<Button
			className={classes.switchButton}
			variant={isTrue ? 'contained' : 'outlined'}
			color={'secondary'}
			onClick={() => {
				setIsTrue((prev) => !prev);
			}}
		>
			<RestaurantMenuIcon />
		</Button>
	);
};
