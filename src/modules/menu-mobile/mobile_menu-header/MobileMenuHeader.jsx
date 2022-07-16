import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import MobileMenuList from '../mobile_menu-list/MobileMenuList';
import './mobile_menu-header.scss';

import asterisk from '../../../assets/icons/star.svg';

function MobileMenuHeader() {
	const [menuMobileState, setMenuMobileState] = useState(false);
	const { t, i18n } = useTranslation();
	const [info, setInfo] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/bbbbbbbbbbbbbbbbbb.php').then((resp) => {
			setInfo(resp.data);
		});
	}, []);

	useEffect(() => {
		menuMobileState ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'scroll');
	});
	function autoClose() {
		setMenuMobileState(!menuMobileState);
	}

	return (
		<>
			<div className="m-menu" style={{ position: 'fixed', background: '#FFF', zIndex: 10 }}>
				<div
					className={menuMobileState ? 'm-menu__btn open' : 'm-menu__btn closed'}
					onClick={() => {
						setMenuMobileState(!menuMobileState);
					}}
				>
					<div className="m__btn_top m__btn_top_white"></div>
					<div className="m__btn_middle m__btn_middle_white"></div>
					<div className="m__btn_bot m__btn_bot_white"></div>
				</div>
				<div className="m-menu__content m-menu__content_white">
					{info.length > 0 ? (
						<>
							<span>{info[0].date}</span>
							<img src={asterisk} alt="" />
							<span>{info[0].location}</span>
							<img src={asterisk} alt="" />
							<span>{info[0].date}</span>
							<img src={asterisk} alt="" />
							<span>{info[0].date}</span>
							<img src={asterisk} alt="" />
							<span>{info[0].date}</span>
						</>
					) : (
						''
					)}
				</div>
				<div
					className="m-menu__buy"
					onClick={() => {
						const url = document.querySelector('.js-yaticket-button');
						url.click();
					}}
				>
					<p>{t('buy a ticket1')}</p>
					<p>{t('buy a ticket2')}</p>
				</div>
			</div>
			<MobileMenuList displayed={menuMobileState} close={autoClose} />
		</>
	);
}

export default MobileMenuHeader;
