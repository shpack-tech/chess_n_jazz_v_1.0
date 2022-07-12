import React, { useContext, useEffect, useState } from 'react';
import './gastronomy-box.scss';
import GastronomyItem from '../gastronomy_item/GastronomyItem';
import itemlogo1 from '../../../../assets/images/partners/gastronomyitem-logo-1.png';
import itemlogo2 from '../../../../assets/images/partners/gastronomyitem-logo-2.png';
import itemlogo3 from '../../../../assets/images/partners/gastronomyitem-logo-3.png';
import itemlogo4 from '../../../../assets/images/partners/gastronomyitem-logo-4.png';
import itemlogo5 from '../../../../assets/images/partners/gastronomyitem-logo-5.png';
import itemlogo6 from '../../../../assets/images/partners/gastronomyitem-logo-6.png';
import itemlogo7 from '../../../../assets/images/partners/gastronomyitem-logo-7.png';
import vector10 from '../../../../assets/icons/Vector 10.svg';
import BtnTicket from '../../../../ui_components/ticket_btn/BtnTicket';

import axios from 'axios';

import { useTranslation } from 'react-i18next';
import { PageContext } from '../../../../PageContext';
import { t } from 'i18next';

function GastronomyBox(params) {
	const { t, i18n } = useTranslation();
	const [page, setPage] = useContext(PageContext);
	const [sponsors, setSponsors] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');

		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/p;plppkovf.php').then((resp) => {
			setSponsors(resp.data);
		});
	}, []);

	return (
		<div className="gastronomybox-g">
			<div className="gastronomybox-g__title-wrapper">
				<div className="gastronomybox-g__title-inner">
					<div
						className={
							params.child && i18n.translator.language == 'en'
								? 'gastronomybox-g__title-en '
								: params.child && i18n.translator.language == 'ru'
								? 'gastronomybox-g__title '
								: i18n.translator.language == 'en'
								? 'gastronomybox-g__title-en  initialized'
								: 'gastronomybox-g__title initialized'
						}
					>
						{t('gastronomy')} {t('gastronomy')}&nbsp;
					</div>
				</div>

				<div style={{ position: 'relative', margin: '-40px -40px 0 0' }}>
					<BtnTicket />
				</div>
			</div>
			{sponsors.length > 0 && !params.child ? (
				<div className="gastronomybox-g__grid">
					{sponsors.map((el, i) => {
						return <GastronomyItem key={i} title={el.name} text={el.descr} img={el.logo} />;
					})}
				</div>
			) : (
				<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div className="chess-icon"></div>
				</div>
			)}
			<div className="gastronomybox-g__next" onClick={() => page.swipeForward()}>
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
				<span>{t('prevEvts')}</span>
				<img src={vector10} alt="" />
			</div>
		</div>
	);
}

export default GastronomyBox;
