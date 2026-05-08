import { Link } from 'react-router-dom';
import '../../styles/Comun/Footer.css';
import '../../styles/Style.css';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-mega-container'>
				<div className='footer-container'>
					<div>
						<h2 className='footer-logo'>AutoLux</h2>
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
						<Link to={"/"}>
							<li>Home</li>
						</Link>

						<Link to={"/catalog"}>
							<li>Catalog</li>
						</Link>
						<Link>
							<li>About Us</li>
						</Link>
					</ul>
				</div>
				<div className='footer-container'>
					<h4 className='footer-title'>SUPPORT</h4>
					<ul className='footer-list'>
						<Link>
							<li>Privacy Policy</li>
						</Link>
						<Link>
							<li>Terms of Service</li>
						</Link>
						<Link to={'/contact'}>
							<li>Contact</li>
						</Link>
					</ul>
				</div>
				<div className='footer-container'>
					<h4 className='footer-title'>NEWSLETTER</h4>
					<div className='footer-newsletter-text'>
						<p className='footer-text'>Get the latest updates on new arrivals.</p>
					</div>

					<div className='newsletter'>
						<input type='email' placeholder='Email Address' className='newsletter-input' />
						<button className='newsletter-btn'>
							<p className='newsletter-btn-icone'>→</p>
						</button>
					</div>
				</div>
			</div>

			<div className='horizontal-border-container'>
				<p className='horizontal-border-text'>© 2024 AutoLux Global. All Rights Reserved. By António Silva Rodrigues</p>
			</div>
		</footer>
	);
}

export default Footer;
