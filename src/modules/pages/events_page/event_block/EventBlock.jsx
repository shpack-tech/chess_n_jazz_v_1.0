import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './../events_sliders/events_slider.scss';
import { Navigation } from 'swiper';
import arrow from '../../../../assets/icons/arrow-next.svg';
import plus from '../../../../assets/icons/plus_icon.svg';
import minus from '../../../../assets/icons/minus_icon.svg';

import { t } from 'i18next';

function EventBLock(params) {
	const { t, i18n } = useTranslation();
	const [isOpened, setIsOpened] = useState(params.open_default ? true : false);

	const pics_arr = params.event_data.pics.split('*splitter*');
	if (pics_arr.length > 0) {
		pics_arr.pop();
	}

	return (
		<>
			<div
				className="events__content-items__item active"
				onClick={() => {
					setIsOpened(!isOpened);
				}}
			>
				<div>{t(params.event_data.name)}</div>
				<div style={{ height: '40px', width: '40px', cursor: 'pointer' }}>
					<img src={isOpened ? minus : plus} alt="" />
				</div>
			</div>
			<div className={isOpened ? 'events__content-items__wrapper active' : 'events__content-items__wrapper'}>
				<div className="events__content-items__left">
					{params.event_data.pics ? (
						<div className="events__content-items__img">
							<Swiper loop={true} loopFillGroupWithBlank={true} navigation={true} modules={[Navigation]} className="mySwiper">
								{pics_arr.map((el, i) => {
									return (
										<SwiperSlide key={i}>
											<img loading="lazy" key={i} src={el} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					) : (
						''
					)}
				</div>
				<div className="events__content-items__right">
					<div className="events__content-items__top">
						<div className="events__content-items__date">
							<span>{params.event_data.date}</span>
							<span>{params.event_data.loc}</span>
						</div>
						<div className="events__content-items__link">
							<a
								href={params.event_data.link}
								onClick={(e) => {
									e.preventDefault();
									window.open(e.target.href);
								}}
							>
								{t('events_more')}
							</a>
						</div>
					</div>
					<div className="events__content-items__text">{t(params.event_data.descr)}</div>
				</div>
			</div>
		</>
	);
}

export default EventBLock;
