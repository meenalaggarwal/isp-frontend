import React from 'react';
import { BrowserRouter as Route} from 'react-router-dom';

import ServicesRequester from '../../containers/ServicesRequester/ServicesRequester';
import './Main.css';

import SubMenu from '../SubMenu/SubMenu';
import Provider from '../Provider/Provider';
import Sort from '../Sort/Sort';

const main = (props) => {
	return (
		<div className="main">
			<div className="lsection">
				<SubMenu getISPsDataWithInputSearch={props.getISPsDataWithInputSearch}></SubMenu>
				<Route exact path= "/">
					<ServicesRequester 
			          providers={props.providers}
			          getISPDetails={props.getISPDetails}
			          getISPsData={props.getISPsData}></ServicesRequester>
				</Route>
				<Sort
					onPriceChanged={props.onPriceChanged}
					onRateChanged={props.onRateChanged}></Sort>
			</div>
			<div className="rsection">
				<Provider providerDetails={props.providerDetails}></Provider>
			</div>
		</div>
	)
}

export default main;