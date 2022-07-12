import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './page_styles/chess-events.scss';
import './page_styles/chess-lectures-button.scss';
import './page_styles/chess-marquee.scss';
import './page_styles/chess.scss';

import arrow from '../../../assets/icons/arrow-next.svg';
import sponsor from '../../../assets/images/heap/chess_village_sponsor.png';
import chess_img1 from '../../../assets/images/heap/chess_img1.JPG';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import ChessSlider from './chess_slider/ChessSlider';
import ChessEvents from './chess_events/ChessEvents';

import { PageContext } from '../../../PageContext';
import { t } from 'i18next';

function ChessPage(params) {
	const [image, setImage] = useState(0);
	const [pageContext, setPageContext] = useContext(PageContext);
	const [events, setEvents] = useState([]);
	const [sponsor, setSponsor] = useState('');

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/3123cvs.php').then((resp) => {
			setEvents(resp.data);
		});
	}, []);
	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/777.php').then((resp) => {
			if (resp.data.length > 0) {
				setSponsor(resp.data[0].logo);
			}
		});
	}, []);

	const { t, i18n } = useTranslation();

	function changeImage(index) {
		setImage(index);
	}

	return (
		<div className={params.child === true ? 'container chess-cont child' : 'container chess-cont'}>
			<div className="chess-content">
				<div className="chess-content__top">
					<div className="jazz-marquee-w" style={{ paddingTop: '40px' }}>
						<div className="jazz-marquee chess-marquee">
							<div
								className={
									params.child && i18n.translator.language == 'en'
										? 'chess_title-en title_cnj'
										: params.child && i18n.translator.language == 'ru'
										? 'chess_title title_cnj'
										: i18n.translator.language == 'en'
										? 'chess_title-en title_cnj initialized'
										: 'title_cnj initialized chess_title'
								}
								style={{ color: '#000', padding: '5px 0' }}
							>
								{t('chess')} {t('chess')}&nbsp;
							</div>
						</div>
					</div>

					<div className="chess-right">
						<BtnTicket />
						{sponsor !== '' && !params.child ? (
							<div
								className="sponsor-display"
								onClick={() => window.open('https://tochka.com/?utm_source=pr&utm_medium=content&utm_campaign=chess-and-jazz&utm_term=logo')}
								style={{
									fontSize: '16px',
									color: 'color: #727272',
									width: '250px',
									textAlign: 'right',
									position: 'absolute',
									right: '30px',
									cursor: 'pointer',
									top: '170px',
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<span style={{ textAlign: 'left', marginBottom: '10px' }}>{t('sponsor')}</span>
								<img src={sponsor} alt="" />
							</div>
						) : (
							''
						)}
					</div>
				</div>

				<div className="chess-content__bot">
					{events.length > 0 && !params.child ? (
						<div className="chess-table" style={{ height: '470px' }}>
							<div className="chess-picture">
								<ChessSlider active={image} />
							</div>
							<div className="chess-events">{events.length > 0 ? <ChessEvents events={events} changeImage={changeImage} /> : ''}</div>
						</div>
					) : (
						<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<div className="chess-icon"></div>
						</div>
					)}
					<div
						className="lectures-button2"
						onClick={() => {
							pageContext.swipeForward();
						}}
					>
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">{t('events')}</div>
						<img src={arrow} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChessPage;
