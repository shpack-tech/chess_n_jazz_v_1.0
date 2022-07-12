import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
function MPSlider() {
	const { t, i18n } = useTranslation();

	const [slides, setSlides] = useState([]);
	const [opacityCounter, setOpacityCounter] = useState(0);

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

	return slides.map((el, i) => {
		return <img src={el} key={i} style={opacityCounter === i ? { opacity: 1 } : { opacity: 0 }} alt="" />;
	});
}
export default MPSlider;
