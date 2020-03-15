import React from 'react';

import './Providers.css';
import providerIcon from '../../assests/icons8-database-20.png';

const providers = (props) => {
	var prvds = props.providers.map(provider => {
		return (
			<div className="provider" onClick={() => props.getProviderDetails(provider.id)} key={provider.id}>
				<img src={providerIcon} alt="providerIcon" className="provider-icon"/>
				<span className="provider-name">{provider.name}</span>
				<span className="provider-price">Rs. {provider.lowest_price}</span>
			</div>
		)
	});
	return (
		<div>
			{prvds}
		</div>
	);
}

export default providers;