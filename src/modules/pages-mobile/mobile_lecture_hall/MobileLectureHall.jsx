import React, { useState, useEffect } from 'react';
import Speaker from '../../pages/lecture_hall/speaker/speaker';
import './mobile_lecture_hall.scss';

import { useTranslation } from 'react-i18next';
import axios from 'axios';

function MobileLectureHall() {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(true);
	const [isOpen2, setIsOpen2] = useState(false);

	const [lectures, setLectures] = useState([]);

	useEffect(() => {
		let lng_var;
		i18n.translator.language === 'ru' ? (lng_var = 'handlers') : (lng_var = 'enghandlers');
		axios.get('https://www.chessandjazz.com/4311/' + lng_var + '/jnsdijvn.php').then((resp) => {
			const lecture1Arr = [];
			const lecture2Arr = [];

			const helper = [];
			resp.data.forEach((el) => {
				if (!helper.includes(el.date)) {
					helper.push(el.date);
				}
			});
			resp.data.forEach((el) => {
				if (el.date === helper[0]) {
					lecture1Arr.push(el);
				} else {
					lecture2Arr.push(el);
				}
			});
			setLectures([lecture1Arr, lecture2Arr]);
		});
	}, []);

	return (
		<div className="mobilelecturehall" id="lecture">
			<div className="lecturehallbox__title-inner r-line">
				<span style={{ display: 'block' }} className="lecturehallbox__title ">
					{t('lecture')} {t('lecture')}&nbsp;
				</span>
			</div>
			<div className="lecturehallbox__schedule" style={{ paddingBottom: 0 }}>
				<div
					className="lecturehallbox__schedule-date"
					style={{ marginBottom: 0 }}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					{lectures[0] && lectures[0].length > 0 ? lectures[0][0].date : ''}

					<div className="item_icon">
						<div className="item_icon_h"> </div>
						<div className="item_icon_v" style={isOpen ? { transform: 'rotate(0)' } : {}}>
							{' '}
						</div>
					</div>
				</div>

				{lectures[0] && lectures[0].length > 0 ? (
					<div
						className="lecturehallbox__schedule-speakers"
						style={isOpen ? { maxHeight: '500px', padding: '40px 20px' } : { maxHeight: 0, padding: 0 }}
					>
						{lectures[0].map((el, i) => {
							return <Speaker key={i} ava={el.pic} date={`${el.start} - ${el.end}`} name={el.descr} />;
						})}
					</div>
				) : (
					''
				)}
			</div>
			<div className="lecturehallbox__schedule">
				<div
					className="lecturehallbox__schedule-date"
					onClick={() => {
						setIsOpen2(!isOpen2);
					}}
				>
					{lectures[1] && lectures[1].length > 0 ? lectures[1][0].date : ''}

					<div className="item_icon">
						<div className="item_icon_h"> </div>
						<div className="item_icon_v" style={isOpen2 ? { transform: 'rotate(0)' } : {}}>
							{' '}
						</div>
					</div>
				</div>

				{lectures[1] && lectures[1].length > 0 ? (
					<div className="lecturehallbox__schedule-speakers" style={isOpen2 ? { maxHeight: '500px' } : { maxHeight: 0, padding: 0 }}>
						{lectures[1].map((el, i) => {
							return <Speaker key={i} ava={el.pic} date={`${el.start} - ${el.end}`} name={el.descr} />;
						})}
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default MobileLectureHall;
