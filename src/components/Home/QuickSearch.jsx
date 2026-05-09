import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Comun/Button';
import '../../styles/Home/QuickSearch.css';

function QuickSearch() {
	const navigate = useNavigate();

	const [marca, setMarca] = useState('all');
	const [maxPreco, setMaxPreco] = useState('null');

	function handleFilterResults() {
		navigate(`/Catalog?marca=${marca}&maxPreco=${maxPreco}`);
	}

	return (
		<div className='QuickSearch-container'>
			<div className='QuickSearch-header'>
				<p className='QuickSearch-title'>Quick Search</p>
			</div>

			<div className='QuickSearch-field'>
				<p className='QuickSearch-txt'>Brand</p>
				<select className='QuickSearch-select' value={marca} onChange={e => setMarca(e.target.value)}>
					<option value='all'>All Manufacturers</option>
					<option value='BMW'>BMW</option>
					<option value='Mercedes-Benz'>Mercedes-Benz</option>
					<option value='Audi'>Audi</option>
					<option value='Renault'>Renault</option>
				</select>
			</div>

			<div className='QuickSearch-field'>
				<p className='QuickSearch-txt'>Price Range</p>
				<select className='QuickSearch-select' value={maxPreco} onChange={e => setMaxPreco(e.target.value)}>
					<option value='null'>All Prices</option>
					<option value='10000'>Under €10k</option>
					<option value='25000'>€10k - €25k</option>
					<option value='50000'>€25k - €50k</option>
					<option value='100000'>€50k+</option>
				</select>
			</div>

			<Button className='btn-ContactForm-primary' text='Filter Results' textClassName='text-btn-primary' onClick={handleFilterResults} />
		</div>
	);
}

export default QuickSearch;
