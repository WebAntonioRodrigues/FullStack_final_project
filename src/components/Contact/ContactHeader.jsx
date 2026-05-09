
import '../../styles/Contact/ContactHeader.css';

function ContactHeader(){
    
    return (
			<section className='ContactHeader-section'>
				<div className='ContactHeader-header-container'>
					<div className='ContactHeader-header-top-container'>
						<p className='ContactHeader-txt-top'>CONCIERGE SERVICES</p>
					</div>
					<div className='ContactHeader-header-middle-container'>
						<p className='ContactHeader-txt-middle'>
							REQUEST A <br /> <span className='ContactHeader-txt-middle-span'>PROPOSAL.</span>
						</p>
					</div>
					<div className='ContactHeader-header-bottom-container'>
						<p className='ContactHeader-txt-bottom'>Our automotive specialists are dedicated to securing your vision. Share your requirements for a bespoke acquisition plan.</p>
					</div>
				</div>

				<div className='ContactHeader-number-container'>
					<div className='ContactHeader-number-txt-container'>
						<p className='ContactHeader-number-txt'>WHATSAPP DIRECT</p>
					</div>
					<div className='ContactHeader-number-info-container'>
						<p className='ContactHeader-number-info'>+1 800 LUXURY</p>
					</div>
				</div>
			</section>
		);
}

export default ContactHeader;