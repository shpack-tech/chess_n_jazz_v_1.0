import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import arrow from '../../../assets/icons/arrow-next.svg';
import plus from '../../../assets/icons/plus_icon.svg';
import minus from '../../../assets/icons/minus_icon.svg';
import left_arrow from '../../../assets/icons/left-big-arrow.svg';
import right_arrow from '../../../assets/icons/right-big-arrow.svg';
import eventcard1 from '../../../assets/images/heap/1eventcard.png';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import EventBLock from './event_block/EventBlock';

import { PageContext } from '../../../PageContext';

import './events.scss';
import EventsSlider1 from './events_sliders/EventsSlider1';
import EventsSlider2 from './events_sliders/EventsSlider2';
import EventsSlider3 from './events_sliders/EventsSlider3';
import EventsSlider4 from './events_sliders/EventsSlider4';
import EventsSlider5 from './events_sliders/EventsSlider5';
import EventsSlider6 from './events_sliders/EventsSlider6';
import EventsSlider7 from './events_sliders/EventsSlider7';
import EventsSlider8 from './events_sliders/EventsSlider8';
import EventsSlider9 from './events_sliders/EventsSlider9';
import EventsSlider10 from './events_sliders/EventsSlider10';
import { t } from 'i18next';

const events_2021 = [
	{
		slider: <EventsSlider1 />,
		title: 'Chess & Jazz Brunch 2021',
		date: 'events_date1',
		location: 'events_moscow',
		description: 'events_description1',
		link: 'https://www.elle.ru/stil-zhizni/events/shakhmaty-eto-modno-gosti-brancha-chess-and-jazz-v-dukhe-italyanskoi-rivery/',
	},
];

const events_2020 = [
	{
		slider: <EventsSlider2 />,
		title: 'Chess & Jazz Brunch 2020',
		date: 'events_date2',
		location: 'events_moscow',
		description: 'events_description2',
		link: 'https://www.buro247.ru/news/lifestyle/14-sep-2020-royal-studio-brunch-chess-jaz.html?gallery=180669&slide=5',
	},
];

const events_2019 = [
	{
		slider: <EventsSlider3 />,
		title: 'events_title1',
		date: 'events_date3',
		location: 'events_moscow',
		description: 'events_description3',
		link: 'https://www.buro247.ru/news/lifestyle/13-dec-2019-party-chess-and-jazz.html?gallery=180218&slide=1',
	},
	{
		slider: <EventsSlider4 />,
		title: 'events_title2',
		date: 'events_date4',
		location: 'events_moscow',
		description: 'events_description4',
		link: 'https://www.cosmo.ru/lifestyle/news/18-07-2019/shahmatnaya-vecherinka-partiya-lll-v-preddverie-festivalya-chess-and-jazz/',
	},
	{
		slider: <EventsSlider5 />,
		title: 'events_title3',
		date: 'events_date5',
		location: 'events_moscow',
		description: 'events_description5',
		link: 'https://www.cosmo.ru/lifestyle/stil-zhizni/v-moskve-proshla-vecherinka-partiya-isaia-v-petrovskom-passazhe/',
	},
	{
		slider: <EventsSlider8 />,
		title: 'Chess & Jazz 2019',
		date: 'events_date6',
		location: 'events_moscow',
		description: 'events_description6',
		link: 'https://bazaar.ru/heroes/parties/kak-proshel-festival-chess-and-jazz/',
	},
	{
		slider: <EventsSlider9 />,
		title: 'events_title5',
		date: 'events_date7',
		location: 'events_almaty',
		description: 'events_description7',
		link: 'https://www.buro247.kz/buro-choise/events/kak-proshel-festival-chess-jazz.html',
	},
	{
		slider: <EventsSlider10 />,
		title: 'Chess & Jazz Singapore',
		date: 'events_date8',
		location: 'events_singapore',
		description: 'events_description8',
		link: 'https://www.robbreport.com.sg/interview-with-salio-jazz-singer-songwriter-i-was-nine-when-i-wrote-my-first-song/',
	},
];

const events_2018 = [
	{
		slider: <EventsSlider6 />,
		title: 'events_title4',
		date: 'events_date9',
		location: 'events_moscow',
		description: 'events_description9',
		link: 'https://www.timeout.ru/msk/feature/481804',
	},
	{
		slider: <EventsSlider7 />,
		title: 'Chess & Jazz 2018',
		date: 'events_date10',
		location: 'events_moscow',
		description: 'events_description10',
		link: 'https://www.kommersant.ru/doc/3681335',
	},
];

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
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('events_contacts')}</div>
					<img src={arrow} alt="" />
				</div>
			</div>
		</div>
	);
}

export default EventsPage;
