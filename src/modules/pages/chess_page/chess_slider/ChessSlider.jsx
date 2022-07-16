import React from 'react';
import slider_1 from '../../../../assets/images/chess/chess2.JPG';
import slider_2 from '../../../../assets/images/chess/chess3.jpeg';
import slider_3 from '../../../../assets/images/chess/chess4.JPG';
import slider_4 from '../../../../assets/images/chess/chess5.JPG';

const slides = [slider_1, slider_3, slider_2, slider_4];

export default function ChessSlider(active) {
	return slides.map((el, i) => {
		return <img src={el} width="100%" height="100%" key={i} style={active.active === i ? { opacity: 1 } : { opacity: 0 }} alt="" />;
	});
}
