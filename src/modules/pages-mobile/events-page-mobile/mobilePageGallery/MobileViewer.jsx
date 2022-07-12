import React from 'react';

import './mobile_viewer.scss';
import closebtn from '../../../../assets/icons/artist-page-close.svg';
import MobileViewerSlider from './mobile_viewer_slider/MobileViewerSlider';

function MobilePageSlider(params) {
	return (
		<div className="mobileviewer" style={{ overflow: 'hidden' }}>
			<MobileViewerSlider options={params.options.data} />
			<div className="mobileviewer__title">{params.options.data.name}</div>
			<div
				className="mobileviewer__btn"
				onClick={() => {
					params.close();
				}}
			>
				<img src={closebtn} alt="" />
			</div>
		</div>
	);
}

export default MobilePageSlider;
