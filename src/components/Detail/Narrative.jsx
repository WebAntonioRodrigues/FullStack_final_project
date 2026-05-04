import '../../styles/Detail/Narrative.css';
import '../../styles/Style.css';
import Form from './Form';

function Narrative({ car }) {
	if (!car) return null;

    return (
			<section className='Narrative-section'>
				<div className='descrip-container'>
					<div className='descrip-title-container'>
						<p className='descrip-title'>THE ENGINEERING OF EMOTION</p>
					</div>
					<div className='descrip-return-container'>
						<p className='descrip-txt'>{car.descricao}</p>
					</div>
					<div className='descrip-bottom-container'>
						<div className='descrip-bottom-subcontainer'>
							<p className='descrip-item'>Transmission</p>
							<p className='descrip-item-value'>{car.caixa}</p>
						</div>
						<div className='descrip-bottom-subcontainer'>
							<p className='descrip-item'>Drive Train</p>
							<p className='descrip-item-value'>Rear-Wheel Drive</p>
						</div>
						<div className='descrip-bottom-subcontainer'>
							<p className='descrip-item'>Engine Location</p>
							<p className='descrip-item-value'>Rear Mounted</p>
						</div>
						<div className='descrip-bottom-subcontainer'>
							<p className='descrip-item'>Fuel Type</p>
							<p className='descrip-item-value'>{car.combustivel}</p>
						</div>
					</div>
				</div>
				
            <Form className="form"></Form>
            
			</section>
		);
}

export default Narrative;
