import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './mobile_menu-list.scss';

import { useSpring, animated } from 'react-spring';
import { Manipulation } from 'swiper';
import i18n from '../../../i18n';

function MobileMenuList(params) {
	const { t, i18n } = useTranslation();

	const { x } = useSpring({
		x: params.displayed ? 0 : 10,
	});

	const menu = [
		{
			num: '01',
			anchor: 'jazz',
			title: 'jazz',
		},
		{
			num: '02',
			anchor: 'chess',
			title: 'chess',
		},
		// {
		// 	num: '03',
		// 	anchor: 'lecture',
		// 	title: 'lecture',
		// },
		// {
		// 	num: '04',
		// 	anchor: 'gastronomy',
		// 	title: 'gastronomy',
		// },
		{
			num: '03',
			anchor: 'events',
			title: 'events',
		},
		// {
		// 	num: '06',
		// 	anchor: 'sponsors',
		// 	title: 'sponsors',
		// },
		{
			num: '04',
			anchor: 'contacts',
			title: 'events_contacts',
		},
	];

	const [clang, setClang] = useState(i18n.language);

	return (
		<animated.div
			className="mobilemenu__list"
			style={{
				left: x.to((x) => `-${x * 10}vw`),
				position: 'fixed',
				background: '#fff',
				height: '100%',
				width: '100%',
				margin: 0,
				padding: '16px',
				boxSizing: 'border-box',
				zIndex: 10,
				top: '48px',
			}}
		>
			<ul>
				{menu.map((el, i) => {
					return (
						<li key={i}>
							<span>{el.num} /</span>
							<a
								href={`#${el.anchor}`}
								onClick={(e) => {
									e.preventDefault();
									params.close();
									const targ = document.querySelector(`#${el.anchor}`);
									targ.scrollIntoView({ behavior: 'smooth', block: 'start' });
								}}
							>
								{t(el.title)}
							</a>
						</li>
					);
				})}
				<li>
					<span>/</span>
					{clang === 'ru' ? (
						<a
							onClick={() => {
								i18n.changeLanguage('en');
								setClang(i18n.language);
								window.location.reload();
							}}
						>
							ENGLISH VERSION
						</a>
					) : (
						<a
							onClick={() => {
								i18n.changeLanguage('ru');
								setClang(i18n.language);
								window.location.reload();
							}}
						>
							РУССКАЯ ВЕРСИЯ
						</a>
					)}
				</li>
			</ul>
		</animated.div>
	);
}

export default MobileMenuList;
