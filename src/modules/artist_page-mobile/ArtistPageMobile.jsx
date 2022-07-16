import React, { useEffect, useRef } from 'react';
import MobileArtistProfile from './mobile_artist_profile/MobileArtistProfile';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import './mobile_artist_page.scss';

import './mobile_artist_page_btns/mobile_artist_page_btns.scss';
import arrowleft from '../../assets/icons/arrow-left.svg';
import arrowright from '../../assets/icons/arrow-right.svg';
import closebtn from '../../assets/icons/artist-page-close.svg';

SwiperCore.use([Navigation]);
function ArtistPageMobile(params) {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className="mobileartistpage" style={{ height: 'auto' }}>
			<Swiper
				loop={true}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				style={{ height: 'auto' }}
				// ref={sliderRef}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
				}}
				className="a_swiper"
			>
				{params.artist.map((el, i) => {
					if (el.name !== 'anons') {
						return <SwiperSlide key={i}>{<MobileArtistProfile key={i} artist={el} />}</SwiperSlide>;
					}
				})}
			</Swiper>
			<div className="mobileartistpagebtns">
				<button ref={prevRef}>
					<img src={arrowleft} alt="" />
				</button>
				<button onClick={() => params.close()}>
					<img src={closebtn} alt="" />
				</button>
				<button ref={nextRef}>
					<img src={arrowright} alt="" />
				</button>
			</div>
		</div>
	);
}

export default ArtistPageMobile;
