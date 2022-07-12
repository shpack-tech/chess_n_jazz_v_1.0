import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import slide_1 from '../../../../assets/images/events/Партия №3/slide_1.JPG';
import slide_2 from '../../../../assets/images/events/Партия №3/slide_2.JPG';
import slide_3 from '../../../../assets/images/events/Партия №3/slide_3.JPG';
import slide_4 from '../../../../assets/images/events/Партия №3/slide_4.JPG';
import slide_5 from '../../../../assets/images/events/Партия №3/slide_5.JPG';
import slide_6 from '../../../../assets/images/events/Партия №3/slide_6.JPG';
import slide_7 from '../../../../assets/images/events/Партия №3/slide_7.JPG';

import './events_slider.scss';

// import required modules
import { Navigation } from 'swiper';

export default function EventsSlider4() {
	return (
		<>
			<Swiper loop={true} loopFillGroupWithBlank={true} navigation={true} modules={[Navigation]} className="mySwiper">
				<SwiperSlide>
					<img loading="lazy" src={slide_1} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_2} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_3} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_4} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_5} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_6} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_7} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
