import React from 'react';

import './Sort.css';
import sortLogo from '../../assests/icons8-sort-15.png';

const sort = (props) => {
	return (
		<div className="sort">
			<span className="sort-logo">
				<img src={sortLogo} alt="sortLogo" />
				Sort by
			</span>
			<div className="sort-input">
				<input type="radio" id="price" name="sort" value="price" onChange={props.onPriceChanged}/>
				<label for="radio">Price</label>
				<input type="radio" id="rating" name="sort" value="rating" onChange={props.onRateChanged}/>
				<label for="rating">Rating</label>
			</div>
		</div>
	)
}

export default sort;