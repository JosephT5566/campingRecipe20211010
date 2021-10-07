import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../src/components/based/Container';
import Recipe from '../src/components/shared/Recipe';

import { recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8 } from '../src/constants/recipes';
import Hero from '../src/views/payment/Hero';

const Home: NextPage = () => {
	const recipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8];
	return (
		<Container>
			<Head>
				<title>Camping Menu</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			{recipes.map((recipe) => (
				<Recipe {...recipe} />
			))}
		</Container>
	);
};

export default Home;
