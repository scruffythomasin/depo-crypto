import React from 'react';

const Button = ({ children }) => {
	return (
		<button className='bg-blue-500 max-w-fit text-white h-14 px-6 py-3 rounded-lg'>{ children }</button>
	);
};

export default Button;