import CarFilters from '../../Hooks/CarFilters';
import '../../styles/Catalog/AsideSearch.css';

function AsideSearch({ filters, setFilters }) {


	const handleMarca = e => {
		setFilters(prev => ({ ...prev, marca: e.target.value }));
	};

	const handlePreco = e => {
		setFilters(prev => ({ ...prev, maxPreco: Number(e.target.value) }));
	};

	const handleKm = value => {
		setFilters(prev => ({ ...prev, km: value }));
	};

	const handleCaixa = value => {
		setFilters(prev => ({ ...prev, caixa: value }));
	};

	const handleCombustivel = value => {
		setFilters(prev => ({
			...prev,
			combustivel: prev.combustivel.includes(value) ? prev.combustivel.filter(c => c !== value) : [...prev.combustivel, value],
		}));
	};

	const handleClear = () => {
		setFilters({
			search: '',
			marca: 'all',
			maxPreco: 2000000,
			km: null,
			caixa: null,
			combustivel: [],
		});
	};

	function formatPreco(val) {
		return `€${(val / 1000).toFixed(0)}K`;
	}

	const KM_Options = ['Under 20k', '20k - 50k', "50k+"];
	function KmButtons() {
		return KM_Options.map(res => {
			const isActive = filters.km === res;
			const buttonClass = isActive ? 'AsideSearch-btn-active' : 'AsideSearch-btn';

			function handleClick() {
				if (isActive) {
					handleKm(null);
				} else {
					handleKm(res);
				}
			}

			return (
				<button key={res} className={buttonClass} onClick={handleClick}>
					{res}
				</button>
			);
		});
	}

    const Gear_Options = ['Automática', 'Manual'];
    
    function gearButtons() {
        return Gear_Options.map(res => {
            const isActive = filters.caixa === res;
            const gearBtnClass = isActive ? 'AsideSearch-gear-btn-active' : 'AsideSearch-gear-btn';

            function handleClick() {
                if (isActive) {
                    handleCaixa(null);
                } else {
                    handleCaixa(res);      
                }
            }

            return (
                <button key={res} className={gearBtnClass} onClick={handleClick}>{ res}</button>
            )
       })
   }


    const Fuel_Options= ['Gasolina', 'Elétrico', 'Híbrido'];
    
    function fuelCheckBox() {
			return Fuel_Options.map(res => {
				const isChecked = filters.combustivel?.includes(res) ?? false;

				return (
					<label key={res} className='AsideSearch-fuel-item'>
						<input type='checkbox' className='AsideSearch-fuel-checkbox' checked={isChecked} onChange={() => handleCombustivel(res)} />
						{res}
					</label>
				);
			});
		}

	return (
		<div className='AsideSearch-container'>
			<div className='AsideSearch-subcontainer'>
				<div className='AsideSearch-title-container'>
					<p className='AsideSearch-title'>Filter By</p>
				</div>
				{/*Marcas*/}
				<div className='AsideSearch-Brand'>
					<p className='AsideSearch-txt'>Manufacturer</p>
					<div className='AsideSearch-select-container'>
						<select className='AsideSearch-select' value={filters.marca} onChange={handleMarca}>
							<option value='all'>All Brands</option>
							<option value='BMW'>BMW</option>
							<option value='Mercedes-Benz'>Mercedes-Benz</option>
							<option value='Audi'>Audi</option>
							<option value='Volkswagen'>Volkswagen</option>
							<option value='Peugeot'>Peugeot</option>
							<option value='Toyota'>Toyota</option>
							<option value='Volvo'>Volvo</option>
							<option value='Renault'>Renault</option>
							<option value='Tesla'>Tesla</option>
							<option value='SEAT'>SEAT</option>
						</select>
					</div>
				</div>
				{/*Preço*/}
				<div className='AsideSearch-price'>
					<p className='AsideSearch-txt'>Price Range</p>
					<input className='AsideSearch-range' type='range' min={15000} max={50000} step={500} value={filters.maxPreco} onChange={handlePreco} />
					<div className='AsideSearch-range-data'>
						<span>€15k</span>
						<span>{formatPreco(filters.maxPreco)}</span>
					</div>
				</div>
				{/*Kilometros*/}

				<div className='AsideSearch-KM'>
					<p className='AsideSearch-txt'>Mileage (km)</p>
					<div className='AsideSearch-KM-btn-container'>{KmButtons()}</div>
				</div>

				{/*Transmissão*/}

				<div className='AsideSearch-gear'>
					<p className='AsideSearch-txt'>Transmission</p>
					<div className='AsideSearch-gear-btn-container'>{gearButtons()}</div>
				</div>

				{/*combustivel*/}

				<div className='AsideSearch-fuel'>
					<p className='AsideSearch-txt'>fuel type</p>
					<div className='AsideSearch-fuel-container'>{fuelCheckBox()}</div>
				</div>
			</div>

			{/*CLEAR */}

			<div className='AsideSearch-btn-clear-container'>
				<button className='AsideSearch-btn-clear' onClick={handleClear}>
					CLEAR ALL FILTERS
				</button>
			</div>
		</div>
	);
}

export default AsideSearch;
