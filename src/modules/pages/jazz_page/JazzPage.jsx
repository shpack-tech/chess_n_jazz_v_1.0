import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './page_styles/jazz_cards.scss';
import './page_styles/jazz_marquee.scss';
import './page_styles/jazz_chess-btn.scss';
import './page_styles/jazz.scss';

import arrow from '../../../assets/icons/arrow-next.svg';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import ArtistSquare from './artist_square/ArtistSquare';
import ArtistPage from './../../artist_page/ArtistPage';

import { PageContext } from '../../../PageContext';

function JazzPage(params) {
	const [isArtist, setIsArtist] = useState(null);
	const [artists, setArtists] = useState([]);
	const [announces, setAnnounces] = useState([]);
	const [pageContext, setPageContext] = useContext(PageContext);
	const { t, i18n } = useTranslation();
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/plm,p.php').then((resp) => {
			setArtists(resp.data);
			const announcesHelper = [];
			resp.data.forEach((el) => {
				if (el.name === 'anons') {
					announcesHelper.push(el);
				}
			});
			setAnnounces(announcesHelper);
		});
	}, []);

	function goForwardArtist() {
		if (+isArtist < artists.length - 1 - announces.length) {
			setIsArtist(+isArtist + 1);
		} else {
			setIsArtist(null);
			pageContext.swipeForward();
		}
	}
	function goBackwardsArtist() {
		if (+isArtist > 0) {
			setIsArtist(+isArtist - 1);
		} else {
			setIsArtist(null);
		}
	}

	function changeContext(number) {
		if (isArtist === null) {
			setIsArtist(number);
		} else if (isArtist > -1 && isArtist < artists.length - 1) {
			setIsArtist(number);
		} else {
			setIsArtist(null);
		}
	}

	useEffect(() => {
		isArtist !== null ? pageContext.setContext('artist') : pageContext.setContext('scroll');
	});

	if (isArtist == null) {
		return (
			<div className={params.child === true ? 'container jazz-cont child' : 'container jazz-cont'}>
				<div className="jazz-content">
					<div className="jazz-content__top">
						<div className="jazz-marquee-w" style={{ paddingTop: '40px' }}>
							<div
								className={
									params.child && i18n.translator.language == 'en'
										? 'jazz_title-en title_cnj'
										: params.child && i18n.translator.language == 'ru'
										? 'jazz_title title_cnj'
										: i18n.translator.language == 'en'
										? 'jazz_title-en title_cnj initialized'
										: 'title_cnj initialized jazz_title'
								}
							>
								{t('jazz')} {t('jazz')}&nbsp;
							</div>
						</div>

						<div className="jazz-right">
							<BtnTicket />
						</div>
					</div>

					{artists.length > 0 && !params.child ? (
						<div className="jazz-content__bot jazz-content__bot-absolute">
							<div className="all_cards">
								<ArtistSquare artists={artists} context={changeContext} />
							</div>
						</div>
					) : (
						<div style={{ width: '100%', height: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<div className="chess-icon"></div>
						</div>
					)}
				</div>
				<div
					className="chess-button2"
					onClick={() => {
						pageContext.swipeForward();
					}}
				>
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
				</div>
			</div>
		);
	} else {
		const styles = {
			display: 'flex',
			width: 'auto',
			position: 'relative',
			transition: 'all ease 0.3s',
			left: isArtist == 0 ? ('calc(100vw - 80px)' ? artists.length === 1 : '0') : 'calc(' + '-' + (isArtist - 1) * 100 + 'vw - 80px)',
		};

		return (
			<div style={{ position: 'relative' }}>
				<div
					className="artists_big_picture"
					style={{
						display: styles.display,
						width: '100vw',
						position: 'absolute',
						zIndex: '3',
						left: -isArtist * 100 + 'vw',
						transition: styles.transition,
						background: '#fff',
					}}
					onWheel={(e) => {
						if (pageContext.context !== 'scroll') {
							if (e.deltaY == 100 || e.deltaY === 3) {
								goForwardArtist();
							} else if (e.deltaY == -100 || e.deltaY === -3) {
								goBackwardsArtist();
							}
						}
					}}
				>
					{artists.map((el, i) => {
						if (el.name !== 'anons') {
							return <ArtistPage artist={el} key={i} data-index={i} goBack={goBackwardsArtist} goForward={goForwardArtist} />;
						}
					})}
				</div>
			</div>
		);
	}
}

export default JazzPage;
