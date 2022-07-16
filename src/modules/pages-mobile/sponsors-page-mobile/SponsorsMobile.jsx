import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function SponsorPageMobile() {
	const { t, i18n } = useTranslation();
	const ms_styles = {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridTemplateRows: 'repeat(3, 1fr)',
		gridColumnGap: '10px',
		gridRowGap: '30px',
		justifyItems: 'center',
		alignItems: 'center',
		padding: '0 16px',
		marginTop: '30px',
	};

	const [pool, setPool] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');

		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/dkdsf.php').then((resp) => {
			setPool(resp.data);
		});
	}, []);

	return (
		<div style={{ background: '#fff' }} id="sponsors">
			<div className="m-sponsors" style={{ borderBottom: '0.5px solid #BEBEBE' }}>
				<div className="s_box__title-inner r-line">
					<span style={{ display: 'block' }} className={i18n.language === 'ru' ? 's_box__title' : 's_box__title-en'}>
						{t('sponsors')} {t('sponsors')}&nbsp;
					</span>
				</div>
			</div>
			<div className="s-box-m">
				{pool.length > 0 ? (
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
			</div>
		</div>
	);
}

export default SponsorPageMobile;
