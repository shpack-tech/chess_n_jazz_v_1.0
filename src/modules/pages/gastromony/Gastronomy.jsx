import React from 'react';
import GastronomyBox from './gastronomy-box/GastronomyBox';
import './gastronomy.scss';

function Gastronomy(params) {
	return (
		<div className="gastronomy">
			<div className="container">
				<div className="gastronomy__wrapper" style={{ width: 'calc(100% + 83px)' }}>
					<GastronomyBox child={params.child} />
				</div>
			</div>
		</div>
	);
}

export default Gastronomy;
