import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './events_page_mobile.scss';

import MobilePageSlider from './mobilePageGallery/MobileViewer';

import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

import { t } from 'i18next';

function EventsPageMobile() {
	const { t, i18n } = useTranslation();

	const [year, setYear] = useState([]);
	const [decor, setDecor] = useState('');
	const [isCarousel, setIsCarousel] = useState(false);

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
			setYear(all_events);
			setDecor(all_events[0].tab);
		});
	}, []);

	const tab_helper = [];

	function closeCarousel() {
		setIsCarousel(false);
	}

	if (isCarousel) {
		return <MobilePageSlider close={closeCarousel} options={isCarousel} />;
	} else {
		return (
			<div className="mobile-container mobile-container_white" id="events">
				<div className="m-content">
					<div className="chess_box__title-inner r-line">
						<span style={{ display: 'block' }} className={i18n.language === 'ru' ? 'events_box__title' : 'events_box__title-en'}>
							{t('events')} {t('events')}&nbsp;
						</span>
					</div>

					<div className="m_events-swiper" style={{ margin: '0', width: 'calc(100vw - 32px)' }}>
						<div className="events-swiper-pagination">
							{allEvents.length > 0
								? allEvents.map((el, i) => {
										if (!tab_helper.includes(allEvents[i].tab)) {
											tab_helper.push(allEvents[i].tab);
											return (
												<div
													key={i}
													className={decor === allEvents[i].tab ? 'm_year-active' : 'm_year'}
													onClick={() => {
														setDecor(allEvents[i].tab);
													}}
												>
													{allEvents[i].tab}
												</div>
											);
										}
								  })
								: ''}
						</div>
					</div>
					<div className="event-container" style={{ margin: '0 16px 60px', width: 'calc(100vw - 32px)' }}>
						<Swiper style={{ height: 'auto' }} slidesPerView={1.05} spaceBetween={10}>
							{year.map((el, i) => {
								if (el.tab === decor) {
									const pics_arr = year[i].data.pics.split('*splitter*');
									if (pics_arr.length > 0) {
										pics_arr.pop();
									}
									return (
										<SwiperSlide key={i} style={{ textAlign: 'left' }}>
											<div className="event_element" key={i} style={{ height: '100%', width: '100%', background: '#f4f3f3' }}>
												<div className="event_element_pic">
													<div
														className="event_element_pic_btn"
														onClick={() => {
															setIsCarousel(el);
														}}
													>
														{' '}
													</div>
													<img
														style={{ width: '100%', height: '100%', maxHeight: '400px', objectFit: 'cover' }}
														loading="lazy"
														src={pics_arr[0]}
														alt=""
													/>
												</div>
												<div className="event_element_heder">{el.data.name}</div>
												<div className="event_element_content">{el.data.descr}</div>
												<div className="event_element_links">
													<div className="event_element_date">
														<p>{el.data.date}</p>
														<p>{el.data.loc}</p>
													</div>
													<div
														className="event_element_btn"
														onClick={() => {
															window.open(el.link);
														}}
													>
														<p>{t('events_more')}</p>
													</div>
												</div>
											</div>
										</SwiperSlide>
									);
								}
							})}
						</Swiper>
					</div>
				</div>
			</div>
		);
	}
}

export default EventsPageMobile;
