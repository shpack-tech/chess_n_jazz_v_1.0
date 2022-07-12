import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import arrow from '../../../assets/icons/arrow-next.svg';
import artist2 from '../../../assets/images/heap/Portico_Quartet.png';
import artist1 from '../../../assets/images/heap/image_82.png';
import artist_detail1 from '../../../assets/images/artists/agutin.jpg';
import artist_detail2 from '../../../assets/images/artists/portico-quartet.jpg';
import asterisk from '../../../assets/icons/star.svg';
import artist_avatar from '../../../assets/images/artists/artist-avatar.jpg';

import './jazz_page_mobile.scss';

import ArtistPageMobile from '../../artist_page-mobile/ArtistPageMobile';
import { t } from 'i18next';

function JazzPageMobile() {
	const { t, i18n } = useTranslation();

	const [isCarousel, setIsCarousel] = useState(null);
	const [artists, setArtists] = useState([]);
	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/plm,p.php').then((resp) => {
			setArtists(resp.data);
		});
	}, []);

	function close() {
		setIsCarousel(null);
	}

	if (isCarousel === null) {
		return (
			<div className="mobile-container" style={{ height: 'auto', paddingBottom: '40px' }} id="jazz">
				<div className="m-content m-content-jazz">
					<div className="jazz_box__title-inner r-line">
						<span style={{ display: 'block' }} className={i18n.language === 'ru' ? 'jazz_box__title' : 'jazz_box__title-en'}>
							{t('jazz')} {t('jazz')}&nbsp;
						</span>
					</div>

					<div className="m-cards__container">
						{artists.map((el, i) => {
							return (
								<div
									className="m-card"
									key={i}
									onClick={() => {
										setIsCarousel(i);
									}}
								>
									<div className="m-card__pic">
										<img src={el.smallp} alt="" style={{ objectFit: 'cover' }} />
									</div>
									<div className="m-card__date">
										{el.date} {el.time}
									</div>
									<div className="m-card__name">{t(el.name)}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else {
		return <ArtistPageMobile artist={artists} slide={isCarousel} close={close} />;
	}
}

export default JazzPageMobile;
