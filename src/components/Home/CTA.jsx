import { Link } from 'react-router-dom';
import '../../styles/Home/CTA.css';
import '../../styles/Style.css';
import '../../styles/Comun/Buttons.css';
import Button from '../Comun/Button';

function CTA() {
	return (
		<section>
			<div></div>
			<div className='CTA-heading-container'>
				<h1>
					YOUR JOURNEY TO <br />
					<span>EXCELLENCE</span> BEGINS HERE
				</h1>
			</div>
			<div className='CTA-text-container'>
				<p>Browse our full inventory of world-class automotive engineering. From rare classics to modern hypercars.</p>
			</div>
			<div className='CTA-btn-container'>
				<div>
					<Link className='link' to='/Catalog'>
						<Button className='btn-primary' text='ACCESS INVENTORY' textClassName='text-btn-primary'></Button>
					</Link>
				</div>
				<div>
					<Link className='link' to='/Contact'>
						<Button className='btn-secondary' text='TALK TO A SPECIALIST' textClassName='text-btn-secondary'></Button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default CTA;
