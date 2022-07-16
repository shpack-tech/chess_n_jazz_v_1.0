import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import MobileChessEvent from './mobile_chess_event/MobileChessEvent';
import axios from 'axios';

import './chees_page_mobile.scss';

import { t } from 'i18next';

function ChessPageMobile() {
	const { t, i18n } = useTranslation();
	const [events, setEvents] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/3123cvs.php').then((resp) => {
			setEvents(resp.data);
		});
	}, []);
	return (
		<div className="mobile-container mobile-container_white" id="chess">
			<div className="m-content">
				<div className="chess_box__title-inner r-line">
					<span style={{ display: 'block' }} className={i18n.language === 'ru' ? 'chess_box__title' : 'chess_box__title-en'}>
						{t('chess')} {t('chess')}&nbsp;
					</span>
				</div>

				<div className="chess_acordion_m">
					{events.map((el, i) => {
						return <MobileChessEvent key={i} el={el} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default ChessPageMobile;
