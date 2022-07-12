import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSpring, animated } from 'react-spring';

import './menulist.scss';
import menu_arrow from '../../../assets/icons/menu-arrow.svg';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';

function MenuBody(params) {
	const { t, i18n } = useTranslation();

	const { x } = useSpring({
		x: params.displayed ? 0 : 10,
	});

	return (
		<animated.div className="menulist" style={{ left: x.to((x) => `-${x * 10}vw`), position: 'absolute' }}>
			<ul>
				<li>
					<span>01 /</span>
					<a href="/jazz">{t('jazz')}</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				<li>
					<span>02 /</span>
					<a href="/chess">{t('chess')}</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				{/* <li>
					<span>03 /</span>
					<a href="/lecture-hall">{t('lecture')}</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li> */}
				{/* <li>
					<span>04 /</span>
					<a href="/gastronomy">{t('gastronomy')}</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li> */}
				<li>
					<span>03 /</span>
					<a href="/events">{t('events')}</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				<li>
					<span>04 /</span>
					<a href="/contacts">{t('events_contacts')}</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				{/* <li>
					<span>07 /</span>
					<a href="/sponsors">{t('sponsors')}</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li> */}
			</ul>
			<BtnTicket />
		</animated.div>
	);
}

export default MenuBody;
