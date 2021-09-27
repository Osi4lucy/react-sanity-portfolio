import React from 'react';
import bgImage from '../images/bg-image.jpg';

const Home = () => {
	return (
		<main>
			<img
				src={bgImage}
				alt='brick wall background image'
				className='absolute object-cover w-full h-full'
			/>
			<section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
				<h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name sm:pt-28 px-2'>
					Hello there, I'am Osilamah
				</h1>
			</section>
		</main>
	);
};

export default Home;
