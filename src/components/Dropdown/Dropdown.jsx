import React, { useState } from 'react';
import Select from 'react-select';
import 'tailwindcss/tailwind.css';

const options = [
	{ value: 'usa', label: '🇺🇸 United States' },
	{ value: 'canada', label: '🇨🇦 Canada' },
	{ value: 'uk', label: '🇬🇧 United Kingdom' },
	// Добавьте другие флаги и страны по вашему выбору
];

const Dropdown = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	
	const handleChange = (selected) => {
		setSelectedOption(selected);
	};
	
	return (
		<div className="w-64">
			<Select
				options={options}
				value={selectedOption}
				onChange={handleChange}
				isSearchable={false}
				placeholder="Select a country"
				className="mt-1"
			/>
			{selectedOption && (
				<div className="mt-2">
					<span className="mr-2">{selectedOption.label}</span>
					<span>{selectedOption.value}</span>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
