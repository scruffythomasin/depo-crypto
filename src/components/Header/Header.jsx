import React from 'react';
import DepoLogo from '../../assets/logo.svg?react'
import Button from "../Buttons/Button/Button.jsx";

const Header = () => {
	return (
		<div className='px-6 py-5 bg-white flex items-center justify-between'>
			<div className="column left flex gap-3">
				<a href="#">
					<DepoLogo className='h-8 w-auto' />
				</a>
				<div className="w-px h-8 bg-zinc-300 mx-6"/>
				
				<div className='text-gray-500 font-medium flex gap-10 items-center'>
					<a href="#">О нас</a>
					<a href="#">Как это работает</a>
					<a href="#">Где работаем</a>
					<a href="#">FAQ</a>
					<a href="#">Контакты</a>
				</div>
			</div>
			
			<div className="column right">
				<Button>Launch app</Button>
			</div>
		</div>
	);
};

export default Header;