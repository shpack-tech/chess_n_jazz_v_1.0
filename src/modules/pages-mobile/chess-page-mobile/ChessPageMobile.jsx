import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import MobileChessEvent from './mobile_chess_event/MobileChessEvent';
import axios from 'axios';
import imgchess from '../../../assets/images/heap/2018-07-07_15-13-37_AG (1) 1.png';
import imgautor from '../../../assets/images/heap/2019-07-26_19-20-39_GORSHENIN 1.png';
import asterisk from '../../../assets/icons/star.svg';
import slider_1 from '../../../assets/images/chess/chess2.JPG';
import slider_2 from '../../../assets/images/chess/chess3.jpeg';
import slider_3 from '../../../assets/images/chess/chess4.JPG';
import slider_4 from '../../../assets/images/chess/chess5.JPG';

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
