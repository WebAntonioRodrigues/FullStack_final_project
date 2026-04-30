import '../../styles/Detail/Technical.css';

function Technical({ car }) {
	if (!car) return null;

	return (
		<section className='Technical-section'>
			<div className='Technical-title-container'>
				<div className='Technical-title-subcontainer'>
					<p className='Technical-title'>Technical Precision</p>
				</div>
				<div className='Technical-line'></div>
			</div>

			<div className='Technical-Specs-container'>
				<div className='Technical-Specs-subcontainer'>
					<div className='Technical-icon'>
						<svg className='icon' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2' />
						</svg>
					</div>
					<div className='Technical-data-container'>
						<div className='Technical-data'>
							<p className='data'>{car.potencia} CV</p>
						</div>
						<div className='Technical-data-title'>
							<p className='title'>MAXIMUM POWER</p>
						</div>
					</div>
				</div>
				<div className='Technical-Specs-subcontainer'>
					<div className='Technical-icon'>
						<svg className='icon' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<circle cx='12' cy='12' r='10' />
							<path d='M12 8v4l2 2' />
						</svg>
					</div>
					<div className='Technical-data-container'>
						<div className='Technical-data'>
							<p className='data'>{car.km} KM</p>
						</div>
						<div className='Technical-data-title'>
							<p className='title'>traveled</p>
						</div>
					</div>
				</div>
				<div className='Technical-Specs-subcontainer'>
					<div className='Technical-icon'>
						<svg className='icon' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<circle cx='12' cy='13' r='8' />
							<path d='M12 9v4l2 2' />
							<path d='M9 3h6' />
							<path d='M12 3v2' />
						</svg>
					</div>
					<div className='Technical-data-container'>
						<div className='Technical-data'>
							<p className='data'>296 KM/H</p>
						</div>
						<div className='Technical-data-title'>
							<p className='title'>TOP Speed</p>
						</div>
					</div>
				</div>
				<div className='Technical-Specs-subcontainer'>
					<div className='Technical-icon'>
						<svg className='icon' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<circle cx='12' cy='12' r='3' />
							<path d='M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12' />
						</svg>
					</div>
					<div className='Technical-data-container'>
						<div className='Technical-data'>
							<p className='data'>465 NM</p>
						</div>
						<div className='Technical-data-title'>
							<p className='title'>peak torque</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Technical;
