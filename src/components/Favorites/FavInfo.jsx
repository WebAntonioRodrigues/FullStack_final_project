import { Link } from "react-router-dom";
import Button from "../Comun/Button";
import "../../styles/Favorites/FavInfo.css";


function FavInfo() {

    return (
			<section className='FavInfo-section'>
				<div className='FavInfo-container'>
					<div className='FavInfo-title'>
						<p className='FavInfo-txt'>
							Ready to transition from <br /> favorites to ownership?
						</p>
					</div>
					<div className='FavInfo-txt-container'>
						<p className='FavInfo-txt-desc'>Our concierge team is standing by to arrange a private viewing or technical consultation for any vehicle in your collection.</p>
					</div>
					<div className="FavInfo-btn-container">
						<Link className='link' to='/Contact'>
							<Button className='btn-pricing-primary' text='RESERVE NOW' textClassName='text-btn-pricing-primary' />
						</Link>
						<Button className='btn-pricing-secondary' text='Download Brochure' textClassName='text-btn-pricing-secondary' />
					</div>
				</div>
            <div className='FavInfo-container-img'>
               
                </div>
			</section>
		);

}

export default FavInfo;