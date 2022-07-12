import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import slide_1 from '../../../../assets/images/events/Казахстан/slide_1.jpg';
import slide_2 from '../../../../assets/images/events/Казахстан/slide_2.jpg';
import slide_3 from '../../../../assets/images/events/Казахстан/slide_3.jpg';
import slide_4 from '../../../../assets/images/events/Казахстан/slide_4.jpg';
import slide_5 from '../../../../assets/images/events/Казахстан/slide_5.jpg';
import slide_6 from '../../../../assets/images/events/Казахстан/slide_6.jpg';
import slide_7 from '../../../../assets/images/events/Казахстан/slide_7.jpg';

import './events_slider.scss';

// import required modules
import { Navigation } from 'swiper';

export default function EventsSlider9() {
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
