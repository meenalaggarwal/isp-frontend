import React from 'react';

// import Room from './Room/Room';
import './SubMenu.css';
import homeLogo from '../../assests/icons8-home-page-32.png';

const submenu = (props) => {
	return (
		<div>
			<div className="home-container">
				<img src={homeLogo} alt="homeLogo" className="home-logo"/>
				<span className="home-text">Home</span>
			</div>
			<input type="text" placeholder="    Search (by ISP name, price, rating)" className="search-box" 
			onKeyPress={props.getISPsDataWithInputSearch}/>
			
		</div>
	)
}

export default submenu;