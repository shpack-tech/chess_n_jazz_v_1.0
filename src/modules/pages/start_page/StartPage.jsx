import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './page_styles/start_page.scss';
import './page_styles/logo.scss';
import './page_styles/picture.scss';
import './page_styles/authors.scss';
import agutin from '../../../assets/images/heap/Cardagutin.png';
import jordan from '../../../assets/images/heap/Cardjordan.png';
import portio from '../../../assets/images/heap/Cardportico.png';
import dorn from '../../../assets/images/heap/Carddorn.png';
import heading from '../../../assets/icons/H1Chess&Jazz.svg';
import arrow from '../../../assets/icons/arrow-next.svg';
import asterisk from '../../../assets/icons/star.svg';

import MPSlider from './slider_mp/MPSlider';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import { PageContext } from '../../../PageContext';
import { useSpring, a } from '@react-spring/web';
import './flip.css';

function StartPage(params) {
	const [page, setPage] = useContext(PageContext);
	const { t, i18n } = useTranslation();
	const [promoArtists, setPromoArtists] = useState([]);
	const [info, setInfo] = useState([]);
	const [manifest, setManifest] = useState('');
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	const [flipped, set] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,

		config: { mass: 5, tension: 500, friction: 80 },
	});

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/igbfadsk2.php').then((resp) => {
			setManifest(resp.data[0].text);
		});
	}, []);
	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/bbbbbbbbbbbbbbbbbb.php').then((resp) => {
			setInfo(resp.data);
		});
	}, []);
	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/1188282.php').then((resp) => {
			// const date1Arr = [];
			// const date2Arr = [];

			// const helper = [];
			// resp.data.forEach((el) => {
			// 	if (!helper.includes(el.date)) {
			// 		helper.push(el.date);
			// 	}
			// });
			// resp.data.forEach((el) => {
			// 	if (el.date === helper[0]) {
			// 		date1Arr.push(el);
			// 	} else {
			// 		date2Arr.push(el);
			// 	}
			// });
			setPromoArtists(resp.data);
		});
	}, []);
	return (
		<>
			<div className={params.child === true ? 'container page_split child' : 'container page_split'}>
				<div className="left-part flex fill center" onClick={() => set((state) => !state)}>
					<a.div className="c back" style={{ opacity: opacity.to((o) => 1 - o), filter: flipped ? 'blur(100px)' : '' }}>
						<img src={heading} alt="" />
					</a.div>
					<a.div
						className="c front"
						style={{
							opacity,
							filter: !flipped ? 'blur(100px)' : '',
							padding: '80px',
						}}
						dangerouslySetInnerHTML={{ __html: manifest }}
					></a.div>
				</div>
				<div className="right-part">
					<div className="main-page__picture">
						<BtnTicket />
						<span>
							<MPSlider child={params.child} />
						</span>
					</div>

					<div className="info-container">
						{info.length > 0 && !params.child ? (
							<>
								<div>{info[0].date}</div>
								<img src={asterisk} alt="*" />
								<div>{info[0].location}</div>
								<img src={asterisk} alt="*" />
								<div>{info[0].date}</div>
								<img src={asterisk} alt="*" />
								<div>{info[0].location}</div>
								<img src={asterisk} alt="*" />
								<div>{info[0].date}</div>
								<img src={asterisk} alt="*" />
							</>
						) : (
							''
						)}
					</div>
					<div className="bottom-container" style={{ width: '100%', position: 'relative' }}>
						{promoArtists.length < 1 || params.child ? (
							<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<div className="chess-icon"></div>
							</div>
						) : (
							<img
								src={promoArtists[0].banner}
								onClick={() => page.swipeForward()}
								style={{ height: '100%', width: '100%', objectFit: 'cover', cursor: 'pointer' }}
							/>
						)}
						<button
							className="button-next"
							style={{ position: 'absolute', zIndex: '1', right: 0, top: 0 }}
							onClick={() => {
								page.swipeForward();
							}}
						>
							<div className="next-container">
								<div className="button-arrow">
									<img src={arrow} alt="" />
								</div>

								<div className="button-next-hover">
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
									<img src={arrow} alt="" />
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* <BtnTicket /> */}
		</>
	);
}

export default StartPage;
