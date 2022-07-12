import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
function MPSlider(params) {
	const [slides, setSlides] = useState([]);
	const [opacityCounter, setOpacityCounter] = useState(0);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/iopsfdmni.php').then((resp) => {
			const array = [];
			resp.data.forEach((el) => {
				array.push(el.slide);
			});
			setSlides(array);
		});
	}, []);

	useEffect(() => {
		setTimeout(() => {
			opacityCounter > slides.length - 2 ? setOpacityCounter(0) : setOpacityCounter(opacityCounter + 1);
		}, 2500);
	});

	if (slides.length > 0 && !params.child) {
		return slides.map((el, i) => {
			return <img src={el} key={i} style={opacityCounter === i ? { opacity: 1 } : { opacity: 0 }} alt="" />;
		});
	} else {
		return (
			<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<div className="chess-icon"></div>
			</div>
		);
	}
}
export default MPSlider;
