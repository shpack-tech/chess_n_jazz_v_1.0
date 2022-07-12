import React, { useState, useEffect } from 'react';
import itemlogo1 from '../../../assets/images/partners/gastronomyitem-logo-1.png';
import itemlogo2 from '../../../assets/images/partners/gastronomyitem-logo-2.png';
import itemlogo3 from '../../../assets/images/partners/gastronomyitem-logo-3.png';
import itemlogo4 from '../../../assets/images/partners/gastronomyitem-logo-4.png';
import itemlogo5 from '../../../assets/images/partners/gastronomyitem-logo-5.png';
import itemlogo6 from '../../../assets/images/partners/gastronomyitem-logo-6.png';
import itemlogo7 from '../../../assets/images/partners/gastronomyitem-logo-7.png';
import GastronomyItem from '../../pages/gastromony/gastronomy_item/GastronomyItem';
import './mobile_gastronomy.scss';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import axios from 'axios';

function MobileGastronomy() {
	const { t, i18n } = useTranslation();
	const [limit, setLimit] = useState(5);
	const [items, setItems] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');

		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/p;plppkovf.php').then((resp) => {
			setItems(resp.data);
		});
	}, []);
	return (
		<div className="mobilegastronomy-g" id="gastronomy">
			<div className="g_box__title-inner r-line">
				<span style={{ display: 'block' }} className={i18n.language === 'ru' ? 'g_box__title' : 'g_box__title-en'}>
					{t('gastronomy')} {t('gastronomy')}&nbsp;
				</span>
			</div>
			<div className="gastronomybox__grid">
				{items.map((el, i) => {
					if (i < limit) {
						return <GastronomyItem key={i} title={el.name} text={el.descr} img={el.logo} />;
					}
				})}
			</div>
			<div className="mobilegastronomy-g__btn">
				<button
					onClick={() => {
						limit === 5 ? setLimit(items.length - 1) : setLimit(5);
					}}
				>
					{limit === 5 ? t('moreBtn') + ' (' + items.length + ')' : t('lessBtn')}
				</button>
			</div>
		</div>
	);
}

export default MobileGastronomy;
