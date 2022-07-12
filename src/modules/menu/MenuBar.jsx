import React, { useState, useContext } from 'react';
import { PageContext } from '../../PageContext';
import { useTranslation } from 'react-i18next';

import './sidebar.scss';
import yt from '../../assets/icons/youtube.svg';
import inst from '../../assets/icons/insta.svg';
import vk from '../../assets/icons/vk.svg';
import light_yt from '../../assets/icons/youtubeyt.svg';
import light_inst from '../../assets/icons/instainst.svg';
import light_vk from '../../assets/icons/vkvk.svg';
import menu_toggle from '../../assets/icons/menu-dark-icon.svg';
import light_menu from '../../assets/icons/menu-darkmenubutton.svg';
import menu_idle from '../../assets/icons/menusquare.svg';
import light_menu_cross from '../../assets/icons/close-lightmenu-cross.svg';
import menu_cross from '../../assets/icons/close-darklight.svg';

import MenuBody from './menu_body/MenuBody';

function MenuBar() {
	const [page, setPage] = useContext(PageContext);
	const params = page.pages[page.current];
	const [menuState, setMenuState] = useState(false);
	const theme = {
		background: page.pages[page.current].theme === 'dark' && !menuState ? '#000' : '#F4F3F3',
		borderRight: page.pages[page.current].theme === 'dark' && !menuState ? '1px solid #4f4f4f' : '1px solid #BEBEBE',
	};
	const buttons = {
		vk: page.pages[page.current].theme === 'dark' && !menuState ? light_vk : vk,
		inst: page.pages[page.current].theme === 'dark' && !menuState ? light_inst : inst,
		yt: page.pages[page.current].theme === 'dark' && !menuState ? light_yt : yt,
		menu_toggle: page.pages[page.current].theme === 'dark' && !menuState ? light_menu : menu_toggle,
		top_btn: page.pages[page.current].theme === 'dark' && !menuState ? light_menu_cross : menu_cross,
	};

	if (page.current === 0) {
		buttons.top_btn = menu_idle;
	}

	const { t, i18n } = useTranslation();

	const menu_top = menuState ? (
		<p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{t('festival')}</p>
	) : (
		<img
			style={{ cursor: 'pointer' }}
			src={buttons.top_btn}
			alt=""
			onClick={() => {
				page.swipeBack();
			}}
		/>
	);

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className="menu_container">
			<div className="sidebar" style={theme}>
				<div className="sidebar__title">
					{menu_top}
					{i18n.language === 'ru' ? (
						<button
							onClick={() => {
								changeLanguage('en');
								window.location.reload();
							}}
							style={
								page.pages[page.current].theme === 'dark' && !menuState
									? { color: '#fff', cursor: 'pointer', fontSize: '20px', padding: 0, marginTop: '20px' }
									: { color: '#000', cursor: 'pointer', fontSize: '20px', padding: 0, marginTop: '20px' }
							}
						>
							EN
						</button>
					) : (
						<button
							onClick={() => {
								changeLanguage('ru');
								window.location.reload();
							}}
							style={
								page.pages[page.current].theme === 'dark'
									? { color: '#fff', cursor: 'pointer', fontSize: '20px', padding: 0, marginTop: '20px' }
									: { color: '#000', cursor: 'pointer', fontSize: '20px', padding: 0, marginTop: '20px' }
							}
						>
							RU
						</button>
					)}
				</div>

				<div className="sidebar__menu-icon" onClick={() => setMenuState(!menuState)} style={{ cursor: 'pointer' }}>
					<img src={buttons.menu_toggle} alt="" />
				</div>
				<div className="sidebar__social">
					{/* <a>
						<img src={buttons.inst} alt="" />
					</a> */}
					<a href="https://vk.com/chessandjazz">
						<img src={buttons.vk} alt="" />
					</a>
					<a>
						<img src={buttons.yt} alt="" />
					</a>
				</div>
			</div>
			<div style={{ position: 'relative' }}>
				<MenuBody displayed={menuState} transit_to={0} />
			</div>
		</div>
	);
}

export default MenuBar;
