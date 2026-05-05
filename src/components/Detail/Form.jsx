import '../../styles/Detail/Form.css';
import '../../styles/Style.css';
import Agent from '../../assets/Detail/Agent.png';
import { Link } from 'react-router-dom';
import Button from '../Comun/Button';
import '../../styles/Comun/Buttons.css';

function Form() {
	return (
		<div className='Form-card'>
			<div className='Form-agent'>
				<img className='Form-agent-img' src={Agent} alt='Agent' />
				<div>
					<h3 className='Form-agent-name'>Alexander Thorne</h3>
					<p className='Form-agent-info'>Senior Vehicle Specialist</p>
				</div>
			</div>

			<div className='Form-field-container'>
				<div className='Form-field'>
					<p className='Form-txt'>Full Name</p>
					<input className='Form-input' type='text' placeholder='John Doe' />
				</div>

				<div className='Form-field'>
					<p className='Form-txt'>Email Address</p>
					<input className='Form-input' type='email' placeholder='j.doe@example.com' />
				</div>

				<div className='Form-field'>
					<p className='Form-txt'>Inquiry Type</p>
					<select className='Form-select'>
						<option>General Inquiry</option>
						<option>Test Drive</option>
						<option>Financing</option>
					</select>
				</div>
			</div>
			
			<div className='form-btn'>
				<Link className='link' to='/Contact'>
					<Button className='btn-form-primary' text='SEND ENQUIRY' textClassName='text-btn-pricing-primary'></Button>
				</Link>
			</div>
			
			<p className='Form-info'>Typical Response Time: 2 Hours</p>
		</div>
	);
}

export default Form;
