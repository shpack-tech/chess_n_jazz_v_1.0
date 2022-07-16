import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import arrow from '../../../assets/icons/arrow-next.svg';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import EventBLock from './event_block/EventBlock';

import { PageContext } from '../../../PageContext';

import './events.scss';

import { t } from 'i18next';

function EventsPage(params) {
	const { t, i18n } = useTranslation();

	const [pageContext, setPageContext] = useContext(PageContext);
	const [eventYear, setEventYear] = useState('');
	const [allEvents, setAllEvents] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/00kk.php').then((resp) => {
			setAllEvents(resp.data);
			const helper = [];
			const all_events = [];
			resp.data.forEach((el) => {
				if (!helper.includes(el.cat)) {
					helper.push(el.cat);
				}
			});
			for (let i = 0; i < helper.length; i++) {
				resp.data.forEach((el) => {
					if (helper[i] === el.cat) {
						all_events.push({ tab: helper[i], data: el });
					}
				});
			}

			setAllEvents(all_events);
			setEventYear(all_events[0].tab);
		});
	}, []);
	const tab_helper = [];

	return (
		<div className={params.child === true ? 'container events-cont child' : 'container events-cont'}>
			<div className="events__container">
				<div className="gastronomybox__title-inner">
					<div
						className={
							params.child && i18n.translator.language == 'en'
								? 'gastronomybox__title  gastronomybox__title-en'
								: params.child && i18n.translator.language == 'ru'
								? 'gastronomybox__title'
								: i18n.translator.language == 'en'
								? ' gastronomybox__title-en gastronomybox__title initialized'
								: 'gastronomybox__title  initialized'
						}
					>
						{t('events')} {t('events')}&nbsp;
					</div>
				</div>
				{allEvents.length > 0 && !params.child ? (
					<div className="events__content">
						<div className="events__content-top">
							<div className="events__years">
								{allEvents.length > 0
									? allEvents.map((el, i) => {
											if (!tab_helper.includes(allEvents[i].tab)) {
												tab_helper.push(allEvents[i].tab);
												return (
													<div
														key={i}
														className={eventYear === allEvents[i].tab ? 'events__years-item active' : 'events__years-item'}
														onClick={() => {
															setEventYear(allEvents[i].tab);
														}}
													>
														{el.tab}
													</div>
												);
											}
									  })
									: ''}
							</div>
							<BtnTicket />
						</div>
						<div
							className="events__content-items"
							onMouseEnter={() => {
								pageContext.setContext('default');
							}}
							onMouseLeave={() => {
								pageContext.setContext('scroll');
							}}
						>
							{eventYear
								? allEvents.map((el, i) => {
										if (el.tab === eventYear) {
											return <EventBLock key={i} open_default={true} event_data={el.data} />;
										}
								  })
								: ''}
						</div>
					</div>
				) : (
					<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<div className="chess-icon"></div>
					</div>
				)}
				<div
					className="chess-button2"
					onClick={() => {
						pageContext.swipeForward();
					}}
				>
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events')}</div>
					<img src={arrow} alt="" />
				</div>
			</div>
		</div>
	);
}

export default EventsPage;
