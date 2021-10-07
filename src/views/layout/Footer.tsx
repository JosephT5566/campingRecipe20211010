import React from 'react';
import { styled } from '@material-ui/core/styles';

const StyledFooter = styled('div')(({ theme }) => ({
	minHeight: theme.layout.footer.height,
	backgroundColor: '#405c80',
	display: 'grid',
	placeItems: 'center',
	padding: '2rem',
}));

export default function Footer() {
	return <StyledFooter>{'123'}</StyledFooter>;
}
