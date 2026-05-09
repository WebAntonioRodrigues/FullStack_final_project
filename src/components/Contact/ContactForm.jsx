import { useState } from 'react';
import Button from '../Comun/Button';
import '../../styles/Contact/ContactForm.css';

function ContactForm() {
	const [interests, setInterests] = useState([]);

	const vehicles = ['Série 3 320d', 'Classe A 180d', 'Golf 8 1.5 TSI'];

	function vehicleButtons() {
		return vehicles.map(res => {
			const isActive = interests.includes(res);
			const vehicleBtnClass = isActive ? 'ContactForm-btn-active' : 'ContactForm-btn';

			function handleClick() {
				if (isActive) {
					setInterests(prev => prev.filter(i => i !== res));
				} else {
					setInterests(prev => [...prev, res]);
				}
			}

			return (
				<button key={res} className={vehicleBtnClass} onClick={handleClick}>
					{res}
				</button>
			);
		});
	}

	return (
		<div className='ContactForm-container'>
			<div className='ContactForm-data'>
				<div className='ContactForm-field'>
					<p className='ContactForm-txt'>Full Identity</p>
					<input type='text' placeholder='Johnathan Sterling' className='ContactForm-input' />
				</div>
				<div className='ContactForm-field'>
					<p className='ContactForm-txt'>Digital Correspondence</p>
					<input type='email' placeholder='client@private.com' className='ContactForm-input' />
				</div>
			</div>

			<div className='ContactForm-data'>
				<div className='ContactForm-field'>
					<p className='ContactForm-txt'>Direct Line</p>
					<input type='tel' placeholder='+1 555 0123' className='ContactForm-input' />
				</div>
				<div className='ContactForm-field'>
					<p className='ContactForm-txt'>Subject</p>
					<select className='ContactForm-select'>
						<option>Private Acquisition</option>
						<option>Test Drive</option>
						<option>Financing</option>
						<option>Trade-In</option>
						<option>General Inquiry</option>
					</select>
				</div>
			</div>

			<div className='ContactForm-field'>
				<p className='ContactForm-txt'>Interests (Select Vehicles)</p>
				<div className='ContactForm-cars'>{vehicleButtons()}</div>
			</div>

			<div className='ContactForm-field'>
				<p className='ContactForm-txt'>Bespoke Requirements</p>
				<textarea placeholder='Detail your preferences for performance, color palette, and delivery logistics...' className='ContactForm-textarea' />
			</div>
			<div className='ContactForm-btn'>
				<Button className='btn-ContactForm-primary' text='Send proposal request' textClassName='text-btn-pricing-primary' />
			</div>
		</div>
	);
}

export default ContactForm;
