import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';

import './mobile_viewer_slider.scss';
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function MobileViewerSlider(params) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [controlledSwiper, setControlledSwiper] = useState(null);

	const pics_arr = params.options.pics.split('*splitter*');
	if (pics_arr.length > 0) {
		pics_arr.pop();
	}

	return (
		<>
			<Swiper
				id="gallery"
				style={{ minHeight: '420px', width: '100%' }}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				spaceBetween={0}
				slidesPerView={1}
			>
				{pics_arr.map((el, i) => {
					return (
						<SwiperSlide style={{ height: '100%', width: '100%' }} key={i}>
							{' '}
							<img style={{ height: '100%', width: '100%' }} loading="lazy" src={el} alt="" />{' '}
						</SwiperSlide>
					);
				})}
			</Swiper>

			<Swiper className="gallery-thumbs" style={{ height: '125px' }} id="thumbs" spaceBetween={5} slidesPerView={3} onSwiper={setThumbsSwiper}>
				{pics_arr.map((el, i) => {
					return (
						<SwiperSlide key={i}>
							{' '}
							<img loading="lazy" src={el} alt="" />{' '}
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}

export default MobileViewerSlider;
