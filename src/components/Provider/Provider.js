import React from 'react';
import Pdf from "react-to-pdf";

import './Provider.css';
import wifiIcon from '../../assests/icons8-wi-fi-15.png';
import phoneIcon from '../../assests/icons8-phone-15.png';
import emailIcon from '../../assests/icons8-email-open-15.png';
import priceIcon from '../../assests/icons8-currency-exchange-15.png';

import linkIcon from '../../assests/icons8-link-15.png';
import downloadIcon from '../../assests/icons8-download-from-cloud-15.png';

import StarRatings from 'react-star-ratings';

const ref = React.createRef();

const provider = (props) => {
	const link = () => {
		window.open(props.providerDetails.url, "_blank");
	};

	return (
		Object.keys(props.providerDetails).length ?
		<div ref={ref}>
			<div className="provider-metadata">
				<span className="name">{props.providerDetails.name}</span>
				<span className="wifi">
					<img src={wifiIcon} alt="wifiIcon" className="wifi-icon"/>
					Max Speed: {props.providerDetails.max_speed}
				</span>
				<span className="phone">
					<img src={phoneIcon} alt="phoneIcon" className="phone-icon"/>
					{props.providerDetails.contact_nummber}
				</span>
				<span className="email">
					<img src={emailIcon} alt="emailIcon" className="email-icon"/>
					{props.providerDetails.email}
				</span>
				<span className="price">
					<img src={priceIcon} alt="priceIcon" className="price-icon"/>
					Min Plain: {props.providerDetails.lowest_price} /-
				</span>
			</div>
			<div className="rating-block">
				<b className="rating">Rating:  </b>
				<StarRatings rating={parseFloat(props.providerDetails.rating)} 
				starRatedColor="#e1ad01" starDimension="20px" 
				starSpacing="1px" numberOfStars={5} name='rating' />
			</div>
			<div className="description">
				{props.providerDetails.description}
			</div>
			<div className="provider-action">
				<button className="provider-link" onClick={link}>
					<img src={linkIcon} alt="linkIcon" className="link-icon"/>
					Link
				</button>
				<Pdf targetRef={ref} filename="provider-details.pdf">
					{({ toPdf }) => <div className="provider-download" onClick={toPdf}>
							<img src={downloadIcon} alt="downloadIcon" className="download-icon"/>
							Download
						</div>
					}
      			</Pdf>
			</div>
		</div> :
		null
	);
}

export default provider;