function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-mega-container'>
				<div className='footer-container'>
					<div className='footer-logo'>
						<h2>AutoLux</h2>
					</div>
					<div className='footer-text-content'>
						<p className='footer-text'>
							Defining the pinnacle of automotive
							<br />
							luxury and performance since 1998.
						</p>
					</div>
				</div>
				<div className='footer-container'>
					<h4 className='footer-title'>NAVIGATION</h4>
					<ul className='footer-list'>
						<li>Home</li>
						<li>Catalog</li>
						<li>About Us</li>
					</ul>
				</div>
				<div className='footer-container'>
					<h4 className='footer-title'>SUPPORT</h4>
					<ul className='footer-list'>
						<li>Privacy Policy</li>
						<li>Terms of Service</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className='footer-container'>
					<h4 className='footer-title'>NEWSLETTER</h4>
					<div className='footer-newsletter-text'>
						<p className='footer-text'>Get the latest updates on new arrivals.</p>
					</div>

					<div className='newsletter'>
						<input type='email' placeholder='Email Address' className='newsletter-input' />
						<div className='newsletter-btn'>
							<button className='newsletter-btn-icone'>→</button>
						</div>
					</div>
				</div>
			</div>
			<div className='horizontal-border'>
				<div className='horizontal-border-container'>
					<p className='horizontal-border-text'>© 2024 AutoLux Global. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
