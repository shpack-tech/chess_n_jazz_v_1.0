import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import sponsor1 from '../../../assets/icons/sp1.svg';
import sponsor2 from '../../../assets/icons/Porsche.svg';
import sponsor3 from '../../../assets/icons/Visa.svg';
import sponsor4 from '../../../assets/icons/Lamoda.svg';
import sponsor5 from '../../../assets/icons/Точка.svg';

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
			<div className="s-box-m" style={ms_styles}>
				{pool.map((el, i) => {
					return <img src={el.logo} key={i} style={{ maxWidth: '100px' }} alt={el.name} />;
				})}
			</div>
		</div>
	);
}

export default SponsorPageMobile;
