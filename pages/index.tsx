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
				<title>{'Camping Menu | Hsinchu 2021'}</title>
				<meta name="description" content="The camping recipe menu in Hsinchu 2021" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			{recipes.map((recipe, index) => (
				<Recipe {...recipe} key={index} />
			))}
		</Container>
	);
};

export default Home;
