import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

interface Props {
	isRecipe: boolean;
	setIsReceipe: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SwitchButtons({ isRecipe, setIsReceipe }: Props) {
	return (
		<ButtonGroup style={{ marginBlock: '1em' }}>
			<Button color={'primary'} variant={isRecipe ? 'outlined' : 'contained'} onClick={() => setIsReceipe(false)}>
				{'Stuff'}
			</Button>
			<Button color={'primary'} variant={isRecipe ? 'contained' : 'outlined'} onClick={() => setIsReceipe(true)}>
				{'Recipe'}
			</Button>
		</ButtonGroup>
	);
}
