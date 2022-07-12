import React, { useContext, useState, useEffect } from 'react';
import vector10 from '../../../assets/icons/Vector 10.svg';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import { useTranslation } from 'react-i18next';
import { PageContext } from '../../../PageContext';
import arrow from '../../../assets/icons/arrow-next.svg';
import sponsor1 from '../../../assets/icons/sp1.svg';
import sponsor2 from '../../../assets/icons/Porsche.svg';
import sponsor3 from '../../../assets/icons/Visa.svg';
import sponsor4 from '../../../assets/icons/Lamoda.svg';
import sponsor5 from '../../../assets/icons/Точка.svg';
import axios from 'axios';

const s_style = {
	display: 'grid',
	gridTemplateColumns: 'repeat(7, 1fr)',
	gridTemplateRows: 'repeat(4, 1fr)',
	gridColumnGap: '10px',
	gridRowGap: '10px',
};

function SponsorPage(params) {
	const { t, i18n } = useTranslation();
	const [page, setPage] = useContext(PageContext);
	const [company, setCompany] = useState(false);
	const [pool, setPool] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');

		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/dkdsf.php').then((resp) => {
			setPool(resp.data);
		});
	}, []);

	return (
		<div className=" container sponsors" style={{ width: 'calc(100% - 84px)', background: '#fff', height: '100vh', display: 'flex' }}>
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
							{company ? (
								<div
									className="sponsor-display"
									style={{
										fontSize: '16px',
										color: 'color: #727272',
										width: '250px',
										textAlign: 'right',
										position: 'relative',
										right: '40px',
										bottom: '100px',
										display: 'flex',
										flexDirection: 'column',
										opacity: '0.7',
									}}
								>
									<span>{t('company')}</span>
									<span>{company}</span>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
				{pool.length > 0 && !params.child ? (
					<div className="bottom_sponsor_row" style={s_style}>
						{pool.map((el, i) => {
							return (
								<img
									src={el.logo}
									key={i}
									alt={el.name}
									name={el.name}
									onMouseEnter={() => setCompany(el.name)}
									onMouseLeave={() => setCompany(false)}
								/>
							);
						})}
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
