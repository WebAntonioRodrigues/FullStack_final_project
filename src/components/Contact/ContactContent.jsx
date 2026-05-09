import ContactForm from "./ContactForm";
import "../../styles/Contact/ContactContent.css"


function ContactContent() {
    return (
			<section className='ContactContent-container'>
				<div className='ContactContent-form-container'>
					<ContactForm></ContactForm>
				</div>
				<div className='ContactContent-info-container'>
					<div className='ContactContent-info-map'>
						<div className='ContactContent-info-map-img'></div>
						<div className='ContactContent-info'>
							<div className='ContactContent-address-title'>
								<p>THE SHOWROOM</p>
							</div>
							<div className='ContactContent-address-txt'>
								<p>
									12 Mayfair Grand Mews <br /> London, W1K 3QH <br /> United Kingdom
								</p>
							</div>
							<div className='ContactContent-address'>
								<p>GET DIRECTIONS • VIRTUAL TOUR</p>
							</div>
						</div>
					</div>

					<div className='ContactContent-bottom-info'>
						<div className='ContactContent-bottom-box'>
							<p className='ContactContent-bottom'>INQUIRY RESPONSE</p>
							<p className='ContactContent-bottom-txt'>Within 2 Hours</p>
						</div>
						<div className='ContactContent-bottom-box'>
							<p className='ContactContent-bottom'>EMAIL ENQUIRIES</p>
							<p className='ContactContent-bottom-txt'>concierge@autolux.com</p>
						</div>
					</div>
				</div>
			</section>
		);
}

export default ContactContent;