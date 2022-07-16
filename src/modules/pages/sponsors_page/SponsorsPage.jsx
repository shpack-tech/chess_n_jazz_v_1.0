import React, { useContext, useState, useEffect } from 'react';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import { useTranslation } from 'react-i18next';
import { PageContext } from '../../../PageContext';
import arrow from '../../../assets/icons/arrow-next.svg';
import axios from 'axios';
import './grid-css-css.scss';

function SponsorPage(params) {
	const { t, i18n } = useTranslation();
	const [page, setPage] = useContext(PageContext);
	const [pool, setPool] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');

		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/dkdsf.php').then((resp) => {
			setPool(resp.data);
		});
	}, []);

	return (
		<div className=" container sponsors" style={{ width: 'calc(100% - 84px)', background: '#F4F3F3', height: '100vh', display: 'flex' }}>
			<div style={{ width: '100%', padding: '40px' }}>
				<div className="top_sponsor_row" style={{ width: '100%' }}>
					<div className="chess-content__top" style={{ width: '100%' }}>
						<div className="jazz-marquee-w" style={{ width: '70%' }}>
							<div className="jazz-marquee chess-marquee">
								<div
									className={
										params.child && i18n.translator.language == 'en'
											? 'chess_title-en cts-en title_cnj'
											: params.child && i18n.translator.language == 'ru'
											? 'chess_title title_cnj'
											: i18n.translator.language == 'en'
											? 'chess_title-en cts-en title_cnj initialized'
											: 'title_cnj initialized cts chess_title'
									}
									style={{ color: '#000', padding: '5px 0' }}
								>
									{t('sponsors')} {t('sponsors')}&nbsp;
								</div>
							</div>
						</div>

						<div
							className="chess-right"
							style={{
								position: 'relative',
								top: '-40px',
								right: '-40px',
								width: '30%',
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'flex-end',
							}}
						>
							<BtnTicket />
						</div>
					</div>
				</div>

				{pool.length > 0 && !params.child ? (
					<div className="bottom_sponsor_row">
						<div className="sponsors_official">
							<h1>{t('of_s')}</h1>
							<div>
								{pool.map((el, i) => {
									if (i < 8) {
										return (
											<span key={i}>
												<img src={el.logo} alt={el.name} name={el.name} />
											</span>
										);
									}
								})}
							</div>
						</div>
						<div className="sponsors_info">
							<h1>{t('inf_s')}</h1>
							<div>
								{pool.map((el, i) => {
									if (i >= 8) {
										return (
											<span key={i}>
												<img src={el.logo} alt={el.name} name={el.name} />
											</span>
										);
									}
								})}
							</div>
						</div>
					</div>
				) : (
					<div style={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<div className="chess-icon"></div>
					</div>
				)}
			</div>{' '}
			<div
				className="chess-button2"
				style={{ height: '100vh' }}
				onClick={() => {
					page.swipeForward();
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
	);
}
export default SponsorPage;
