import React, { useEffect, useState } from 'react';
import Speaker from '../speaker/speaker';
import './lecture_hall-box.scss';
import speaker1 from '../../../../assets/images/artist_avatars/speaker_ava-1.png';
import speaker2 from '../../../../assets/images/artist_avatars/speaker_ava-2.png';
import speaker3 from '../../../../assets/images/artist_avatars/speaker_ava-3.png';
import speaker4 from '../../../../assets/images/artist_avatars/speaker_ava-4.png';
import speaker5 from '../../../../assets/images/artist_avatars/speaker_ava-5.png';
import BtnTicket from '../../../../ui_components/ticket_btn/BtnTicket';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function LectureHallBox(params) {
	const { t, i18n } = useTranslation();
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
		<div className="lecturehallbox">
			<div className="lecturehallbox__title-wrapper">
				<div className="lecturehallbox__title-inner">
					<div
						className={
							params.child && i18n.translator.language == 'en'
								? 'lecturehallbox__title-en '
								: params.child && i18n.translator.language == 'ru'
								? 'lecturehallbox__title '
								: i18n.translator.language == 'en'
								? 'lecturehallbox__title-en  initialized'
								: 'lecturehallbox__title initialized'
						}
					>
						{t('lecture')} {t('lecture')}&nbsp;
					</div>
				</div>
				<div style={{ position: 'relative', right: '-40px', top: '-40px' }}>
					<BtnTicket />
				</div>
			</div>

			{lectures[0] && lectures[0].length > 0 && !params.child ? (
				<div className="lecturehallbox__schedule" style={{ height: '100%' }}>
					<div className="lecturehallbox__schedule-date">{lectures[0][0].date}</div>
					<div className="lecturehallbox__schedule-speakers" style={{ display: 'flex', flexWrap: 'wrap' }}>
						{lectures[0].map((el, i) => {
							return <Speaker key={i} ava={el.pic} date={`${el.start} - ${el.end}`} name={el.descr} />;
						})}
					</div>
				</div>
			) : (
				''
			)}
			{lectures[1] && lectures[1].length > 0 && !params.child ? (
				<div className="lecturehallbox__schedule" style={{ height: '100%' }}>
					<div className="lecturehallbox__schedule-date">{lectures[1][0].date}</div>
					<div className="lecturehallbox__schedule-speakers" style={{ display: 'flex', flexWrap: 'wrap' }}>
						{lectures[1].map((el, i) => {
							return <Speaker key={i} ava={el.pic} date={`${el.start} - ${el.end}`} name={el.descr} />;
						})}
					</div>
				</div>
			) : (
				''
			)}
			{lectures.length < 1 || params.child ? (
				<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div className="chess-icon"></div>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default LectureHallBox;
